import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://horizonavionics.org'),
  title: {
    default: "Horizon Avionics | Open Source Flight Computers",
    template: "%s | Horizon Avionics"
  },
  description: "First ever fully open source flight computer. Built by teenagers for rocket enthusiasts, featuring advanced telemetry, data logging, thrust vector control and more.",
  keywords: [
    "flight computer",
    "open source",
    "rocket",
    "avionics",
    "telemetry",
    "model rockets",
    "hackclub",
    "teen build",
    "thrust vector control flight computer",
    "gps flight computer",
    "altimeter flight computer",
    "teenagers",
    "DIY rockets",
    "rocketry",
    "rocket science"
  ],
  authors: [{ name: "Horizon Avionics Team" }],
  creator: "Horizon Avionics Team",
  publisher: "Horizon Avionics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://horizonavionics.org",
    siteName: "Horizon Avionics",
    title: "Horizon Avionics | Open Source Flight Computer",
    description: "First ever fully open source flight computer. Built by teenagers for rocket enthusiasts, featuring advanced telemetry, data logging, thrust vector control and more.",
    images: [{
      url: "/horizonHlogoNOBG.png",
      width: 800,
      height: 800,
      alt: "Horizon Avionics Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Avionics | Open Source Flight Computer",
    description: "First ever fully open source flight computer. Built by teenagers for rocket enthusiasts, featuring advanced telemetry, data logging, thrust vector control and more.",
    images: ["/horizonHlogoNOBG.png"],
    creator: "@HorizonAvionics",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/horizonHlogoNOBG.png",
    apple: "/horizonHlogoNOBG.png",
  },
  manifest: "/manifest.json",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e293b" />
        <link rel="canonical" href="https://horizon-avionics.org" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
