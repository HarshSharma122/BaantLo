"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="bg-black text-white px-2 py-1 rounded-full text-sm">
            BL
          </span>
          <span className="text-gray-900">BaantLo</span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-black transition">
            Features
          </Link>
          
        </nav>

        {/* ACTION BUTTON */}
        <div>
          {!user?.id ? (
            <Link href="/auth/sign-up">
              <Button className="rounded-xl px-6">
                Sign up
              </Button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button className="rounded-xl px-6">
                Dashboard
              </Button>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;