import ClientOnly from "@/components/ClientOnly";
import Faq from "@/components/pages/Faq";

export const metadata = {
  title: "FAQ — Questions About CleanerClicks Marketing for Home Services",
  description: "Common questions about CleanerClicks: setup time, pricing, integrations, the missed call text back, automated follow-up, review engine, and SEO. Built for home service businesses.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Faq />
    </ClientOnly>
  );
}
