import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModelProvider from "@/providers/model-provider";
import { ToasterProvider } from "@/providers/toast-providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "You are at Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModelProvider/>
        <ToasterProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
