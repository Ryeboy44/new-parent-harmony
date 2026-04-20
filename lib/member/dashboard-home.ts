import type { MemberPlan } from "@/components/member/premium-gate";
import { selectDailyFocusPrompt } from "@/lib/content/daily-focus";
import { MEMBER_TOPIC_DAILY_FOCUS, getMemberTopicById, type MemberTopicId } from "@/lib/content/member-topics";

export type DashboardHomeSpotlight = {
  /** Topic highlighted on Home for “keep going” (not a timeline). */
  spotlightTopicId: MemberTopicId;
  spotlightTopicTitle: string;
  spotlightTopicSummary: string;
  todayFocusLine: string | null;
  topicHref: string;
};

/**
 * Home spotlight is intentionally stable and practical: feeding is one of the most
 * common “I need help right now” entry points in the original guide’s feeding station section.
 */
const HOME_SPOTLIGHT_TOPIC_ID: MemberTopicId = "feeding";

export function getDashboardHomeSpotlight(plan: MemberPlan): DashboardHomeSpotlight {
  void plan;
  const topic = getMemberTopicById(HOME_SPOTLIGHT_TOPIC_ID);
  if (!topic) {
    throw new Error(`Missing topic: ${HOME_SPOTLIGHT_TOPIC_ID}`);
  }

  return {
    spotlightTopicId: topic.id,
    spotlightTopicTitle: topic.label,
    spotlightTopicSummary: topic.summary,
    todayFocusLine: selectDailyFocusPrompt(MEMBER_TOPIC_DAILY_FOCUS),
    topicHref: `/app/topics/${topic.id}`,
  };
}
