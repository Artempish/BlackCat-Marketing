import Faq from "@/components/pages/Faq";

export const metadata = {
  title: "FAQ — Construction Marketing Questions, Answered",
  description:
    "Common questions about BlackCat Marketing: LSA pricing and verification, what the $3,000/month program covers, how the $1,000/month Meta ads package works, the top-3 and 5-lead guarantees, contracts, and how long SEO takes.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <Faq />
  );
}
