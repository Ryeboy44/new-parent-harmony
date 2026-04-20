import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MemberTopicDetail } from "@/components/member/member-topic-detail";
import type { MemberPlan } from "@/components/member/premium-gate";
import { getMemberTopicById } from "@/lib/content/member-topics";
import { getMemberPlan } from "@/lib/member-plan";

type PageProps = {
  params: Promise<{ topicId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topicId } = await params;
  const topic = getMemberTopicById(topicId);
  if (!topic) return { title: "Topic" };
  return {
    title: topic.label,
    description: topic.summary,
  };
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { topicId } = await params;
  const topic = getMemberTopicById(topicId);
  if (!topic) notFound();

  const userPlan: MemberPlan = await getMemberPlan();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <MemberTopicDetail topic={topic} userPlan={userPlan} />
    </main>
  );
}
