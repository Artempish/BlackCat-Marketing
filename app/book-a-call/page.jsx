import ClientOnly from "@/components/ClientOnly";
import BookACall from "@/components/pages/BookACall";

export const metadata = {
  title: "Book a Free 20-Min Strategy Call",
  description: "Book a free 20-minute call. We'll show you exactly what you're losing to voicemail and how to recover it. No pitch slides, no pressure — just a real number for your home service business.",
  alternates: { canonical: "/book-a-call" },
};

export default function Page() {
  return (
    <ClientOnly>
      <BookACall />
    </ClientOnly>
  );
}
