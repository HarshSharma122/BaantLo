"use client";

import { Users, UserPlus, Wallet, Calculator } from "lucide-react";

const features = [
  {
    title: "Create Trips",
    desc: "Start a trip and organize all your expenses in one place.",
    icon: Users,
  },
  {
    title: "Invite & Manage Members",
    desc: "Send requests and manage your trip members easily.",
    icon: UserPlus,
  },
  {
    title: "Add Expenses",
    desc: "Track all spending like food, travel, and stay effortlessly.",
    icon: Wallet,
  },
  {
    title: "Smart Settlements",
    desc: "Instantly know who owes whom and settle without confusion.",
    icon: Calculator,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-900">
          Everything You Need to Manage Trips
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From creating trips to splitting expenses, BaantLo makes group travel simple and stress-free.
        </p>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}