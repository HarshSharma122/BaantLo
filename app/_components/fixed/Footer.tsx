"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="border-t bg-[#fdfdfd]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">BaantLo</h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              BaantLo helps friends split trip, food, and group expenses easily
              without confusion or chaos.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              <Link
              target="_blank"
                href="https://www.linkedin.com/in/harsh-sharma016/"
                className="rounded-full border p-2 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <CiLinkedin className="h-5 w-5" />
              </Link>

              <Link
              target="_blank"
                href="https://feeddrill.site/"
                className="rounded-full border p-2 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <CgWebsite className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>

           
              <Link href="#features" className="hover:text-black transition">
                Features
              </Link>

           
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900">
              Contact Details
            </h3>

            <div className="mt-4 flex flex-col gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 9520611838</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>harsh444577@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Dehradun, India</span>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BaantLo. Made with ❤️ by Harsh Sharma
        </div>
      </div>
    </footer>
  );
};

export default Footer;