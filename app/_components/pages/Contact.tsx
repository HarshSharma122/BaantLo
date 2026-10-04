import React from "react";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Lightbulb,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen overflow-hidden  px-6 py-20 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[#85D91F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#85D91F]/5 blur-3xl" />

        {/* Header */}
        <div className="relative mb-16 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/30 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
            We'd love to hear from you
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-[#171717] md:text-6xl lg:text-7xl">
            Have a Question? Let's Talk.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#666] md:text-lg">
            Whether you found a bug, have a feature suggestion, or simply
            want to tell us how your trip went, we'd love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#171717] p-8 text-white md:p-10">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#85D91F]/20 blur-3xl" />

            <div className="relative flex h-full flex-col">

              {/* Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#85D91F] text-sm font-black text-[#111]">
                BL
              </div>

              <div className="mt-auto pt-20">
                <p className="text-sm font-medium text-[#85D91F]">
                  CONTACT BAANTLO
                </p>

                <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight md:text-4xl">
                  Have something
                  <br />
                  to share?
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
                  We're building BaantLo to make group trips simpler.
                  Your feedback helps us make it better.
                </p>

                {/* Contact Details */}
                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Mail size={18} className="text-[#85D91F]" />
                    </div>

                    <div>
                      <p className="text-xs text-neutral-500">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">
                        hello@baantlo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <MessageSquare
                        size={18}
                        className="text-[#85D91F]"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-neutral-500">
                        Response time
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">
                        Usually within 24–48 hours
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.04)] md:p-10">

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Fill out the form and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-neutral-800"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#85D91F] focus:bg-white focus:ring-4 focus:ring-[#85D91F]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-neutral-800"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#85D91F] focus:bg-white focus:ring-4 focus:ring-[#85D91F]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-neutral-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help."
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#85D91F] focus:bg-white focus:ring-4 focus:ring-[#85D91F]/10"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#85D91F] px-6 py-4 text-sm font-bold text-[#111] transition-all duration-300 hover:bg-[#96e934] hover:shadow-[0_12px_30px_rgba(133,217,31,0.25)]"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </form>
          </div>
        </div>

        {/* Feature Request */}
        <div className="relative mt-6 overflow-hidden rounded-[32px] border border-[#85D91F]/20 bg-[#85D91F]/10 p-7 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#85D91F] text-[#111]">
                <Lightbulb size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5d9c0d]">
                  Feature request?
                </p>

                <h3 className="mt-1 text-xl font-semibold text-neutral-900">
                  Have an idea that could make group travel easier?
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Tell us about it. Your idea might become the next
                  BaantLo feature.
                </p>
              </div>
            </div>

            <button className="group flex shrink-0 items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#85D91F] hover:text-[#111]">
              Share an Idea
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;