import _ from 'lodash';

export function isInteger(int) {
  return _.isInteger(int);
}

export function isPositiveInteger(int) {
  return isInteger(int) && int > 0;
}
