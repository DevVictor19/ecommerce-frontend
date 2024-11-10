export function parseToStringRecord<T extends object>(obj: T) {
  const newObj: Record<string, string> = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    newObj[key] = `${obj[key as keyof T]}`;
  });
  return newObj;
}
