import { DateConvert } from '@/utils/DateConversion/DateConversion';
import { CalendarDays, ChevronRight, Clock3, MapPin, Users, Wallet } from 'lucide-react'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Dashboard = () => {


    const [expense] = useState<{ activeTrip: any, totalAmount: string, completedTrip: any }>({
        totalAmount: "",
        completedTrip: [],
        activeTrip: {}
    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function data() {
            try {
                const res = await fetch("/api/dashboard");
                if (!res.ok) {
                    return;
                }

                const data = await res.json();
                expense.totalAmount = data.totalAmount;
                expense.completedTrip = data.completedTrip;
                expense.activeTrip = data.activeTrip


            } catch {

            } finally {
                setLoading(false);
            }
        }

        data();
    }, [])








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
        <div className='mt-10'>
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
                                        TOTAL SPENDING
                                    </p>

                                    <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                                        ₹{expense.totalAmount}
                                    </h2>


                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                                    <Wallet size={20} />
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
                                Total Trips
                            </p>

                            <p className="mt-1 text-2xl font-semibold text-[#222]">
                                3
                            </p>
                        </div>

                    </div>

                    {/* ===== RECENT EXPENSES ===== */}
                    <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-5 sm:p-6">

                        <div className="mb-5 flex items-center justify-between">

                            <div>
                                <h3 className="text-lg font-semibold text-[#202020]">
                                    Recent expenses
                                </h3>

                                <p className="mt-1 text-xs text-[#999]">
                                    Latest activity from your trip
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

                            {/* {expenses.map((expense, index) => (
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
                            ))} */}

                        </div>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="space-y-5">

                



                    {/* ===== BALANCES ===== */}
                    <div className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">

                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-[#202020]">
                                Active Trips
                            </h3>




                            <div className="mb-6 flex items-start justify-between">

                                <div>

                                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#222]">
                                        {expense.activeTrip?.tripName!}
                                    </h3>
                                </div>

                                <span className="rounded-full bg-[#F0F8E7] px-3 py-1.5 text-xs font-semibold text-[#65A914]">
                                    Active
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
                                            {expense.activeTrip.tripLocation}
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
                                            Trip start Date
                                        </p>

                                        <p className="mt-0.5 text-sm font-medium text-[#222]">
                                            {DateConvert(new Date(expense.activeTrip.tripStartDate))}
                                        </p>
                                    </div>

                                </div>

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
                                Completed Trips
                            </h3>

                        </div>

                        <div className="relative ml-2 border-l border-[#E5E5DF] pl-5">



                            {
                                expense.completedTrip.map((trip: any, index: number) => (

                                    <div key={index} className="relative pb-5">

                                        <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-[#85D91F]" />

                                        <p className="text-sm font-medium text-[#222]">
                                            {trip.tripName}
                                        </p>

                                        <p className="mt-1 text-xs text-[#999]">
                                            {trip.tripLocation}
                                        </p>

                                    </div>
                                ))
                            }



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;