export function minLength(length: number) {
  return function (value: string) {
    if (value.length < length)
      throw new Error(`Value must be at least ${length} characters long.`);
    return value;
  };
}
