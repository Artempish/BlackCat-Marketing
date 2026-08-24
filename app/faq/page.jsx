import Faq from "@/components/pages/Faq";

export const metadata = {
  title: "FAQ — Construction Marketing Questions, Answered",
  description:
    "Common questions about BlackCat Marketing: LSA pricing and verification, what the $5,000/month program covers, how the top-3 and 5-lead guarantees work, contracts, and how long SEO takes.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <Faq />
  );
}
