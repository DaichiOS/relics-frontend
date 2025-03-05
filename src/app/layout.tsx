import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-serif',
});

const bodyFont = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "Relics - Your Book Collection",
  description: "Track your reading journey with Relics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} ${bodyFont.variable}`}>
      <body className="bg-[#f9f8f4] text-[#333333] min-h-screen font-body">
        {children}
      </body>
    </html>
  );
}