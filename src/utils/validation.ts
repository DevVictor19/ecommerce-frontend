export function isValidYear(value: string, min: number, max: number): boolean {
  const year = Number(value);

  if (isNaN(year)) {
    return false;
  }

  return year >= min && year <= max;
}

export function isValidMonth(value: string) {
  const month = Number(value);

  if (isNaN(month)) {
    return false;
  }

  return month >= 1 && month <= 12;
}
