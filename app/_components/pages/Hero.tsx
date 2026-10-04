import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] overflow-hidden  px-6 md:px-10 lg:px-16">

            {/* Background Image */}
            <Image
                src={bg}
                alt="BaantLo trip planning"
                fill
                priority
                className="object-cover object-center"
            />



            {/* Green Glow */}
            <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#85D91F]/10 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center text-center">

                {/* Badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#85D91F]/30 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur">
                    <Sparkles size={15} className="text-[#85D91F]" />

                    <span>
                        Make every trip easier
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#85D91F]" />
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#171717] sm:text-6xl md:text-7xl lg:text-6xl">
                    Plan Your Trip.
                    <br />


                    Split Expenses.

                    <br />

                    Travel Better.
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-7 text-[#666]">
                    Create a trip, invite your friends, track shared expenses, and
                    automatically see who owes whom. BaantLo keeps your group,
                    expenses, and money organized in one simple place.
                </p>

                {/* Buttons */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                    <Button className="px-9 py-5 text-xl">

                        <Link
                            href="/dashboard"
                        >
                            Create a Trip


                        </Link>
                    </Button>


                    <Button className="px-9 py-5 text-xl" variant="outline">

                        <Link
                            href="/features"
                        >
                            Explore Features
                        </Link>
                    </Button>

                </div>



            </div>

            {/* Bottom Fade */}
        </section>
    );
};

export default Hero;