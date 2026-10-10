"use client";

import React, { useState } from "react";
import {
  Coins,
  ChevronDown,
  Check,
  Info,
  Plane,
  ShieldCheck,
  Heart,
} from "lucide-react";

const currencies = [
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "USD", name: "US Dollar", symbol: "$" },
];

const Settings = () => {
  const [currency, setCurrency] = useState<String>("INR");
  const [isOpen, setIsOpen] = useState(false);

  const selectedCurrency = currencies.find(
    (item) => item.code === currency
  );

  return (
    <div className="min-h-screen  px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-[#65A914]">
            PREFERENCES
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#222] sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-[#888] sm:text-base">
            Customize your BaantLo experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Currency Settings */}
          <section className="rounded-[26px] border border-[#E6E6E0] bg-white p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0F8E7]">
                <Coins size={22} className="text-[#65A914]" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#222]">
                  Currency Preferences
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#888]">
                  Choose your preferred currency for new trips and expenses.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <label className="mb-2 block text-sm font-medium text-[#444]">
                Default currency
              </label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#E6E6E0] bg-[#FAFAF7] p-4 text-left transition hover:border-[#85D91F] focus:outline-none focus:ring-2 focus:ring-[#85D91F]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F8E7] text-xl font-semibold text-[#4D7C0F]">
                      {selectedCurrency?.symbol}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#222]">
                        {selectedCurrency?.name}
                      </p>
                      <p className="mt-1 text-xs text-[#888]">
                        {selectedCurrency?.code}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={19}
                    className={`text-[#888] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-[#E6E6E0] bg-white p-2 shadow-xl">
                    {currencies.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setCurrency(item.code);
                          setIsOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-[#F6F9F0]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6F6F2] font-medium text-[#444]">
                            {item.symbol}
                          </div>

                          <div>
                            <p className="text-sm font-medium text-[#222]">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#999]">
                              {item.code}
                            </p>
                          </div>
                        </div>

                        {currency === item.code && (
                          <Check
                            size={18}
                            className="text-[#65A914]"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#F6F9F0] p-3">
                <Info
                  size={16}
                  className="mt-0.5 shrink-0 text-[#65A914]"
                />
                <p className="text-xs leading-5 text-[#66715C]">
                  This preference is intended as the default for new trips.
                  Existing trips should retain their current currency.
                </p>
              </div>
            </div>
          </section>

          {/* About BaantLo */}
          <section className="flex flex-col rounded-[26px] border border-[#E6E6E0] bg-white p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0F8E7]">
                <Info size={22} className="text-[#65A914]" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#222]">
                  About BaantLo
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#888]">
                  Everything about simpler group expenses.
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-[#FAFAF7] p-5">
           

              <p className="mt-2 text-sm font-medium text-[#65A914]">
                Plan Together. Split Easily.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#777]">
                Create trips, invite friends, track shared expenses, and
                understand who owes whom. Spend less time calculating and
                more time enjoying your journey.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6F6F2]">
                  <Coins size={17} className="text-[#65A914]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#333]">
                    Transparent expenses
                  </p>
                  <p className="mt-0.5 text-xs text-[#999]">
                    Keep shared spending organized.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6F6F2]">
                  <ShieldCheck size={17} className="text-[#65A914]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#333]">
                    Simple settlements
                  </p>
                  <p className="mt-0.5 text-xs text-[#999]">
                    Know who paid and who owes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-7">
              <div className="border-t border-[#EEEEEA] pt-4 text-center">
                <p className="flex items-center justify-center gap-1.5 text-xs text-[#999]">
                  Made for better trips
                  <Heart size={12} className="fill-[#85D91F] text-[#65A914]" />
                </p>
                <p className="mt-2 text-xs text-[#AAA]">
                  © {new Date().getFullYear()} BaantLo. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;