import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sensors",
  description: "Monitor de sensores de equipamentos de estações de óleo e gás",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#111113] text-[#EDEEF0]`}>
        <header className="w-full flex items-center border-b border-solid border-slate-800 p-3">
          <Link href="/">
            <h1 className="text-[28px] font-bold">Sensors</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
