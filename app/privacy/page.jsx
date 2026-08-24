import ClientOnly from "@/components/ClientOnly";
import Privacy from "@/components/pages/Privacy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How BlackCat Marketing collects, uses and protects the information you submit through our booking form. Plain-English privacy policy for a construction marketing agency serving contractors nationwide.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Privacy />
    </ClientOnly>
  );
}
