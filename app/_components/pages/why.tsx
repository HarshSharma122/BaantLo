
import React from "react";
import {
  Clock3,
  Eye,
  FolderCheck,
  Calculator,
  Compass,
  ArrowUpRight,
  Check,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Simple",
    description: "Add an expense in seconds. No complicated forms, no unnecessary steps.",
    icon: Clock3,
  },
  {
    number: "02",
    title: "Transparent",
    description: "Everyone can see what was spent, who paid, and who owes whom.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Organized",
    description: "Keep trip details, group members, and every expense in one place.",
    icon: FolderCheck,
  },
  {
    number: "04",
    title: "Automatic",
    description: "Let BaantLo calculate balances and figure out who pays whom.",
    icon: Calculator,
  },
  {
    number: "05",
    title: "Flexible",
    description: "From weekend getaways to college adventures, travel your way.",
    icon: Compass,
  },
];

const Why = () => {
  return (
    <section
      id="feature"
      className="relative overflow-hidden  px-5 py-20 text-[#171914] sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/40 bg-[#85D91F]/10 px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                Why BaantLo?
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Less time calculating.
              <br />
              More time{" "}
              <span className="relative inline-block">
                <span className="relative z-10">travelling.</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full -rotate-2 bg-[#85D91F] sm:h-4" />
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-[#666] md:pb-2">
            Group trips should be about the memories you make, not the
            calculations you have to do. We make shared expenses simple.
          </p>
        </div>

        {/* Main feature layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Highlight card */}
          <div className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#171914] p-7 text-white sm:p-10 lg:col-span-5 lg:min-h-[490px]">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110 sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute -right-10 top-32 h-44 w-44 rounded-full border border-[#85D91F]/30 sm:h-60 sm:w-60" />
            <div className="pointer-events-none absolute right-10 top-48 h-24 w-24 rounded-full bg-[#85D91F] opacity-10 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
                The BaantLo philosophy
              </span>
              <ArrowUpRight
                size={21}
                className="text-[#85D91F] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="relative z-10 mt-16">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#85D91F] text-[#171914]">
                <Compass size={25} strokeWidth={2} />
              </div>

              <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Your group.
                <br />
                Your adventure.
                <br />
                <span className="text-[#85D91F]">Zero money chaos.</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/60 sm:text-base">
                Add expenses, keep everyone in the loop, and let BaantLo
                handle the math while you enjoy the journey.
              </p>
            </div>

            <div className="relative z-10 mt-10 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#85D91F] text-[#171914]">
                <Check size={18} strokeWidth={2.5} />
              </div>
              <p className="text-sm text-white/75">
                More memories. Less money stress.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group relative flex min-h-[225px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#E8EAE3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#85D91F] hover:shadow-[0_16px_45px_rgba(30,40,20,0.06)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#85D91F]/15 text-[#293D15] transition-colors duration-300 group-hover:bg-[#85D91F]">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-medium tracking-widest text-[#A4A79D]">
                      {feature.number}
                    </span>
                  </div>

                  <div className="mt-9">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#74786D]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-[#E8EAE3] bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#85D91F] shadow-[0_0_0_5px_rgba(133,217,31,0.15)]" />
            <p className="text-sm font-medium sm:text-base">
              Every trip deserves better money management.
            </p>
          </div>

          <a
            href="/dashboard"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#85D91F] px-5 py-3 text-sm font-semibold text-[#171914] transition-all hover:bg-[#75C719] hover:shadow-lg hover:shadow-[#85D91F]/20"
          >
            Start your trip
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Why;
