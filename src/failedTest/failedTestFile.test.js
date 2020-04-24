describe('test file', () => {
  test('import and die works', async () => {
    const { doIt } = require('./failedTestFile');
    await doIt();
  });
});
