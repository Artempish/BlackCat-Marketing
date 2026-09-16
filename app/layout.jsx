import "./globals.css";

// ⚠️ REPLACE BEFORE LAUNCH — point metadataBase at your real domain.
// It's also referenced in public/sitemap.xml, public/robots.txt and public/llms.txt.
export const metadata = {
  metadataBase: new URL("https://www.blackcatdigitalmarketing.com"),
  title: {
    default: "BlackCat Marketing | Construction Marketing — LSA Ads, SEO, GMB & Meta Ads",
    template: "%s | BlackCat Marketing",
  },
  description:
    "BlackCat Marketing works only with construction companies. Google LSA ads, websites, local SEO, Google Business Profile management and Meta ads — top 3 in the map pack in 90 days, or we keep working for free.",
  keywords: [
    "construction marketing agency",
    "contractor marketing",
    "Google Local Services Ads for contractors",
    "construction SEO",
    "Google Business Profile optimization for contractors",
    "contractor lead generation",
    "Facebook and Instagram ads for contractors",
  ],
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "BlackCat Marketing",
    title: "BlackCat Marketing | Construction Marketing — LSA Ads, SEO, GMB & Meta Ads",
    description:
      "Marketing built for construction companies only. LSA ads, websites, SEO, GMB and Meta ads — top 3 in 90 days, 5 LSA leads in 30 days, both guaranteed in writing.",
    images: ["/assets/favicon.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackCat Marketing | Construction Marketing",
    description:
      "LSA ads, websites, SEO, GMB and Meta ads for construction companies. Top 3 in 90 days, guaranteed.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
