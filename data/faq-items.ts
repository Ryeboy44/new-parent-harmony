import {
  COLLECTIVE_HREF,
  COLLECTIVE_REQUEST_HREF,
  COLLECTIVE_SUPPORT_HREF,
} from "@/data/community-collective-content";

export type FaqLink = {
  href: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  links?: FaqLink[];
};

export const faqItems: FaqItem[] = [
  {
    question: "What does a postpartum doula do?",
    answer:
      "A postpartum doula provides practical, emotional, and informational support after your baby is born. This can include newborn care guidance, feeding support, help establishing rhythms at home, light household support, and calm reassurance during the postpartum period.",
  },
  {
    question: "What areas does New Parent Harmony serve?",
    answer:
      "New Parent Harmony provides in-home daytime postpartum doula and lactation support throughout Montgomery County, Maryland, including Bethesda, Rockville, North Bethesda, Silver Spring, Kensington, Chevy Chase, Potomac, Gaithersburg, Germantown, Olney, Wheaton, Takoma Park, Clarksburg, and surrounding areas. Virtual postpartum support is also available for families who prefer online care.",
  },
  {
    question: "Do you offer in-home support or virtual support?",
    answer:
      "Both. I offer in-home daytime support for families in Montgomery County and surrounding areas, as well as virtual postpartum support for sleep, feeding, and postpartum guidance.",
  },
  {
    question: "Do you provide overnight postpartum care?",
    answer:
      "No. My in-home support is daytime postpartum care rather than overnight care, with a focus on practical help, feeding support, newborn care guidance, emotional check-ins, and helping the day-to-day rhythm at home feel more manageable.",
  },
  {
    question: "What is included in postpartum doula care?",
    answer:
      "Postpartum doula care looks different for every family. Support is adapted to what you need in the moment—whether that’s caring for your newborn while you rest, spending time with older siblings so you can nap or reset, supporting feeding, or taking care of light household tasks like laundry to help things feel more manageable.",
  },
  {
    question: "Do you support older siblings and pets too?",
    answer:
      "Yes. Welcoming a baby affects the whole household. I can help families support older siblings through the adjustment, maintain connection and routines, and offer practical guidance for calmly and safely introducing your baby to family pets.",
  },
  {
    question: "Can you help prepare my older child for a new baby?",
    answer:
      "Yes. I can guide you in helping an older sibling feel included, connected, and secure as your family grows, with practical ideas that fit your child’s age and temperament.",
  },
  {
    question: "Can you help with introducing our baby to our dog or other pet?",
    answer:
      "Yes. I offer practical, safety-focused guidance to help families introduce a baby to a dog or other pet in a calm and thoughtful way.",
  },
  {
    question: "What is included in a lactation consultation?",
    answer:
      "A lactation consultation includes feeding assessment, practical help with latch and positioning, support for supply concerns, pumping guidance, bottle-feeding support when needed, and a plan that fits your family.",
  },
  {
    question: "Do you support breastfeeding, pumping, and bottle-feeding?",
    answer:
      "Yes. I support breastfeeding, pumping, combination feeding, and bottle-feeding, without pressure or judgment.",
  },
  {
    question: "Can you help if my baby is struggling to latch?",
    answer:
      "Yes. I offer feeding/lactation support for latch challenges, positioning, supply concerns, pumping questions, and feeding confidence, both in person for local families and virtually.",
  },
  {
    question: "What is included in a sleep plan?",
    answer:
      "A sleep plan includes a step-by-step approach tailored to your child’s age, temperament, and your family’s values. It covers bedtime, naps, night wakings, sleep routines, and strategies to support more independent sleep. The sleep plan also includes two weeks of ongoing virtual support and a wrap-up call at the end.",
  },
  {
    question: "At what age can sleep training begin?",
    answer:
      "Gentle sleep shaping can begin early, while more structured sleep training often starts around 4 to 6 months. Infant sleep support can also be appropriate for babies, toddlers, and young children, with the approach tailored to the child’s stage and the family’s comfort level.",
  },
  {
    question: "Which sleep training methods do you use?",
    answer:
      "I use a range of approaches, including both parent-present and non-parent-present methods. The approach we choose depends on your child’s age, temperament, your parenting style, your comfort level with different techniques, and what feels realistic for your family to follow through with consistently.",
  },
  {
    question: "How long does it take to see progress with a sleep plan?",
    answer:
      "Many families start to notice changes within days, with more consistent progress often taking shape over the full two-week support period as the plan is implemented consistently.",
  },
  {
    question: "What is the Sleep & Feed Reset?",
    answer:
      "The Sleep & Feed Reset is a focused starting point for families who feel overwhelmed by sleep and feeding. It is designed to help untangle those patterns together and give you a clear, practical path forward.",
  },
  {
    question: "How soon after birth should I hire a postpartum doula?",
    answer:
      "Some families reach out once the baby arrives, but many book during pregnancy so support is already in place for the early postpartum period. This is useful whether you are welcoming your first baby or growing your family again.",
  },
  {
    question: "What makes New Parent Harmony different?",
    answer:
      "New Parent Harmony offers calm, practical, evidence-informed support tailored to real family life. The focus is on helping parents feel grounded, informed, and supported without rigid rules or judgment.",
  },
  {
    question: "What is the New Parent Harmony Community Collective?",
    answer:
      "The New Parent Harmony Community Collective is an initiative designed to make postpartum and early-parenthood support more accessible to families in our community. Through grants, sponsorships, community partnerships and other funding, the Collective helps provide reduced-cost or fully funded support, educational programs and community resources when funding and availability allow.",
    links: [
      {
        href: COLLECTIVE_HREF,
        label: "Learn more about the Community Collective →",
      },
    ],
  },
  {
    question: "What if I can’t afford New Parent Harmony’s regular services?",
    answer:
      "Please still reach out. Through the Community Collective, some families may be able to access fully funded, partially funded or temporary reduced-cost support, depending on available funding, resources and provider availability. Families are not required to complete complicated financial paperwork, and requests are considered individually. Regular New Parent Harmony services remain available at the standard rates listed on the Services page.",
    links: [
      {
        href: COLLECTIVE_REQUEST_HREF,
        label: "Request support through the Collective →",
      },
    ],
  },
  {
    question: "How can I support the Community Collective?",
    answer:
      "Individuals, businesses and community organizations can help the Collective reach more families through sponsorships, partnerships, funding and support for community programs. That help makes it possible to offer funded or reduced-cost care and programming when resources allow — alongside New Parent Harmony’s regular professional services.",
    links: [
      {
        href: COLLECTIVE_SUPPORT_HREF,
        label: "Find out how to support the Collective →",
      },
    ],
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "You do not need to have it all figured out before reaching out. A free discovery call is a simple way to talk through what is going on and decide what kind of support would best fit your family.",
  },
  {
    question: "How do I book support with New Parent Harmony?",
    answer:
      "Families can start by booking a free discovery call through the website, then choose the support option that feels right for their needs.",
  },
];
