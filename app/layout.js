import { Geist, Geist_Mono, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import InfiniteMarquee from "../components/marquee";
import Hero from "../components/hero";
import Footer from "../components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "International Conference on Intelligent Systems and Emerging Technologies (ISET 2026)",
    template: "%s | ISET 2026",
  },
  description:
    "Official website for ISET 2026 hosted by Amity University Jaipur, Rajasthan — conference details, committees, speakers, submissions, and important dates.",
  keywords: [
    "ISET",
    "ISET 2026",
    "International Conference",
    "Intelligent Systems",
    "Emerging Technologies",
    "Cyber Physical Systems",
    "Amity University Jaipur",
    "Call for papers",
    "Conference Registration",
  ],
  applicationName: "ISET 2026",
  authors: [{ name: "Pulkit Porwal" }],
  creator: "Pulkit Porwal",
  publisher: "Pulkit Porwal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "International Conference on Intelligent Systems and Emerging Technologies (ISET 2026)",
    description:
      "Conference website for ISET 2026 — committees, speakers, submissions, dates, and venue information.",
    type: "website",
    locale: "en_US",
    siteName: "ISET 2026",
    images: [
      {
        url: "/amity-logo.png",
        width: 1200,
        height: 630,
        alt: "ISET 2026 - Amity University Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISET 2026 — International Conference on Intelligent Systems and Emerging Technologies",
    description:
      "Explore ISET 2026: committees, speakers, submissions, registration, and key dates.",
    images: ["/amity-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#005B96",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} w-full min-h-screen antialiased overflow-x-hidden`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <InfiniteMarquee />
        <Hero />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );


}
