
import type { Metadata } from "next";
import {
  Space_Grotesk,
  DM_Sans,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wasi Farabi | Portfolio",
  description:
    "Wasi Farabi — Computer Science graduate from BRAC University, exploring AI-ML, software development, data and visual creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
