import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Wrapper from "./_components/wrapper";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "BaantLo - Bill spliting webApp",
  description:
    "Baantlo is for friends who wants to split the money without choas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" richColors/>
        <ClerkProvider>
        <Wrapper>{children}</Wrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}
