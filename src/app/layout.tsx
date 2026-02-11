import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surf Online Lesson | Learn to Surf in Paradise",
  description: "Book your surf lesson in Sri Lanka. Professional coaching, luxury stay, and unforgettable vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        {children}
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
