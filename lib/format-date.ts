export function formatBlogDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

/**
 * Formats a date-only value (YYYY-MM-DD) from a Sanity `date` field.
 * Parsed as UTC so the day never shifts backwards for US timezones.
 */
export function formatEventDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date;

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

/** Joins the authored start and end times, e.g. "10:00 AM – 11:30 AM". */
export function formatEventTimeRange(
  startTime?: string,
  endTime?: string,
): string | null {
  const start = startTime?.trim();
  const end = endTime?.trim();
  if (!start) return null;
  return end ? `${start} – ${end}` : start;
}
