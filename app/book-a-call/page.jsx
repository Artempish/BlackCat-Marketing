import ClientOnly from "@/components/ClientOnly";
import BookACall from "@/components/pages/BookACall";

export const metadata = {
  title: "Book a 20-Minute Call",
  description:
    "20 minutes, video. We pull up your Google Business Profile and your three closest competitors live, show you where you rank, and tell you which plan to start with.",
  alternates: { canonical: "/book-a-call" },
};

export default function Page() {
  return (
    <ClientOnly>
      <BookACall />
    </ClientOnly>
  );
}
