import Terms from "@/components/pages/Terms";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms of use for the BlackCat Marketing website. BlackCat Marketing provides Local Services Ads management, web design, local SEO and Google Business Profile management to construction companies across the United States.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <Terms />
  );
}
