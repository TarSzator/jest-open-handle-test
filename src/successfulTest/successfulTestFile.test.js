describe('test file', () => {
  test('import and die works', async () => {
    const { doIt } = require('./successfulTestFile');
    await doIt();
  });
});
