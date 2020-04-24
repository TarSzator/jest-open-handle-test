/* eslint no-console:0 */

export function getLog(name) {
  return {
    info: console.log.bind(console, `[${name}]`),
  };
}
