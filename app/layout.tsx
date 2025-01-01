import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SearchBar from "./ui/home/search-bar";
import NavBar from "./ui/home/nav-bar";
import Footer from "./ui/home/footer";
import EmailUpdates from "./ui/home/email-updates";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nordstorm clone",
  description: "Generated by create next app by Amanuel Ferede",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchBar />
        <NavBar />
          {children}
        <EmailUpdates />
        <Footer/>
      </body>
    </html>
  );
}
