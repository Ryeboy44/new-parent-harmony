/**
 * Small helper for rotating “today” prompts without tying them to a weekly timeline.
 */

export function selectDailyFocusPrompt(prompts: string[] | undefined): string | null {
  if (!prompts?.length) return null;
  const day = new Date().getDay();
  return prompts[day % prompts.length] ?? null;
}
