"use client"

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What is BaantLo?",
    answer:
      "BaantLo is a group trip management and expense-splitting platform that helps friends and travel groups manage shared expenses, members, budgets, and settlements.",
  },
  {
    question: "How does BaantLo split expenses?",
    answer:
      "You add an expense, specify who paid, and select the members who should share the expense. BaantLo then calculates the resulting balances.",
  },
  {
    question: "Can I use BaantLo with my friends?",
    answer:
      "Yes. Create a trip and invite your friends to join the same trip. Everyone can then keep track of shared expenses in one place.",
  },
  {
    question: "Can multiple people pay for a trip?",
    answer:
      "Yes. A group can record expenses paid by different members throughout the trip, making it easy to keep everyone's contributions organized.",
  },
  {
    question: "Can I see who owes whom?",
    answer:
      "Yes. BaantLo's balance and settlement features show the amounts members need to pay or receive, so the group knows exactly where the money stands.",
  },
  {
    question: "Can I track my total trip spending?",
    answer:
      "Yes. Your trip dashboard can show total expenses and spending information, helping your group understand how much has been spent.",
  },
  {
    question: "What expenses can I add?",
    answer:
      "You can track common trip expenses such as hotels, food, transportation, activities, shopping, tickets, fuel, and other shared costs.",
  },
  {
    question: "Is BaantLo only for vacations?",
    answer:
      "No. BaantLo can also be useful for college trips, weekend getaways, road trips, family vacations, and other group activities involving shared expenses.",
  },
  {
    question: "Can I create multiple trips?",
    answer:
      "Your available trips depend on your BaantLo plan. Check the pricing section to see what is included with each plan.",
  },
  {
    question: "Does BaantLo make payments for me?",
    answer:
      "BaantLo is primarily designed for tracking, calculating, and managing shared expenses. If payment functionality is introduced, supported payment methods and regions will be shown separately.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#85D91F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#85D91F]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/30 bg-[#85D91F]/5 px-4 py-2 text-sm font-medium text-neutral-700">
            <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
            Got questions?
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#666] md:text-lg">
            Everything you need to know about managing your trips and
            splitting expenses with BaantLo.
          </p>
        </div>

        {/* FAQ */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Left Content */}
          <div className="hidden lg:block">
            <div className="sticky top-10 rounded-[28px] bg-[#171717] p-8 text-white">
              <div className="mb-16">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#85D91F] text-xl font-black text-[#111]">
                  BL
                </div>
              </div>

              <h3 className="max-w-xs text-3xl font-semibold leading-tight">
                Less confusion.
                <br />
                More travelling.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
                Keep your group expenses organized and spend more time
                enjoying the trip instead of calculating who owes whom.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-full bg-[#85D91F] px-5 py-3 text-sm font-bold text-[#111] transition hover:bg-[#96e934]">
                Start a Trip
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>

          {/* Questions */}
          <div className="divide-y divide-neutral-200 rounded-[28px] border border-neutral-200 bg-[#fafafa] px-6 md:px-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 text-xs font-semibold text-[#85D91F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-base font-semibold transition-colors md:text-lg ${
                          isOpen
                            ? "text-[#85D91F]"
                            : "text-neutral-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen
                          ? "bg-[#85D91F] text-[#111]"
                          : "bg-white text-neutral-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="ml-8 max-w-2xl pr-8 text-sm leading-7 text-neutral-500 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;