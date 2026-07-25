import ClientOnly from "@/components/ClientOnly";
import Services from "@/components/pages/Services";

export const metadata = {
  title: "Marketing Services for Home Service Businesses",
  description: "Five marketing systems for home service businesses: missed call text back, 1-year lead follow-up, high-converting website, 5-star review engine, and smart lead capture. Built for roofers, HVAC, plumbers, electricians, cleaners.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Services />
    </ClientOnly>
  );
}
