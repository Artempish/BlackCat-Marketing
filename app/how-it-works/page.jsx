import ClientOnly from "@/components/ClientOnly";
import HowItWorks from "@/components/pages/HowItWorks";

export const metadata = {
  title: "How It Works | Lead Capture & Booking Automation",
  description: "From missed call to booked job in 90 seconds. See how CleanerClicks captures, replies, follows up, and books home service leads automatically — with a live demo.",
  alternates: { canonical: "/how-it-works" },
};

export default function Page() {
  return (
    <ClientOnly>
      <HowItWorks />
    </ClientOnly>
  );
}
