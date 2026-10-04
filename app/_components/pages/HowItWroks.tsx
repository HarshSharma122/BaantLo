import React from "react";
import {
  Check,
  Calculator,
  CirclePlus,
  Users,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const howItWorks = [
  {
    number: "01",
    title: "Create a Trip",
    desc: "Give your trip a name, add the destination and dates, and create your shared trip space.",
    icon: CirclePlus,
  },
  {
    number: "02",
    title: "Add Your Friends",
    desc: "Invite everyone joining the trip and bring the whole group into one simple place.",
    icon: Users,
  },
  {
    number: "03",
    title: "Add Expenses",
    desc: "Whenever someone pays for something, add the expense and select the people involved.",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Let BaantLo Calculate",
    desc: "BaantLo automatically keeps track of spending and calculates everyone's balance.",
    icon: Calculator,
  },
  {
    number: "05",
    title: "Settle Up",
    desc: "At the end of the trip, see exactly who owes whom and settle the remaining balances.",
    icon: BadgeCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#85D91F]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/25 bg-[#85D91F]/5 px-4 py-2 text-xs font-semibold text-[#5d950f] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
            Simple process
          </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl ">
            How it{" "}
             works
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#85D91F]" />
            
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#666] sm:mt-6 sm:text-base md:text-lg md:leading-8">
            From the first expense to the final settlement, BaantLo keeps
            your group's money organized and stress-free.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Center Line */}
          <div className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#85D91F] via-[#a3b18a] to-transparent md:block" />

          {/* Mobile Left Line */}
          <div className="absolute bottom-8 left-[20px] top-8 w-px bg-gradient-to-b from-[#85D91F] via-[#a3b18a] to-transparent md:hidden" />

          <div className="space-y-7 sm:space-y-9 md:space-y-14">

            {howItWorks.map((work, index) => {
              const Icon = work.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={work.number}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >

                  {/* Desktop Left */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "order-1" : "order-2"
                    }`}
                  >
                    {isLeft && (
                      <StepCard
                        work={work}
                        Icon={Icon}
                        isLeft={true}
                      />
                    )}
                  </div>

                  {/* Desktop Right */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "order-2" : "order-1"
                    }`}
                  >
                    {!isLeft && (
                      <StepCard
                        work={work}
                        Icon={Icon}
                        isLeft={false}
                      />
                    )}
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="absolute left-1/2 top-7 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#85D91F] shadow-[0_0_0_5px_rgba(133,217,31,0.12)] md:flex">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </div>

                  {/* Mobile Card */}
                  <div className="relative pl-12 md:hidden">

                    {/* Mobile Dot */}
                    <div className="absolute left-[20px] top-7 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#85D91F] shadow-[0_0_0_4px_rgba(133,217,31,0.10)]">
                      <Check
                        size={10}
                        strokeWidth={3}
                        className="text-white"
                      />
                    </div>

                    <StepCard
                      work={work}
                      Icon={Icon}
                      isLeft={false}
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center sm:mt-20">
          <div className="flex max-w-full items-center gap-3 rounded-2xl border border-black/5 bg-[#f7f7f5] px-4 py-3 text-xs text-[#555] sm:rounded-full sm:px-5 sm:text-sm">

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#85D91F]">
              <Check size={14} className="text-white" />
            </span>

            <span>
              That's it. BaantLo handles the math.
            </span>

          </div>
        </div>

      </div>
    </section>
  );
};

/* --------------------------------
   Step Card
--------------------------------- */

const StepCard = ({ work, Icon, isLeft }:any) => {
  return (
    <div
      className={`group relative rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#85D91F]/30 hover:shadow-[0_20px_50px_rgba(133,217,31,0.12)] sm:p-6 ${
        isLeft ? "md:text-right" : ""
      }`}
    >

      {/* Step Number */}
      <div
        className={`mb-5 flex items-center gap-3 ${
          isLeft ? "md:justify-end" : ""
        }`}
      >
        <span className="text-xs font-bold tracking-[0.18em] text-[#85D91F] sm:text-sm">
          STEP {work.number}
        </span>

        <div className="h-px w-7 bg-[#85D91F]/40" />
      </div>

      {/* Icon */}
      <div
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#85D91F]/10 text-[#65a914] ${
          isLeft ? "md:ml-auto" : ""
        }`}
      >
        <Icon size={21} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold tracking-tight text-[#181818] sm:text-2xl">
        {work.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-[#6b6b6b] sm:text-[15px] sm:leading-7">
        {work.desc}
      </p>

      {/* Hover Accent */}
      <div
        className={`absolute bottom-0 h-1 w-0 rounded-full bg-[#85D91F] transition-all duration-300 group-hover:w-16 sm:group-hover:w-20 ${
          isLeft ? "right-0" : "left-0"
        }`}
      />
    </div>
  );
};

export default HowItWorks;