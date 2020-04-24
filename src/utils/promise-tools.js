import { isPositiveInteger } from '../libs/validators/general';

export function wait(timeout, response) {
  return new Promise((resolve, reject) => {
    try {
      if (!isPositiveInteger(timeout)) {
        throw new Error(`timeout must be a number`);
      }
      setTimeout(() => resolve(response), timeout);
    } catch (error) {
      reject(error);
    }
  });
}

export function improvedWait(timeout, response) {
  let timeoutId = null;
  const result = new Promise((resolve, reject) => {
    try {
      if (!isPositiveInteger(timeout)) {
        throw new Error(`timeout must be a number`);
      }
      timeoutId = setTimeout(() => resolve(response), timeout);
    } catch (error) {
      reject(error);
    }
  });
  result.stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  return result;
}
