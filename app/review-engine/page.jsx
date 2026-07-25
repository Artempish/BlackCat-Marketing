import ClientOnly from "@/components/ClientOnly";
import ReviewEngine from "@/components/pages/ReviewEngine";

export const metadata = {
  title: "5-Star Google Review Automation for Home Service Businesses",
  description: "See how the CleanerClicks review engine works: type a customer's name, the system texts a one-tap Google review link. Happy customers go to Google, unhappy ones come to you privately. Built for contractors, cleaners, HVAC, plumbers.",
  alternates: { canonical: "/review-engine" },
};

export default function Page() {
  return (
    <ClientOnly>
      <ReviewEngine />
    </ClientOnly>
  );
}
