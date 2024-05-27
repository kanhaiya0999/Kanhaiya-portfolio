import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/custom/Navbar";
import Social from "../components/custom/Social";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-yellow-200 to-yellow-400">
        <nav className="sticky top-0">
          <Navbar />
        </nav>
        {children}
        <div className="fixed  right-0 top-1/2 ">
          <Social />
        </div>
      </body>
    </html>
  );
}
