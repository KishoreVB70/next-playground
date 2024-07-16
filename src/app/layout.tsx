import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kishore VB",
    template: ""
  },
  description: "Portfolio site of Kishore V B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-center w-screen h-[10vh] bg-blue-100 text-black">
          <h1> <Link href={"/"}>HOME</Link></h1>
        </header>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <footer className="w-screen h-[10vh] bg-green-50 text-black">
          <h1>This is the foota</h1>
        </footer>
      </body>
    </html>
  );
}
