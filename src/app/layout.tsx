import type { Metadata } from "next";
import "./globals.css";

import ToastPopup from "./components/ToastPopup";
import ChatBubbleToggle from "@/components/ui/ChatBot/ChatBubbleToggle";

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
