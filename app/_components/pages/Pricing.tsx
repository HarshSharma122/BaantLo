import React from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const freeFeatures = [
    "Create trips",
    "Invite members",
    "Add expenses",
    "Split expenses",
    "View balances",
    "Basic trip management",
  ];

  const proFeatures = [
    "Everything in Free",
    "Unlimited trips",
    "Advanced expense reports",
    "Budget tracking",
    "Receipt storage",
    "Detailed spending insights",
    "Export options",
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#85D91F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#85D91F]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/30 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
            Simple & transparent pricing
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
            Simple Plans for
          
              Every Kind of Trip
        
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
            Start organizing your group expenses without complicated
            pricing. Choose the plan that fits the way you travel.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:items-stretch">
          
          {/* Free */}
          <div className="group relative flex flex-col rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-9">
            
            {/* Card Top */}
            <div className="mb-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Starter
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                    Free
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-lg font-bold text-neutral-700">
                  ₹
                </div>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-neutral-900">
                  ₹0
                </span>
                <span className="mb-2 text-sm text-neutral-400">
                  forever
                </span>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
                For casual trips and small groups who want simple expense
                splitting.
              </p>
            </div>

            {/* Divider */}
            <div className="mb-7 h-px bg-neutral-100" />

            {/* Features */}
            <div className="flex-1">
              <p className="mb-5 text-sm font-semibold text-neutral-900">
                What's included
              </p>

              <ul className="space-y-4">
                {freeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#85D91F]/10">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="text-[#65ae0b]"
                      />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:border-[#85D91F] hover:bg-[#85D91F] hover:text-white">
              Get Started
              <ArrowUpRight size={17} />
            </button>
          </div>

          {/* Pro */}
          <div className="group relative flex flex-col overflow-hidden rounded-[28px] border-2 border-[#85D91F] bg-[#171717] p-7 text-white shadow-[0_20px_70px_rgba(133,217,31,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(133,217,31,0.25)] md:p-9">
            
            {/* Green Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#85D91F]/20 blur-3xl" />

            {/* Popular Badge */}
            <div className="relative mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#85D91F]">
                  For frequent travellers
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Pro
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#85D91F] px-3 py-1.5 text-xs font-bold text-[#111]">
                <Sparkles size={13} />
                Popular
              </div>
            </div>

            <div className="relative flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight">
                ₹399
              </span>

              <span className="mb-2 text-sm text-neutral-400">
                
              </span>
            </div>

            <p className="relative mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              For frequent travellers and active groups who want more control
              over their spending.
            </p>

            {/* Divider */}
            <div className="relative my-7 h-px bg-white/10" />

            {/* Features */}
            <div className="relative flex-1">
              <p className="mb-5 text-sm font-semibold text-white">
                Everything you need
              </p>

              <ul className="space-y-4">
                {proFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#85D91F]">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="text-[#111]"
                      />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="relative mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#85D91F] px-5 py-4 text-sm font-bold text-[#111] transition-all duration-300 hover:bg-[#96e934] hover:shadow-[0_10px_30px_rgba(133,217,31,0.25)]">
              Start Pro
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-400">
            No hidden fees. Start free and upgrade whenever you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;