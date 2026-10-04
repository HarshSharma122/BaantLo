import React from "react";
import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const members = [
    {
        name: "Alex",
        paid: "₹6,810",
        status: "Receives",
        amount: "+₹3,143",
        type: "receive",
    },
    {
        name: "Rahul",
        paid: "₹789",
        status: "Owes",
        amount: "₹2,877",
        type: "owe",
    },
    {
        name: "Priya",
        paid: "₹3,401",
        status: "Owes",
        amount: "₹266",
        type: "owe",
    },
];

const Example = () => {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl">
                        See where the money{" "}
                        <span className="relative">
                            goes
                            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#85D91F]" />
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[#666]">
                        From the first expense to the final settlement, BaantLo keeps
                        your group's money organized and stress-free.
                    </p>
                </div>

                {/* Main Card */}
                <div className="mt-14 overflow-hidden">

                    {/* Top */}
                    <div className="border-b border-neutral-200 bg-white px-6 py-10 text-center md:px-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                            <Wallet size={22} strokeWidth={1.8} />
                        </div>

                        <p className="mt-5 text-sm text-[#4d4c4c]">
                            Total Trip Expenses
                        </p>

                        <h2 className="mt-1 text-5xl font-semibold tracking-tight md:text-6xl">
                            ₹11,000
                        </h2>

                        <p className="mt-3 text-sm text-[#4d4c4c]">
                            Shared between 3 friends
                        </p>
                    </div>

                    {/* Members */}
                    <div className="grid gap-4 p-5 md:grid-cols-3 md:p-8">
                        {members.map((member) => (
                            <div
                                key={member.name}
                                className="rounded-2xl  p-5"
                            >
                                {/* Member */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold">
                                            {member.name.charAt(0)}
                                        </div>

                                        <div>
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-xs text-[#4d4c4c]">
                                                Paid {member.paid}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-full ${member.type === "receive"
                                                ? "bg-green-100"
                                                : "bg-red-100"
                                            }`}
                                    >
                                        {member.type === "receive" ? (
                                            <ArrowDownLeft
                                                size={17}
                                                className="text-green-700"
                                            />
                                        ) : (
                                            <ArrowUpRight
                                                size={17}
                                                className="text-red-700"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Balance */}
                                <div className="mt-8">
                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        {member.status}
                                    </p>

                                    <p
                                        className={`mt-1 text-2xl font-semibold ${member.type === "receive"
                                                ? "text-green-700"
                                                : "text-neutral-900"
                                            }`}
                                    >
                                        {member.amount}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-neutral-200 bg-white px-6 py-8 text-center">
                        <p className="text-lg font-medium">
                            No spreadsheets. No calculator.
                        </p>

                        <p className="mt-1 text-sm text-[#4d4c4c]">
                            Just clear numbers and simple settlements.
                        </p>




                        <Button className="mt-3 px-7 py-5">Start Splitting Expenses</Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Example;
