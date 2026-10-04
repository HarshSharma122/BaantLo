import React from "react";
import {
    ArrowUpRight,
    Calculator,
    ChartNoAxesCombined,
    FileText,
    HandCoins,
    Receipt,
    Settings2,
    Users,
    Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        number: "01",
        icon: Settings2,
        title: "Create & Manage Trips",
        description:
            "Create a dedicated space for every trip. Add your destination, dates, members, and important details in one place.",
        tag: "Trip Management",
    },
    {
        number: "02",
        icon: Users,
        title: "Invite Your Friends",
        description:
            "Bring your entire group together and let everyone stay connected to the same trip and expenses.",
        tag: "Group",
    },
    {
        number: "03",
        icon: Receipt,
        title: "Add Shared Expenses",
        description:
            "Dinner, hotel, tickets or anything else — add it once and BaantLo keeps the expense organized.",
        tag: "Expenses",
    },
    {
        number: "04",
        icon: Calculator,
        title: "Automatic Expense Splitting",
        description:
            "Stop doing calculations manually. BaantLo automatically works out everyone's fair share.",
        tag: "Automation",
        featured: true,
    },
    {
        number: "05",
        icon: ChartNoAxesCombined,
        title: "Know Who Owes Whom",
        description:
            "Get a clear view of who needs to pay and who needs to receive money.",
        tag: "Balances",
    },
    {
        number: "06",
        icon: HandCoins,
        title: "Simple Settlements",
        description:
            "Turn complicated group calculations into a simple list of payments to settle after the trip.",
        tag: "Settlement",
    },
    {
        number: "07",
        icon: Wallet,
        title: "Track Trip Spending",
        description:
            "See how much your group has spent and keep track of the overall trip cost.",
        tag: "Spending",
    },
    {
        number: "08",
        icon: FileText,
        title: "Trip Reports",
        description:
            "Keep a complete record of expenses, payments, members and settlements for future reference.",
        tag: "Reports",
    },
];

const Features = () => {
    return (
        <section className="relative overflow-hidden py-24">

            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-100 w-100 -translate-x-1/2 rounded-full bg-[#85D91F]/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                 
                    <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
                        Everything You Need to{" "}
                        <span className="relative inline-block">
                            Manage a Trip
                            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#85D91F]/30" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#666] md:text-lg">
                        From creating your trip to settling the final expense, BaantLo
                        keeps your group organized from start to finish.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.number}
                                className={`
                  group relative overflow-hidden rounded-3xl border
                  p-7 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  ${feature.featured
                                        ? "border-[#85D91F] bg-[#171717] text-white lg:col-span-2"
                                        : "border-black/8 bg-white"
                                    }
                `}
                            >

                                {/* Number */}
                                <div
                                    className={`absolute right-6 top-5 text-sm font-medium ${feature.featured
                                            ? "text-white/30"
                                            : "text-black/20"
                                        }`}
                                >
                                    {feature.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className={`
                    flex h-12 w-12 items-center justify-center rounded-2xl
                    transition-transform duration-300
                    group-hover:scale-110
                    ${feature.featured
                                            ? "bg-[#85D91F] text-black"
                                            : "bg-[#85D91F]/15 text-[#171717]"
                                        }
                  `}
                                >
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <div className="mt-7">

                                    <span
                                        className={`
                      
                      ${feature.featured
                                                ? "text-[#85D91F]"
                                                : "text-[#666]"
                                            }
                    `}
                                    >
                                        {feature.tag}
                                    </span>

                                    <h3
                                        className={`
                      mt-2 text-xl font-semibold tracking-tight
                      ${feature.featured
                                                ? "text-white md:text-2xl"
                                                : "text-[#171717]"
                                            }
                    `}
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className={`
                      mt-3 text-sm leading-6
                      ${feature.featured
                                                ? "max-w-xl text-white/60"
                                                : "text-[#666]"
                                            }
                    `}
                                    >
                                        {feature.description}
                                    </p>

                                </div>

                               

                                {/* Featured decoration */}
                                {feature.featured && (
                                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#85D91F]/20 blur-3xl" />
                                )}

                            </div>
                        );
                    })}

                </div>

             

            </div>
        </section>
    );
};

export default Features;