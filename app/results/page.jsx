import Results from "@/components/pages/Results";

export const metadata = {
  title: "Results — Measured in Booked Jobs",
  description:
    "How BlackCat Marketing scores itself for construction clients: map pack position, leads by channel, booked estimates, and cost per booked job. Four numbers, reported every month.",
  alternates: { canonical: "/results" },
};

export default function Page() {
  return (
    <Results />
  );
}
