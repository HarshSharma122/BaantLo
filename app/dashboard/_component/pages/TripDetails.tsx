
"use client"

import { Button } from '@/components/ui/button'
import { ArrowUpRight, CalendarDays, CheckCircle2, ChevronRight, Clock3, MapPin, Receipt, TrendingUp, Users, Wallet } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import AddExpense from './AddExpense';
import Notification from '@/components/pages/Notification';
import { tripProps } from '@/types/types';
import { toast } from 'sonner';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DateConvert } from '@/utils/DateConversion/DateConversion';

const members = [
    {
        name: "Alex",
        initials: "A",
        paid: "₹6,810",
        balance: "+₹3,143",
        status: "Gets back",
    },
    {
        name: "Rahul",
        initials: "R",
        paid: "₹789",
        balance: "-₹2,877",
        status: "Owes",
    },
    {
        name: "Priya",
        initials: "P",
        paid: "₹3,401",
        balance: "-₹266",
        status: "Owes",
    },
];

const expenses = [
    {
        title: "Hotel Booking",
        person: "Alex",
        amount: "₹5,400",
        icon: "🏨",
    },
    {
        title: "Dinner at Café",
        person: "Priya",
        amount: "₹2,100",
        icon: "🍽️",
    },
    {
        title: "Cab & Transport",
        person: "Alex",
        amount: "₹1,200",
        icon: "🚕",
    },
    {
        title: "Snacks",
        person: "Rahul",
        amount: "₹650",
        icon: "🍿",
    },
];
const TripDetails = ({ id }: { id: any }) => {
    const router = useRouter();
    const [trip, setTrip] = useState<tripProps>();
    const [loading, setLoading] = useState(true);
    const [openExpenseInput, setOpenExpenseInput] = useState(false);
    const [notification, setNotification] = useState(false);




    useEffect(() => {
        const tripDetail = async () => {
            try {
                const response = await fetch(`/api/trip/${id}`);
                const data = await response.json();
                if (response.status != 200) {
                    setTrip(undefined);
                    toast.error(data.msg);
                    router.push("/dashboard/trips");
                }
                if (response.status == 200) {
                    setTrip(data.msg);
                    setLoading(false);
                }
            } catch (error) {
                setTrip(undefined);
                toast.error("Server Error");

            }
        }

        tripDetail();
    }, [loading, setLoading])



    if (loading) {
        return (
            <div className="h-full w-full flex-col flex items-center justify-center min-h-screen">
                <Image
                    src="/logo-1.png"
                    loading="eager"
                    width={230}
                    height={230}
                    alt="logo"
                    className="animate-pulse duration-700"
                />
            </div>
        )
    }








    return (
        <>
            <div className="min-h-screen  px-4 lg:py-8 py-10 sm:px-6 lg:px-10">

                <div className="">
                    {/* Top Header */}
                    <div className='flex lg:flex-row flex-col items-center lg:justify-between'>
                        <div className="">

                            <h1 className='text-2xl font-semibold'>{trip?.tripName || "_"}</h1>
                            <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-neutral-500">
                                {trip?.tripDesc || "NONE"}
                            </p>

                        </div>

                        <div className="space-x-2 lg:mb-0 mb-2">
                            {
                                !trip?.isTripEnded && (

                                    <Button onClick={() => setNotification(true)}>Trip Ended</Button>
                                )
                            }
                            <Button onClick={() => setOpenExpenseInput(true)} variant="outline">Add Expenses</Button>
                        </div>

                    </div>




                    {/* Main Dashboard */}
                    <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">

                        {/* ================= LEFT COLUMN ================= */}
                        <div className="space-y-5">

                            {/* ===== TOTAL SPENDING ===== */}
                            <div className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 text-white sm:p-8">

                                {/* Green Glow */}
                                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#85D91F]/20 blur-3xl" />

                                <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#85D91F]/10 blur-3xl" />

                                <div className="relative">

                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-xs font-medium tracking-[0.15em] text-white/50 sm:text-sm">
                                                TOTAL TRIP SPENDING
                                            </p>

                                            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                                                ₹11,000
                                            </h2>

                                            <p className="mt-2 text-sm text-white/50">
                                                across 8 recorded expenses
                                            </p>
                                        </div>

                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                                            <Wallet size={20} />
                                        </div>
                                    </div>

                                    {/* Budget */}
                                    <div className="mt-8">

                                        <div className="mb-2 flex justify-between text-xs">
                                            <span className="text-white/50">
                                                Trip budget
                                            </span>

                                            <span className="text-white/80">
                                                ₹15,000
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                            <div className="h-full w-[73%] rounded-full bg-[#85D91F]" />
                                        </div>

                                        <div className="mt-2 flex justify-between text-xs">
                                            <span className="font-medium text-[#85D91F]">
                                                73% used
                                            </span>

                                            <span className="text-white/40">
                                                ₹4,000 remaining
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* ===== STATS ===== */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                                {/* Members */}
                                <div className="rounded-[22px] border border-[#E6E6E0] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">

                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F8E7] text-[#85D91F]">
                                        <Users size={19} />
                                    </div>

                                    <p className="text-xs text-[#888]">
                                        Members
                                    </p>

                                    <p className="mt-1 text-2xl font-semibold text-[#222]">
                                        {trip?.tripMembers.length || 0}
                                    </p>
                                </div>

                                {/* Expenses */}
                                <div className="rounded-[22px] border border-[#E6E6E0] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">

                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F8E7] text-[#85D91F]">
                                        <Receipt size={19} />
                                    </div>

                                    <p className="text-xs text-[#888]">
                                        Expenses
                                    </p>

                                    <p className="mt-1 text-2xl font-semibold text-[#222]">
                                        {trip?.tripExpense.length || 0}
                                    </p>
                                </div>

                                {/* Average */}
                                <div className="col-span-2 rounded-[22px] border border-[#E6E6E0] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:col-span-1">

                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F8E7] text-[#85D91F]">
                                        <TrendingUp size={19} />
                                    </div>

                                    <p className="text-xs text-[#888]">
                                        Avg. / Person
                                    </p>

                                    <p className="mt-1 text-2xl font-semibold text-[#222]">
                                        ₹3,667
                                    </p>
                                </div>

                            </div>

                            {/* ===== RECENT EXPENSES ===== */}
                            <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-5 sm:p-6">

                                <div className="mb-5 flex items-center justify-between">

                                    <div>
                                        <h3 className="text-lg font-semibold text-[#202020]">
                                            Trip Expenses
                                        </h3>

                                        <p className="mt-1 text-xs text-[#999]">
                                            Activity from your trip
                                        </p>
                                    </div>

                                    <button className="group flex items-center gap-1 text-sm font-medium text-[#85D91F]">
                                        View all

                                        <ChevronRight
                                            size={15}
                                            className="transition-transform group-hover:translate-x-0.5"
                                        />
                                    </button>
                                </div>

                                <div className="divide-y divide-[#EEEEEA]">

                                    {expenses.map((expense, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6F6F2] text-lg">
                                                    {expense.icon}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-[#252525]">
                                                        {expense.title}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#999]">
                                                        Paid by {expense.person}
                                                    </p>
                                                </div>

                                            </div>

                                            <p className="text-sm font-semibold text-[#222]">
                                                {expense.amount}
                                            </p>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT COLUMN ================= */}
                        <div className="space-y-5">

                            {/* ===== TRIP DETAILS ===== */}
                            <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">

                                <div className="mb-6 flex items-start justify-between">

                                    <div>
                                        <p className="text-xs font-medium tracking-wide text-[#999]">
                                            CURRENT TRIP
                                        </p>

                                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#222]">
                                            {trip?.tripName || "_"}
                                        </h3>
                                    </div>

                                    <span className="rounded-full bg-[#F0F8E7] px-3 py-1.5 text-xs font-semibold text-[#65A914]">
                                        {trip?.isTripEnded ? "Completed" : "Active"}
                                    </span>

                                </div>

                                <div className="space-y-4">

                                    {/* Destination */}
                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F6F2]">
                                            <MapPin
                                                size={17}
                                                className="text-[#85D91F]"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs text-[#999]">
                                                Destination
                                            </p>

                                            <p className="mt-0.5 text-sm font-medium text-[#222]">
                                                {trip?.tripLocation || "NONE"}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F6F2]">
                                            <CalendarDays
                                                size={17}
                                                className="text-[#85D91F]"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs text-[#999]">
                                                Trip dates
                                            </p>

                                            <p className="mt-0.5 text-sm font-medium text-[#222]">
                                                {trip?.tripStartDate && DateConvert(new Date(trip?.tripStartDate))} —  {trip?.tripEndDate ? DateConvert(new Date(trip?.tripEndDate)) : "Not Confirmed"}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>



                            {/*======== Member details============ */}
                            <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">

                                <div className="mb-6 flex items-start justify-between">

                                    <div>
                                        <p className="text-xs font-medium tracking-wide text-[#999]">
                                            Members
                                        </p>

                                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#222]">
                                            {trip?.tripMembers.length || "0"}
                                        </h3>
                                    </div>



                                </div>

                                <div className="space-y-4">
                                    {trip?.tripMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F8E7] text-sm font-semibold text-[#65A914]">
                                                    {member.name.charAt(0)}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-[#222]">
                                                        {member.name}
                                                    </p>

                                                    <p className="text-xs text-[#999]">
                                                        {member.email}
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="text-right">

                                                <h2 className='text-xs'>Added</h2>


                                                <p className="text-[11px] text-[#AAA]">
                                                    {DateConvert(new Date(member.createdAt))}
                                                </p>

                                            </div>
                                            <div className="text-right">

                                                <Button variant="outline" className="text-xs">Remove</Button>

                                            </div>



                                        </div>
                                    ))}

                                </div>
                            </div>










                            {/* ===== BALANCES ===== */}
                            <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">

                                <div className="mb-5">
                                    <h3 className="text-lg font-semibold text-[#202020]">
                                        Individual balances
                                    </h3>

                                    <p className="mt-1 text-xs text-[#999]">
                                        Who owes and who gets paid
                                    </p>
                                </div>

                                <div className="space-y-4">

                                    {members.map((member) => (
                                        <div
                                            key={member.name}
                                            className="flex items-center justify-between"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F8E7] text-sm font-semibold text-[#65A914]">
                                                    {member.initials}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-[#222]">
                                                        {member.name}
                                                    </p>

                                                    <p className="text-xs text-[#999]">
                                                        Paid {member.paid}
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="text-right">

                                                <p
                                                    className={`text-sm font-semibold ${member.balance.startsWith("+")
                                                        ? "text-[#65A914]"
                                                        : "text-[#C26B5A]"
                                                        }`}
                                                >
                                                    {member.balance}
                                                </p>

                                                <p className="text-[11px] text-[#AAA]">
                                                    {member.status}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* ===== SETTLEMENT ===== */}
                            <div className="rounded-[26px] border border-[#D9EDC5] bg-[#F0F8E7] p-6">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#85D91F]">
                                        <CheckCircle2 size={20} />
                                    </div>

                                    <div>

                                        <p className="text-xs font-semibold uppercase tracking-wide text-[#65A914]">
                                            Settlement status
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-[#202020]">
                                            2 payments remaining
                                        </h3>

                                        <p className="mt-1 text-sm leading-5 text-[#73776D]">
                                            Your trip is almost settled. Complete the remaining
                                            payments to close the trip.
                                        </p>

                                        <button className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#65A914] transition hover:text-[#4E850F]">
                                            See settlement
                                            <ArrowUpRight size={15} />
                                        </button>

                                    </div>

                                </div>
                            </div>

                            {/* ===== ACTIVITY ===== */}
                            <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">

                                <div className="mb-5 flex items-center gap-2">

                                    <Clock3
                                        size={17}
                                        className="text-[#85D91F]"
                                    />

                                    <h3 className="text-lg font-semibold text-[#202020]">
                                        Trip activity
                                    </h3>

                                </div>

                                <div className="relative ml-2 border-l border-[#E5E5DF] pl-5">

                                    {/* Activity 1 */}
                                    <div className="relative pb-5">

                                        <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-[#85D91F]" />

                                        <p className="text-sm font-medium text-[#222]">
                                            Alex added Hotel Booking
                                        </p>

                                        <p className="mt-1 text-xs text-[#999]">
                                            ₹5,400 · 2 hours ago
                                        </p>

                                    </div>

                                    {/* Activity 2 */}
                                    <div className="relative pb-5">

                                        <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-[#D5D8CF]" />

                                        <p className="text-sm font-medium text-[#222]">
                                            Priya added Dinner at Café
                                        </p>

                                        <p className="mt-1 text-xs text-[#999]">
                                            ₹2,100 · Yesterday
                                        </p>

                                    </div>

                                    {/* Activity 3 */}
                                    <div className="relative">

                                        <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-[#D5D8CF]" />

                                        <p className="text-sm font-medium text-[#222]">
                                            Rahul joined the trip
                                        </p>

                                        <p className="mt-1 text-xs text-[#999]">
                                            2 days ago
                                        </p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>





                {/* Open Expense Input */}

                {
                    openExpenseInput && (

                        <AddExpense setOpenExpenseInput={setOpenExpenseInput} />
                    )
                }


                {
                    notification && (
                        <Notification tripId={id} setNotification={setNotification} />
                    )
                }
            </div>


        </>
    )
}

export default TripDetails
