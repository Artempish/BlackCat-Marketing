import ClientOnly from "@/components/ClientOnly";
import Services from "@/components/pages/Services";

export const metadata = {
  title: "Marketing Services for Construction Companies",
  description:
    "Google LSA ads, websites, local SEO and Google Business Profile management — built for general contractors, roofers, concrete crews, remodelers and custom home builders.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <ClientOnly>
      <Services />
    </ClientOnly>
  );
}
