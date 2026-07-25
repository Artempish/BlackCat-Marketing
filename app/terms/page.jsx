import ClientOnly from "@/components/ClientOnly";
import Terms from "@/components/pages/Terms";

export const metadata = {
  title: "Terms & Conditions — CleanerClicks",
  description: "The terms of use for the CleanerClicks website. CleanerClicks provides web design and automation services to customers across the United States, from Fargo, North Dakota.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Terms />
    </ClientOnly>
  );
}
