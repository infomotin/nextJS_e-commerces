//Next.js 13.4.4
import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";

//Clerk Provider
import { ClerkProvider } from '@clerk/nextjs'

// Import global styles
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Import Geist Sans and Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "400",
});

// Define metadata
export const metadata: Metadata = {
  title: "Easy-Shop",
  description: "A simple e-commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${barlowFont.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
