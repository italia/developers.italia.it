import { format } from 'util';

// This is a trick to make fail the test suite when a React propTypes doesn't match
// See it like a light type checking

const error = console.error;

console.error = (...args) => {
  error(...args);
  const message = format(...args);
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message);
  }
};
