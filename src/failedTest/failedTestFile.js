import { getLog } from '../utils/logger';
import { wait } from '../utils/promise-tools';

const log = getLog('main');

async function shortTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export async function doIt() {
  const result = await Promise.race([shortTimeout(), wait(25000, { timedOut: true })]);
  if (result && result.timedOut) {
    log.info(`... timeout ...`);
  }
}
