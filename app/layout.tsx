import type { Metadata } from "next";

import "./globals.css";
import SearchBar from "./ui/home/search-bar";
import NavBar from "./ui/home/nav-bar";
import Footer from "./ui/home/footer";
import EmailUpdates from "./ui/home/email-updates";

import { Plus_Jakarta_Sans } from 'next/font/google'
const inter = Plus_Jakarta_Sans({ subsets: ['latin'], weight: "400"  })

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
        className={inter.className}
      >
        <SearchBar />
        <NavBar />
        {children}
        <EmailUpdates />
        <Footer />
      </body>
    </html>
  );
}
