import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kishore VB",
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
        <div className="w-screen h-[10vh] bg-blue-100 text-black">
          <h1>This is the heada</h1>
        </div>
        {children}
        <div className="w-screen h-[10vh] bg-green-50 text-black">
          <h1>This is the foota</h1>
        </div>
      </body>
    </html>
  );
}
