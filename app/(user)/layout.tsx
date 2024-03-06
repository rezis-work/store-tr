import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import PageButton from "../components/PageButton";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "TRcomerce Shopping Store || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  font-display">
        <Navbar />
        <PageButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
