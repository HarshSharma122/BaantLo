import type { Metadata } from "next";
import "./globals.css";

import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import Wrapper from "@/utils/wrapper/wrapper";
import { Toaster } from "sonner";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baantlo",
  description: "When friends travel together, one person pays for the hotel, another pays for food, and someone else pays for transport. At the end, nobody knows exactly who owes whom. BaantLo will organize all this information in one place",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
 
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bricolage.className,)}
    >
      <body className="min-h-full flex flex-col lg:px-14 px-2 py-5">
        <Toaster position="top-left" richColors/>
        <Wrapper>
          {children}
        </Wrapper>

      </body>
    </html>
  );
}
