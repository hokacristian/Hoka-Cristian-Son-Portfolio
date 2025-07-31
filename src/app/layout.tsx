import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hoka Cristian Son - Portfolio",
  description: "Telecommunication Engineering student specializing in IoT development, mobile applications, and web technologies. Distinction Graduate of Bangkit Academy 2024.",
  keywords: ["Hoka Cristian Son", "IoT Developer", "Mobile Developer", "Next.js", "React", "Android", "Kotlin", "Flutter", "Express.js", "PostgreSQL"],
  authors: [{ name: "Hoka Cristian Son", url: "https://linkedin.com/in/hokacsa" }],
  openGraph: {
    title: "Hoka Cristian Son - Portfolio",
    description: "Telecommunication Engineering student specializing in IoT development, mobile applications, and web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
