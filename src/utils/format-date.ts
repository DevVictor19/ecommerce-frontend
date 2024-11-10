export function formatDateString(iso: string) {
  return new Date(iso).toLocaleString('en-US');
}
