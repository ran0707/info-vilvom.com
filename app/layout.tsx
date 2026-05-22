import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vilvom",
  description: "Rooted in Nature, Grown for life",
  authors: [{ name: "Bala Surya", url: "https://www.balasurya.me" }],
  creator: "Bala Surya",
  publisher: "Vilvom LLP",
  metadataBase: new URL("https://www.vilvom.com"),
  other: {
    developer: "Bala Surya",
    "developer-portfolio": "https://www.balasurya.me",
  },
  
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}