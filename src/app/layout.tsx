import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google'

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
      <body className="main-theme font-color px-20 py-5">
        <main className={lexend.className}>
        {children}
        </main>
      </body>
    </html>
  );
}
