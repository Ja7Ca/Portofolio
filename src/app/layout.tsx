import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./SmoothScroll";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ja7ca.github.io"),
  title: {
    default: "Jarot Setiawan | Full Stack & Frontend Developer",
    template: "%s | Jarot Setiawan",
  },
  description:
    "Portfolio of Jarot Setiawan - Experienced Full Stack & Frontend Developer specializing in React.js, Next.js, Express.js, Vue.js, NestJS, and modern web application development.",
  icons: {
    icon: "/ghost-logo.jpg",
    shortcut: "/ghost-logo.jpg",
    apple: "/ghost-logo.jpg",
  },
  keywords: [
    "Jarot Setiawan",
    "Jarot",
    "Jarotstwn",
    "Ja7Ca",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Developer Indonesia",
    "Software Engineer",
    "Next.js",
    "React.js",
    "Express.js",
    "Tailwind CSS",
    "Pritch Dashboard",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Jarot Setiawan", url: "https://github.com/Ja7Ca" }],
  creator: "Jarot Setiawan",
  publisher: "Jarot Setiawan",
  openGraph: {
    title: "Jarot Setiawan | Full Stack & Frontend Developer",
    description:
      "Explore the portfolio and web development projects of Jarot Setiawan - Full Stack & Frontend Developer specializing in React.js, Next.js, and Express.js.",
    url: "https://ja7ca.github.io",
    siteName: "Jarot Setiawan Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Jarot Setiawan Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarot Setiawan | Full Stack & Frontend Developer",
    description:
      "Explore the portfolio and web development projects of Jarot Setiawan.",
    images: ["/profile.png"],
    creator: "@jarotstwn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ja7ca.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} bg-[#272727] text-white antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
