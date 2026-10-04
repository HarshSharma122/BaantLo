import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center px-3 py-3 sm:px-4">

      <div
        className="
          flex w-full max-w-200 items-center justify-between
          gap-3 rounded-xl border p-2
          shadow-[#85D91F] shadow
          sm:gap-6
          md:gap-12
        "
      >

        {/* logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/logo-1.png"
              alt="logo"
              width={110}
              height={110}
              className="h-auto w-[85px] sm:w-[100px] md:w-[120px]"
            />
          </Link>
        </div>

        {/* navigation */}
        <div
          className="
            flex items-center justify-center
            gap-3 text-[12px]
            sm:gap-4 sm:text-[13px]
            md:gap-6 md:text-[15px]
          "
        >
          <Link href="/">
            <li className="list-none">Home</li>
          </Link>

          <li className="list-none">About</li>

          <li className="list-none">Features</li>

          <li className="list-none">Contact</li>
        </div>

        {/* buttons */}
        <div className="flex shrink-0 items-center">

          <Link href="/get-started">
            <Button
              className="
                mr-1 px-3 py-2 text-[12px]
                sm:mr-2 sm:px-4 sm:py-2.5 sm:text-[14px]
                md:px-5 md:py-3 md:text-[16px]
              "
            >
              Sign Up
            </Button>
          </Link>

          <Button
            variant="outline"
            className="
              px-3 py-2 text-[12px]
              sm:px-4 sm:py-2.5 sm:text-[14px]
              md:px-5 md:py-3 md:text-[16px]
            "
          >
            Login
          </Button>

        </div>

      </div>
    </div>
  );
};

export default Header;