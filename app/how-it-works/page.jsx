import ClientOnly from "@/components/ClientOnly";
import HowItWorks from "@/components/pages/HowItWorks";

export const metadata = {
  title: "How It Works — The 90-Day Plan",
  description:
    "Foundation, framing, finish. The exact 90-day roadmap BlackCat Marketing runs for construction companies: audit and Google Guaranteed verification, site and LSA launch, then SEO and GMB work until the map pack moves.",
  alternates: { canonical: "/how-it-works" },
};

export default function Page() {
  return (
    <ClientOnly>
      <HowItWorks />
    </ClientOnly>
  );
}
