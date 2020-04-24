import { getLog } from '../utils/logger';
import { improvedWait } from '../utils/promise-tools';

const log = getLog('main');

async function shortTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export async function doIt() {
  const waiting = improvedWait(25000, { timedOut: true });
  const result = await Promise.race([shortTimeout(), waiting]);
  if (result && result.timedOut) {
    log.info(`... timeout ...`);
  } else {
    waiting.stop();
  }
}
