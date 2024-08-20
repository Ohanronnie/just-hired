export function formatDate(
  dateString: Date,
  options: Intl.DateTimeFormatOptions,
): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
