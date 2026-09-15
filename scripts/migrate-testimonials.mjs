/**
 * One-time migration: create testimonial documents in the existing
 * Sanity project (n7qs4p9f / production) without changing quote wording.
 *
 * Run: node scripts/migrate-testimonials.mjs
 *
 * Does not overwrite documents that already exist (createIfNotExists).
 * Does not create a new Sanity project or dataset.
 */
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  "n7qs4p9f";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

const kelliFull = `We recently finished working with Gemma after the birth of my third child, and I can't say enough positive things about our experience. I didn't have postpartum support with my first two births, so I wasn't entirely sure what to expect — but having Gemma made such a difference, and I only wish I had her the first two times as well.

She was always punctual and arrived with a warm, positive energy, immediately asking about my goals for the day and how she could best support me. She was incredibly knowledgeable and always able to answer any questions I had about the baby, nursing, pumping, sleep, and more, which gave me so much reassurance.

What stood out most was how much she genuinely cared — not just for the baby, but for me as well. That level of support meant everything during those early weeks. In addition to caring for the baby, Gemma also helped with things like cooking and laundry, which made our home feel more manageable and allowed me to focus on recovery and bonding.

I highly recommend her to anyone looking for postpartum support.`;

const jillFull = `Gemma is a godsend. She came into our life at the perfect time. Our toddler was struggling going to bed and we were beyond exhausted and frustrated. Working with Gemma just a few days and we saw immediate change. It's been a few weeks and our son is going to bed with zero issues. We can't thank Gemma enough!`;

const rachelFull = `Gemma has been fantastic — exactly what we were looking for. She has been incredibly helpful keeping our house in order as we settle back into a new routine in the first few weeks home from the hospital. And she has provided invaluable advice and support with lactation and other baby care. Thank you, Gemma!`;

const arielFull = `Gemma is amazing! Gemma worked with us when our daughter was 5 days old and helped us so much. Gemma made sure our fridge was stocked, took care of me in those early postpartum days, cleaned, cooked, and watched the baby so that my husband and I could get some much needed rest.

She helped with our first bath and she is just a wealth of knowledge with so much advice and kind words. I really appreciated that in between visits she would also check in to see how we were doing — this was above and beyond what I had expected and would recommend Gemma to anyone.`;

const documents = [
  {
    _id: "testimonial-kelli-n",
    _type: "testimonial",
    name: "Kelli N.",
    shortQuote:
      "I didn\u2019t have postpartum support with my first two births, so I wasn\u2019t entirely sure what to expect \u2014 but having Gemma made such a difference, and I only wish I had her the first two times as well.",
    fullQuote: kelliFull,
    category: "postpartum-doula",
    contextLine: "Postpartum Doula Care \u00b7 Potomac, MD \u00b7 2026",
    locationLine: "Potomac, MD \u00b7 2026",
    year: "2026",
    displayOrder: 1,
    featured: true,
    visible: true,
  },
  {
    _id: "testimonial-jill-s",
    _type: "testimonial",
    name: "Jill S.",
    shortQuote:
      "Our toddler was struggling going to bed and we were beyond exhausted and frustrated. Working with Gemma just a few days and we saw immediate change.",
    fullQuote: jillFull,
    category: "sleep-support",
    contextLine: "Sleep Support \u00b7 Washington, DC \u00b7 2024",
    locationLine: "Washington, DC \u00b7 2024",
    year: "2024",
    displayOrder: 1,
    featured: true,
    visible: true,
  },
  {
    _id: "testimonial-rachel-r",
    _type: "testimonial",
    name: "Rachel R.",
    shortQuote:
      "Gemma has been fantastic \u2014 exactly what we were looking for. She has been incredibly helpful keeping our house in order as we settle back into a new routine in the first few weeks home from the hospital.",
    fullQuote: rachelFull,
    category: "postpartum-lactation",
    contextLine: "Postpartum & Lactation Support \u00b7 Oakland, CA \u00b7 2024",
    locationLine: "Oakland, CA \u00b7 2024",
    year: "2024",
    displayOrder: 1,
    featured: true,
    visible: true,
  },
  {
    _id: "testimonial-ariel-b",
    _type: "testimonial",
    name: "Ariel B.",
    shortQuote:
      "Gemma made sure our fridge was stocked, took care of me in those early postpartum days, cleaned, cooked, and watched the baby so that my husband and I could get some much needed rest.",
    fullQuote: arielFull,
    category: "postpartum-doula",
    contextLine: "Postpartum Doula Care \u00b7 Rockville, MD \u00b7 2023",
    locationLine: "Rockville, MD \u00b7 2023",
    year: "2023",
    displayOrder: 2,
    featured: true,
    visible: true,
  },
];

writeFileSync(
  resolve(process.cwd(), "scripts/testimonial-documents.json"),
  `${JSON.stringify(documents, null, 2)}\n`,
);

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}?returnIds=true`;
const headers = {
  "Content-Type": "application/json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const res = await fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify({
    mutations: documents.map((doc) => ({ createIfNotExists: doc })),
  }),
});

const json = await res.json();

if (!res.ok) {
  console.warn("HTTP mutation failed; trying Sanity CLI with the logged-in user...");
  const { spawnSync } = await import("node:child_process");
  const cli = spawnSync(
    process.execPath,
    [
      "--import",
      "./sanity/preload-env.mjs",
      "./node_modules/sanity/bin/sanity",
      "documents",
      "create",
      "scripts/testimonial-documents.json",
      "--missing",
      "--project-id",
      projectId,
      "--dataset",
      dataset,
    ],
    { stdio: "inherit", cwd: process.cwd() },
  );
  if (cli.status !== 0) {
    console.error("Testimonial migration failed.");
    console.error(JSON.stringify(json, null, 2));
    process.exit(cli.status ?? 1);
  }
  process.exit(0);
}

console.log("Testimonial migration complete (createIfNotExists).");
console.log(`Project: ${projectId} | Dataset: ${dataset}`);
console.log(JSON.stringify(json, null, 2));
