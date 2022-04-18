import { numberRegexp } from './constant';

export function symbolValidation(value, errorMessage) {
  const matchedValue = !value ? [] : value.match(numberRegexp);
  switch (false) {
    case matchedValue !== null:
      return errorMessage;
    case matchedValue.length >= value.length:
      return errorMessage;
    default:
      return '';
  }
}

export function amountValidation(value, condition, errorMessage) {
  switch (false) {
    case value <= condition:
      return errorMessage;
    default:
      return symbolValidation(value, errorMessage);
  }
}
