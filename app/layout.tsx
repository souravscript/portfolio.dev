import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeScript } from "./utils/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Sourav - Full Stack Developer",
  description: "Portfolio website of Shivam Sourav, a Full Stack Developer specializing in building exceptional digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript(),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-dark-900 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
