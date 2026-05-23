import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/themes/ThemeProvider";
import Container from "@/components/commons/Container";
import Navbar from "@/components/commons/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spirit Shop",
  description:
    "Discover magical potions brewed from the powers of popular open-source tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Container className="min-h-screen flex-1 flex flex-col gap-16 py-8">
            <Navbar />

            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
