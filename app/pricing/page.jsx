import Pricing from "@/components/pages/Pricing";

export const metadata = {
  title: "Pricing — LSA $500/mo, Website + SEO + GMB $3,000/mo, Meta Ads $1,000/mo",
  description:
    "Three plans for construction companies. LSA ads at $500/month plus ad spend, the full website, SEO and Google Business Profile program at $3,000/month, and Meta ads produced and managed at $1,000/month plus ad spend. No setup fees, month to month.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <Pricing />
  );
}
