import assert from 'node:assert';
import path from 'node:path';
import fs from 'node:fs';

// Set up temporary test database path
const testDbPath = path.resolve(process.cwd(), 'server', 'data', 'test_security.db');
if (fs.existsSync(testDbPath)) {
  fs.unlinkSync(testDbPath);
}
process.env.DATABASE_PATH = testDbPath;
process.env.NODE_ENV = 'test';

const { default: app } = await import('../server/index.ts');
const { db } = await import('../server/db.ts');

let server: any;
const PORT = 3099;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function runTests() {
  console.log('🧪 Starting Eduvia Security & Waitlist Audit Tests...\n');

  // Start temporary test server
  await new Promise<void>((resolve) => {
    server = app.listen(PORT, () => {
      resolve();
    });
  });

  try {
    // Test 1: Health Check Endpoint
    console.log('Test 1: Verifying Health Check Endpoint...');
    const healthRes = await fetch(`${BASE_URL}/api/health`);
    assert.strictEqual(healthRes.status, 200, 'Health check should return 200');
    const healthData = await healthRes.json();
    assert.strictEqual(healthData.status, 'healthy');
    console.log('  ✓ /api/health returned 200 OK with expected schema.\n');

    // Test 2: Valid Registration & Server Queue Assignment
    console.log('Test 2: Verifying Valid Registration & Server-Assigned Queue Number...');
    const applicant1 = {
      fullName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      exam: 'NEET',
      targetYear: '2026',
      currentClass: 'Class 12'
    };

    const regRes1 = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicant1)
    });

    assert.strictEqual(regRes1.status, 201, 'Valid submission should return 201 Created');
    const regData1 = await regRes1.json();
    assert.strictEqual(regData1.success, true);
    assert.strictEqual(regData1.isExisting, false);
    assert.strictEqual(typeof regData1.data.queuePosition, 'number');
    assert.strictEqual(regData1.data.queuePosition, 1, 'First registrant must be queue #1');
    assert.strictEqual(regData1.data.exam, 'NEET');
    // Ensure no sensitive fields (like internal DB ID or IP address) are returned to client
    assert.strictEqual(regData1.data.id, undefined);
    assert.strictEqual(regData1.data.ip_address, undefined);
    console.log(`  ✓ Registration successful. Server assigned queue #${regData1.data.queuePosition}.\n`);

    // Test 3: Second Unique Registration (Sequential Increment)
    console.log('Test 3: Verifying Second Unique Registration Increments Queue...');
    const applicant2 = {
      fullName: 'Sneha Patel',
      email: 'sneha.patel@example.com',
      exam: 'JEE',
      targetYear: '2027',
      currentClass: 'Class 11'
    };

    const regRes2 = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicant2)
    });

    assert.strictEqual(regRes2.status, 201);
    const regData2 = await regRes2.json();
    assert.strictEqual(regData2.data.queuePosition, 2, 'Second registrant must be queue #2');
    console.log(`  ✓ Second registration successful. Server assigned queue #${regData2.data.queuePosition}.\n`);

    // Test 4: Duplicate Email Registration Prevention
    console.log('Test 4: Verifying Duplicate Registration Handling...');
    const dupRes = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Aarav Sharma Duplicate',
        email: 'AARAV.SHARMA@example.com', // Case insensitivity test
        exam: 'NEET',
        targetYear: '2026',
        currentClass: 'Class 12'
      })
    });

    assert.strictEqual(dupRes.status, 200, 'Duplicate submission should return 200 with safe confirmation');
    const dupData = await dupRes.json();
    assert.strictEqual(dupData.success, true);
    assert.strictEqual(dupData.isExisting, true);
    assert.strictEqual(dupData.data.queuePosition, 1, 'Must retain original queue #1');
    assert.strictEqual(db.getStats().totalCount, 2, 'Total DB count must remain 2 without duplicate insertion');
    console.log('  ✓ Duplicate handled safely. Retained original queue position without creating duplicate records.\n');

    // Test 5: Server-Side Injection Defense & Validation
    console.log('Test 5: Testing Server-Side Injection Defense...');

    // 5a. XSS Payload in Name
    const xssRes = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: '<script>alert(1)</script>',
        email: 'hacker@example.com',
        exam: 'JEE',
        targetYear: '2026',
        currentClass: 'Class 12'
      })
    });
    assert.strictEqual(xssRes.status, 400, 'Script injection in name must be rejected with 400');
    console.log('  ✓ Blocked XSS payload in fullName.');

    // 5b. Invalid Email
    const invalidEmailRes = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Valid Name',
        email: 'invalid-email-string',
        exam: 'JEE',
        targetYear: '2026',
        currentClass: 'Class 12'
      })
    });
    assert.strictEqual(invalidEmailRes.status, 400, 'Malformed email must be rejected with 400');
    console.log('  ✓ Blocked malformed email.');

    // 5c. Invalid Exam Enum
    const invalidExamRes = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Valid Name',
        email: 'student@example.com',
        exam: 'SAT_COLLEGEBOARD',
        targetYear: '2026',
        currentClass: 'Class 12'
      })
    });
    assert.strictEqual(invalidExamRes.status, 400, 'Unknown exam track must be rejected with 400');
    console.log('  ✓ Blocked invalid exam track parameter.\n');

    // Test 6: Honeypot Bot Trap
    console.log('Test 6: Testing Anti-Bot Honeypot Trap...');
    const botRes = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Bot User',
        email: 'bot@spammer.org',
        exam: 'NEET',
        targetYear: '2026',
        currentClass: 'Class 12',
        company_trap: 'Automated script payload' // Honeypot populated!
      })
    });
    assert.strictEqual(botRes.status, 200, 'Bot should receive dummy response');
    const botData = await botRes.json();
    assert.strictEqual(botData.data.queuePosition, 404);
    assert.strictEqual(db.findByEmail('bot@spammer.org'), null, 'Bot must NOT be inserted into database');
    console.log('  ✓ Honeypot intercepted bot submission. Zero records written to database.\n');

    // Test 7: Rate Limiting Enforcement
    console.log('Test 7: Testing Rate Limiter Protection...');
    // We already made several requests. Let's send more to exceed the 5-request limit.
    let rateLimited = false;
    for (let i = 0; i < 5; i++) {
      const res = await fetch(`${BASE_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `Student Rate ${i}`,
          email: `rate${i}@example.com`,
          exam: 'NEET',
          targetYear: '2026',
          currentClass: 'Class 12'
        })
      });
      if (res.status === 429) {
        rateLimited = true;
        const data = await res.json();
        assert.ok(data.error.includes('Too many registration attempts'));
        assert.ok(res.headers.get('retry-after'));
        break;
      }
    }
    assert.strictEqual(rateLimited, true, 'Rate limiter must trigger HTTP 429 after threshold');
    console.log('  ✓ Rate limiter triggered HTTP 429 Too Many Requests with Retry-After header.\n');

    console.log('🎉 All Security & Audit Tests Passed Successfully!');
  } finally {
    if (server) {
      server.close();
    }
    // Clean up test DB
    try {
      if (fs.existsSync(testDbPath)) fs.unlinkSync(testDbPath);
      if (fs.existsSync(`${testDbPath}-wal`)) fs.unlinkSync(`${testDbPath}-wal`);
      if (fs.existsSync(`${testDbPath}-shm`)) fs.unlinkSync(`${testDbPath}-shm`);
    } catch {
      // ignore
    }
  }
}

runTests().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
