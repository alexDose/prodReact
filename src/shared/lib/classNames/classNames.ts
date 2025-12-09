export type Mods = Record<string, boolean | string | undefined>

export function classNames(cls: string, mods?: Mods, additional?: (string | undefined)[]): string {
  const additionalClasses = additional ? additional.filter(Boolean) : [];
  const modifiedClasses = mods
    ? Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
    : [];

  return [cls, ...additionalClasses, ...modifiedClasses].join(' ');
}
