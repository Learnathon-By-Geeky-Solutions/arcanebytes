import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google'
import Navbar from '../components/navbar'

const lexend = Lexend({ 
  weight: ['400','500','600', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Kaizen - ArcaneBytes",
  description: "Kaizen by ArcaneBytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} main-theme font-color px-5 md:px-10 lg:px-20 py-5`}>
        <Navbar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
