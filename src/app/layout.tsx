import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Development Company in Hubli–Dharwad | Kreo – Web, App & IT Solutions",
  description: "Kreo is a leading software development company in Hubli–Dharwad, Karnataka. We specialize in website development, web applications, mobile apps, internships, academic projects, enterprise software, and IT solutions across India.",
  keywords: "software company in hubli, software company in dharwad, hubli dharwad software development, best software company hubli, web development hubli, website development dharwad, software services karnataka, mobile app development hubli, internship projects hubli dharwad, academic projects hubli, final year projects hubli, software training hubli, it company hubli dharwad, startup software partner karnataka, custom software india, kreo hubli, kreo dharwad",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.kreosoftwares.in/",
  },
  openGraph: {
    type: "website",
    title: "Kreo – Software Development Company in Hubli–Dharwad",
    description: "Web development, mobile apps, internships, academic projects, and IT services in Hubli–Dharwad and across India.",
    url: "https://www.kreosoftwares.in/",
    siteName: "Kreo",
    images: [
      {
        url: "https://www.kreosoftwares.in/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreo | Software Company in Hubli–Dharwad",
    description: "Custom software, websites, apps, internships & academic projects in Karnataka, India.",
    images: ["https://www.kreosoftwares.in/logo.png"],
  },
  authors: [{ name: "Kreo" }],
  publisher: "Kreo",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Hubli-Dharwad",
    "geo.position": "15.3647;75.1240",
    "ICBM": "15.3647, 75.1240",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "name": "Kreo",
    "url": "https://www.kreosoftwares.in/",
    "logo": "https://www.kreosoftwares.in/logo.png",
    "image": "https://www.kreosoftwares.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hubli-Dharwad",
      "addressRegion": "KA",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "India"
    },
    "priceRange": "₹₹",
    "sameAs": []
  };

  return (
    <html lang="en" className={`${inter.variable} light h-full antialiased`}>
      <head>
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-display bg-background-light text-charcoal overflow-x-hidden blueprint-grid-bg bg-grid-pattern min-h-full flex flex-col">
        {children}

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KB5MDDPKC3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KB5MDDPKC3');
          `}
        </Script>
      </body>
    </html>
  );
}
