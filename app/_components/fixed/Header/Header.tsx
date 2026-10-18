"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Signup from "../../auth/signup";
import Login from "../../auth/Login";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authSignUpOpen, setAuthSignUpOpen] = useState(false);
  const [isLoginOpen, setisLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/user");

        if (!res.ok) {
          setUser(null);
          return;
        }

        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

















  return (
    <>
      <div className="flex items-center justify-center px-3 py-3 sm:px-4">
        <div className="relative w-full max-w-200">
          {/* Header */}
          <div
            className="
            flex w-full items-center justify-between
            gap-3 rounded-xl border p-2
            shadow-[#85D91F] shadow
            sm:gap-6
            md:gap-12
          "
          >
            {/* logo */}
            <div className="shrink-0">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo-1.png"
                  alt="logo"
                  width={110}
                  height={110}
                  className="h-auto w-[85px] sm:w-[100px] md:w-[120px]"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div
              className="
              hidden items-center justify-center
              gap-3 text-[12px]
              sm:flex sm:gap-4 sm:text-[13px]
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

            {/* Desktop buttons */}
            <div className="hidden shrink-0 items-center sm:flex">


              {
                !user ? (

                  <Button
                    onClick={() => setAuthSignUpOpen(true)}
                    className="
                  mr-1 px-3 py-2 text-[12px]
                  sm:mr-2 sm:px-4 sm:py-2.5 sm:text-[14px]
                  md:px-5 md:py-3 md:text-[16px]
                "
                  >
                    Sign Up
                  </Button>

                ) : (
                  <Link href="/dashboard">
                    <Button
                      className="
                  mr-1 px-3 py-2 text-[12px]
                  sm:mr-2 sm:px-4 sm:py-2.5 sm:text-[14px]
                  md:px-5 md:py-3 md:text-[16px]
                "
                    >
                      Dashboard
                    </Button>
                  </Link>

                )
              }








              <Button
                onClick={() => setisLoginOpen(true)}
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
              flex h-10 w-10 items-center justify-center
              rounded-lg border
              transition-all duration-300
              hover:bg-[#85D91F] hover:text-black
              sm:hidden
            "
              aria-label="Toggle menu"
            >
              <div
                className={`
                transition-transform duration-300
                ${isOpen ? "rotate-90" : "rotate-0"}
              `}
              >
                {isOpen ? (
                  <X size={22} strokeWidth={2} />
                ) : (
                  <Menu size={22} strokeWidth={2} />
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`
            absolute left-0 right-0 top-[calc(100%+10px)] z-50
            overflow-hidden rounded-xl border
            bg-white shadow-lg
            transition-all duration-300 ease-in-out
            sm:hidden
            ${isOpen
                ? "max-h-[500px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
              }
          `}
          >
            <div className="flex flex-col p-4">
              {/* Mobile navigation */}
              <div className="flex flex-col text-[12px]">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 transition-colors hover:bg-[#85D91F]"
                >
                  Home
                </Link>

                <li
                  className="list-none cursor-pointer rounded-lg px-3 py-3 transition-colors hover:bg-[#85D91F]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </li>

                <li
                  className="list-none cursor-pointer rounded-lg px-3 py-3 transition-colors hover:bg-[#85D91F]"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </li>

                <li
                  className="list-none cursor-pointer rounded-lg px-3 py-3 transition-colors hover:bg-[#85D91F]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </li>
              </div>

              {/* Mobile buttons */}
              <div className="mt-3 flex gap-2 border-t pt-4">




                <Button onClick={() => {
                  setAuthSignUpOpen(true),
                    setIsOpen(false)
                }} className="w-full text-[12px] flex-1">
                  Sign Up
                </Button>




                <Button

                  variant="outline"
                  className="flex-1 text-[12px]"
                  onClick={() => {
                    setIsOpen(false),
                      setisLoginOpen(true)
                  }}
                >
                  Login
                </Button>










              </div>
            </div>
          </div>
        </div>
      </div>



      {
        authSignUpOpen && (
          <Signup setIsLoginOpen={setisLoginOpen} setAuthSignUpOpen={setAuthSignUpOpen} />
        )
      }
      {
        isLoginOpen && (
          <Login setIsLoginOpen={setisLoginOpen} setAuthSignUpOpen={setAuthSignUpOpen} />
        )
      }
    </>
  );
};

export default Header;