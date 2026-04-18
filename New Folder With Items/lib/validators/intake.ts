export function requiredString(value: FormDataEntryValue | null, fieldName: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${fieldName} is required.`);
  }
  return value.trim();
}
