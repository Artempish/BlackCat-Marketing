import ClientOnly from "@/components/ClientOnly";
import Results from "@/components/pages/Results";

export const metadata = {
  title: "Case Studies & Results — Real Home Service Business Growth",
  description: "Real shops, real numbers. See how roofers, HVAC techs, plumbers, and landscapers grew booked jobs by 2.4×, recovered $2.1M in lead revenue, and reached 4.9★ ratings with CleanerClicks.",
  alternates: { canonical: "/results" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Results />
    </ClientOnly>
  );
}
