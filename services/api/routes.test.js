const test = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');

const { router, resetDb } = require('./routes');

const createTestServer = async () => {
  const app = express();
  app.use(express.json());
  app.use('/api', router);

  const server = await new Promise((resolve) => {
    const instance = app.listen(0, () => resolve(instance));
  });

  const { port } = server.address();

  return {
    request: (path, options = {}) => fetch(`http://127.0.0.1:${port}${path}`, options),
    close: () => new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve()))),
  };
};

test('POST /api/leads trims optional text and creates lead', async () => {
  resetDb();
  const api = await createTestServer();

  try {
    const response = await api.request('/api/leads', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: '  Alice  ',
        phone: '  ',
        location: '  Phoenix  ',
        requirement: '  5kW rooftop system  ',
      }),
    });

    assert.equal(response.status, 201);
    const body = await response.json();
    assert.equal(body.lead.name, 'Alice');
    assert.equal(body.lead.location, 'Phoenix');
    assert.equal(body.lead.phone, undefined);
    assert.equal(body.lead.requirement, '5kW rooftop system');
  } finally {
    await api.close();
  }
});

test('POST /api/bookings returns field errors when payload is invalid', async () => {
  resetDb();
  const api = await createTestServer();

  try {
    const response = await api.request('/api/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: '',
        phone: '1234',
        address: ' ',
      }),
    });

    assert.equal(response.status, 400);
    const body = await response.json();
    assert.deepEqual(body.error, [
      { path: 'name', message: 'Name is required' },
      { path: 'phone', message: 'Invalid 10-digit phone number' },
      { path: 'address', message: 'Address is required' },
    ]);
  } finally {
    await api.close();
  }
});
