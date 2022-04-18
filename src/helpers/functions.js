export function calculateUserAge(birthDate) {
  return `${new Date().getFullYear() - birthDate.slice(0, 4)} years`;
}

export function someFunction() {}
