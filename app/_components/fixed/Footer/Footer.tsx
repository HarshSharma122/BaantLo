import React from "react";
import {
  ArrowUpRight,
} from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#171717] rounded-2xl px-6 pb-6 pt-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="">
            <Link href="/">
            <Image src="/footerlogo.png" alt='logo' width={120} height={120}/>
            </Link>
        </div>


            <p className="mt-2 text-sm font-medium text-[#85D91F]">
              Plan Together. Split Easily.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
              BaantLo makes group trips easier by helping you organize
              members, track shared expenses, manage spending, and settle up.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-[#85D91F] hover:bg-[#85D91F] hover:text-[#111]"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-[#85D91F] hover:bg-[#85D91F] hover:text-[#111]"
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-[#85D91F] hover:bg-[#85D91F] hover:text-[#111]"
              >
                <FiGithub size={17} />
              </a>
            </div>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={[
              "Features",
              "How It Works",
              "Pricing",
              "Expense Splitter",
              "Trip Management",
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About",
              "Contact",
              "Help Center",
              "Blog",
            ]}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
            ]}
          />

          {/* Account */}
          <FooterColumn
            title="Account"
            links={[
              "Sign Up",
              "Log In",
              "Dashboard",
            ]}
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-neutral-500">
            © 2026 BaantLo. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a
              href="#"
              className="transition hover:text-[#85D91F]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#85D91F]"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-[#85D91F]"
            >
              Contact
            </a>
          </div>

          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition hover:text-[#85D91F]"
          >
            Back to top
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }:any) => {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link:any) => (
          <li key={link}>
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-sm text-neutral-500 transition hover:text-[#85D91F]"
            >
              {link}

              <ArrowUpRight
                size={12}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;