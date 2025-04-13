import type { Metadata } from "next";
import "./globals.css";

import { Schoolbell } from "next/font/google";
import { Walter_Turncoat } from "next/font/google";
import FloatingBlobs from "./Custom/FloatingBlobs";
import ToastPopup from "./Custom/ToastPopup";

const schoolbell = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

const walterTurncoat = Walter_Turncoat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Portfoliolioliolio | Matt O.",
  description: "Built this with my main squeeze React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <FloatingBlobs />
        {children}
        <ToastPopup />
      </body>
    </html>
  );
}
