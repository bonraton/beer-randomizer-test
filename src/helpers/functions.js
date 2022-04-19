import {
  pintVolume,
  averageVidmarkCoef,
  jokes,
  bacValues,
} from './constant';

export function calculateUserAge(birthDate) {
  return `${
    new Date().getFullYear() - birthDate.slice(0, 4)
  } years`;
}

export function calculateBac(alc, weight, pint) {
  const alcohol = alc.replace(/%/gi, '').replace(/,/g, '.');
  const absoluteAlc = alcohol * pintVolume * pint * 10;
  const bac = absoluteAlc / (weight * averageVidmarkCoef);
  return bac.toFixed(2);
}

export function generateJoke(bac) {
  switch (true) {
    case bac < bacValues.low:
      return jokes.low;
    case bac < bacValues.medium && bac > bacValues.low:
      return jokes.medium;
    case bac < bacValues.strong && bac > bacValues.medium:
      return jokes.strong;
    case bac < bacValues.extremal && bac > bacValues.strong:
      return jokes.extremal;
    case bac >= bacValues.extremal:
      return jokes.lethal;
    default:
      return '';
  }
}
