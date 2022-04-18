import { pintVolume, averageVidmarkCoef } from './constant';

export function calculateUserAge(birthDate) {
  return `${new Date().getFullYear() - birthDate.slice(0, 4)} years`;
}

// Delete magic values;
export function calculateBac(alc, weight, pint) {
  const alcNumber = alc.replace(/%/gi, '').replace(/,/g, '.');
  const absoluteAlc = alcNumber * pintVolume * pint * 10;
  const bac = absoluteAlc / (weight * averageVidmarkCoef);
  return bac.toFixed(2);
}
