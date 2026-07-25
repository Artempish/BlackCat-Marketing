import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cleanerclicks.com"),
  title: {
    default: "CleanerClicks | Booking System for Home Service Pros",
    template: "%s | CleanerClicks",
  },
  description:
    "CleanerClicks captures every missed call and follows up automatically — turning leads into booked jobs for home-service pros like roofers, HVAC & plumbers.",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "CleanerClicks",
    images: ["/assets/favicon.png"],
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
