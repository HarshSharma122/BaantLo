import type { Metadata } from "next";
import "./globals.css";

import {Bricolage_Grotesque, Mansalva} from "next/font/google";
import { cn } from "@/lib/utils";
import Wrapper from "@/utils/wrapper/wrapper";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

// const mansalva = Mansalva({
//   subsets:["latin"],
//   weight:["400"],
//   variable:"--font-mansalva",
//   display:"swap",
// });









export const metadata: Metadata = {
  title: "Baantlo",
  description: "When friends travel together, one person pays for the hotel, another pays for food, and someone else pays for transport. At the end, nobody knows exactly who owes whom. BaantLo will organize all this information in one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bricolage.className, )}
    >
      <body className="min-h-full flex flex-col lg:px-14 px-2 py-5">
        <Wrapper>
          {children}
        </Wrapper>

      </body>
    </html>
  );
}
