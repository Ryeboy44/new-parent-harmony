import Studio from "./studio";

export const dynamic = "force-dynamic";

export const metadata = {
  title: {
    absolute: "Sanity Studio | New Parent Harmony",
  },
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <Studio />;
}
