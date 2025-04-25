import type { Metadata } from "next";
import "./globals.css";

import { Schoolbell } from "next/font/google";
import { Walter_Turncoat } from "next/font/google";
import ToastPopup from "./Custom/ToastPopup";
import ChatBubbleToggle from "@/components/ui/ChatBot/ChatBubbleToggle";

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
  title: "Portfolioliolio | Matt O.",
  description: "Built this with my main squeeze React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ChatBubbleToggle />
          {children}
        <ToastPopup />
      </body>
    </html>
  );
}
