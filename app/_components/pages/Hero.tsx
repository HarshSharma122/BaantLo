"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto lg:mt-10 mt-20 px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm bg-indigo-100 text-indigo-600 inline-block px-4 py-1 rounded-full mb-4">
            Smart Trip Expense Manager
          </p>

          <h1 className="text-4xl md:text-6xl font-black  text-gray-900">
            Travel Together, <br />
            <span className="text-indigo-600">Split Smarter.</span>
          </h1>

          <p className="text-gray-600 mt-6 text-[15px]">
            Create trips, invite friends, add expenses and let Baantlo handle
            the calculations. No more confusion about who paid and who owes!
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">
            {[
              "Create Trips",
              "Invite & Manage Members",
              "Add Expenses",
              "Smart Settlements",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-lg">
                  ✓
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Link href="/dashboard">
            <Button className="cursor-pointer px-5 py-3">
              Create Your Trip →
            </Button>
            </Link>

            <Button variant="outline" className="cursor-pointer">
              ▶ See How It Works
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src="/hero.png" // 👈 put your image in public folder
            alt="Trip Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}