import { numberRegexp, validationMessages, minValidationValue } from './constant';

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

export function rangeValidation(value, condition, errorMessage) {
  switch (false) {
    case value <= condition:
      return errorMessage;
    case !value.startsWith(minValidationValue):
      return validationMessages.min;
    default:
      return symbolValidation(value, errorMessage);
  }
}
