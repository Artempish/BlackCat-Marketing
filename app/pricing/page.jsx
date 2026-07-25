import ClientOnly from "@/components/ClientOnly";
import Pricing from "@/components/pages/Pricing";

export const metadata = {
  title: "Pricing — Marketing & SEO Plans for Home Service Businesses",
  description: "Three tiers: Essentials at $197/mo, Professional at $297/mo, and Elite at $497/mo with full SEO. No setup fees, no contracts, cancel anytime. Pick the plan that fits your home service business.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Pricing />
    </ClientOnly>
  );
}
