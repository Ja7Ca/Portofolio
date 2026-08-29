import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarot Setiawan - Portfolio",
  description:
    "Portfolio of Jarot Setiawan - Full Stack & Frontend Developer specializing in React.js, Next.js, Express.js, and modern web application development.",
  icons: {
    icon: "/ghost-logo.jpg",
    shortcut: "/ghost-logo.jpg",
    apple: "/ghost-logo.jpg",
  },
  keywords: [
    "Jarot Setiawan",
    "Jarotstwn",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Jarot Setiawan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#272727] text-white antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
