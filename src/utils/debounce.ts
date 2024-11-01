let timerId: number | null = null;

export function debounce(callback: () => void, delayMs: number) {
  if (timerId !== null) {
    window.clearInterval(timerId);
  }

  timerId = window.setTimeout(() => callback(), delayMs);
}
