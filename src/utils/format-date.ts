export function formatDateString(iso: string) {
  return new Date(iso).toLocaleString('en-US');
}

export function formatLocaleDateString(iso: string) {
  return new Date(iso).toLocaleDateString('en');
}
