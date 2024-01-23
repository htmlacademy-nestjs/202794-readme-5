export type TimeUnit = 's' | 'h' | 'd' | 'm' | 'y';

export function isTimeUnit(value: string): value is TimeUnit {
  return ['s', 'h', 'd', 'm', 'y'].includes(value);
}

export function parseTime(time: string) {
  const match = /^(\d+)([shdmy])/.exec(time);

  if (!match) {
    return null;
  }
  const [, valueRaw, unit] = match;
  const value = parseInt(valueRaw, 10);

  if (isNaN(value) || !isTimeUnit(unit)) {
    return null;
  }
  return [value, unit] as const;
}
