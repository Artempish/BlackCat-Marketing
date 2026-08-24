import ClientOnly from "@/components/ClientOnly";
import Pricing from "@/components/pages/Pricing";

export const metadata = {
  title: "Pricing — LSA Ads $500/mo, Website + SEO + GMB $5,000/mo",
  description:
    "Two plans for construction companies. LSA ads at $500/month plus ad spend with a $50/day ceiling, and the full website, SEO and Google Business Profile program at $5,000/month. No setup fees, month to month.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Pricing />
    </ClientOnly>
  );
}
