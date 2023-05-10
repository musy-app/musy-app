/**
 * isNumber is a utility function that checks if a value is a number.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumber = (value: any): boolean => {
  return !isNaN(Number(value));
};

export default isNumber;
