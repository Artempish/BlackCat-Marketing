import ClientOnly from "@/components/ClientOnly";
import Privacy from "@/components/pages/Privacy";

export const metadata = {
  title: "Privacy Policy — CleanerClicks",
  description: "How CleanerClicks collects, uses, and protects the information you submit through our booking form. Plain-English privacy policy for a Fargo, ND web design and automation business serving customers nationwide.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Privacy />
    </ClientOnly>
  );
}
