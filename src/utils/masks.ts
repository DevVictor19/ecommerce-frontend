import mask from 'make-mask';

export function removeSpecialCharacters(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, '');
}

export function documentMask(value: string) {
  return mask(value, '000.000.000-00');
}

export function cardNumberMask(value: string) {
  return mask(value, '0000 0000 0000 0000');
}

export function expiryYearMask(value: string) {
  return mask(value, '0000');
}

export function expiryMonthMask(value: string) {
  return mask(value, '00');
}

export function ccvMask(value: string) {
  return mask(value, '000');
}

export function currencyMask(value: string) {
  return mask(value, '#0.00', { reverse: true });
}

export function numberMask(value: string) {
  return mask(value, '#0', { reverse: true });
}
