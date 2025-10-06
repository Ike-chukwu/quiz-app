import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NightModeToggler from "./components/Layout/NightModeToggler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizzy",
  description:
    "An interactive quiz app with a built-in timer that shows users the correct answers right after they submit, displays their final score, tells them if they’re the current high score holder, and lets them switch between light and dark modes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  h-screen`}
      >
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
