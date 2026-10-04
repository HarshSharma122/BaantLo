import React from "react";
import {
  Users,
  GraduationCap,
  Heart,
  TentTree,
  Car,
  ArrowUpRight,
} from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Friends' Trips",
    description:
      "Going on a weekend trip with your friends? Keep hotel, food, transport, and activity expenses organized.",
  },
  {
    icon: GraduationCap,
    title: "College Trips",
    description:
      "Managing money between multiple students can become complicated. BaantLo keeps shared expenses transparent and easy to track.",
  },
  {
    icon: Heart,
    title: "Family Vacations",
    description:
      "Keep track of shared family expenses without maintaining separate notes or spreadsheets.",
  },
  {
    icon: TentTree,
    title: "Weekend Getaways",
    description:
      "Short trip? Still lots of expenses. Create a trip and start tracking everything from the first payment.",
  },
  {
    icon: Car,
    title: "Road Trips",
    description:
      "Fuel, food, tolls, accommodation and activities can quickly add up. Keep your road-trip spending in one place.",
  },
];

const UseCases = () => {
  return (
    <section className="relative mt-32 overflow-hidden px-5 pb-10 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#85D91F]/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
        
          
           
             
             <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl ">
             Built for Every Kind of{" "}
             Group Trip
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#85D91F]" />
            
          </h2>

          <p className="mt-5 text-base leading-7 text-[#666] sm:text-lg">
            Whether you're traveling with friends, family, classmates, or
            your road-trip crew, BaantLo keeps every shared expense simple.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Featured Card */}
          <div className="group relative min-h-[330px] overflow-hidden rounded-[28px] bg-[#171717] p-7 text-white transition-all duration-500 hover:-translate-y-1 md:col-span-2 lg:col-span-2">

            {/* Decorative Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#85D91F]/20 blur-2xl transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#85D91F] text-[#171717]">
                    <Users size={23} strokeWidth={1.8} />
                  </div>

             
                </div>

                <h3 className="mt-10 text-2xl font-medium sm:text-3xl">
                  Friends' Trips
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#666] sm:text-base">
                  Going on a weekend trip with your friends? Keep hotel,
                  food, transport, and activity expenses organized.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                <span className="h-px w-8 bg-[#85D91F]" />
                Travel together
              </div>
            </div>
          </div>

          {/* College Trips */}
          <UseCaseCard
            icon={GraduationCap}
            title="College Trips"
            description="Managing money between multiple students can become complicated. BaantLo keeps shared expenses transparent and easy to track."
          />

          {/* Family Vacations */}
          <UseCaseCard
            icon={Heart}
            title="Family Vacations"
            description="Keep track of shared family expenses without maintaining separate notes or spreadsheets."
          />

          {/* Weekend Getaways */}
          <UseCaseCard
            icon={TentTree}
            title="Weekend Getaways"
            description="Short trip? Still lots of expenses. Create a trip and start tracking everything from the first payment."
          />

          {/* Road Trips */}
          <UseCaseCard
            icon={Car}
            title="Road Trips"
            description="Fuel, food, tolls, accommodation and activities can quickly add up. Keep your road-trip spending in one place."
          />
        </div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ icon: Icon, title, description }:any) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#85D91F]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]">

      {/* Hover Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#85D91F]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">

        {/* Icon + Arrow */}
        <div className="flex items-center justify-between">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#85D91F]/10 text-[#65AD0E] transition-all duration-300 group-hover:bg-[#85D91F] group-hover:text-[#171717]">
            <Icon size={21} strokeWidth={1.8} />
          </div>

        
        </div>

        {/* Content */}
        <h3 className="mt-8 text-xl font-medium text-[#202020]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UseCases;