import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import Container from "@/components/common/Container";
import Navbar from "@/components/common/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Spirit Shop",
    template: "%s | Spirit Shop",
  },
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
      <body className="min-h-screen relative flex">
        <StarsBackground className="absolute -z-10" />

        <ThemeProvider>
          <TooltipProvider>
            <Container className="flex-1 flex flex-col gap-16 py-8">
              <Navbar />

              {children}
            </Container>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
