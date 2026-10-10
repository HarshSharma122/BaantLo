import { Button } from '@/components/ui/button';
import { ArrowUpRight, CalendarDays, MapPin, Plane, Users, Wallet } from 'lucide-react';
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from 'next/link';

const trips = [
    {
        _id: "trip_001",
        tripName: "Manali Adventure",
        tripDescription: "A 4-day trip with college friends",
        tripLocation: "Manali, Himachal Pradesh, India",
        tripStartDate: "2026-11-10",
        tripEndDate: "2026-11-14",
        tripOwnerId: "user_101",
        tripMembers: [
            { memberId: "user_101", name: "Harsh", email: "harsh@example.com", role: "owner", isAccepted: true },
            { memberId: "user_102", name: "Rahul", email: "rahul@example.com", role: "member", isAccepted: true },
            { memberId: "user_103", name: "Priya", email: "priya@example.com", role: "member", isAccepted: true },
        ],
        tripExpenses: [
            {
                expenseId: "expense_001",
                expenseTitle: "Hotel Booking",
                amount: 6000,
                paidBy: "user_101",
                splitBetween: ["user_101", "user_102", "user_103"],
                category: "Accommodation",
                expenseDate: "2026-11-10",
                notes: "Two nights hotel booking",
            },
            {
                expenseId: "expense_002",
                expenseTitle: "Dinner",
                amount: 1500,
                paidBy: "user_102",
                splitBetween: ["user_101", "user_102", "user_103"],
                category: "Food",
                expenseDate: "2026-11-10",
                notes: "Dinner at a local restaurant",
            },
        ],
        tripBudget: 20000,
        currency: "INR",
        isTripEnded: false,
        tripEndDateActual: null,
        tripHistory: [
            {
                action: "trip_created",
                performedBy: "user_101",
                description: "Harsh created the trip",
                createdAt: "2026-10-10T10:00:00.000Z",
            },
        ],
        createdAt: "2026-10-10T10:00:00.000Z",
        updatedAt: "2026-10-10T10:00:00.000Z",
    },

    {
        _id: "trip_002",
        tripName: "Goa Beach Vacation",
        tripDescription: "A relaxing beach vacation with friends",
        tripLocation: "North Goa, Goa, India",
        tripStartDate: "2026-12-05",
        tripEndDate: "2026-12-09",
        tripOwnerId: "user_104",
        tripMembers: [
            { memberId: "user_104", name: "Aman", email: "aman@example.com", role: "owner", isAccepted: true },
            { memberId: "user_105", name: "Neha", email: "neha@example.com", role: "member", isAccepted: true },
            { memberId: "user_106", name: "Karan", email: "karan@example.com", role: "member", isAccepted: true },
            { memberId: "user_107", name: "Sneha", email: "sneha@example.com", role: "member", isAccepted: false },
        ],
        tripExpenses: [
            {
                expenseId: "expense_003",
                expenseTitle: "Villa Booking",
                amount: 12000,
                paidBy: "user_104",
                splitBetween: ["user_104", "user_105", "user_106"],
                category: "Accommodation",
                expenseDate: "2026-12-05",
                notes: "Shared villa reservation",
            },
            {
                expenseId: "expense_004",
                expenseTitle: "Beachside Dinner",
                amount: 2400,
                paidBy: "user_105",
                splitBetween: ["user_104", "user_105", "user_106"],
                category: "Food",
                expenseDate: "2026-12-06",
                notes: "Dinner near the beach",
            },
        ],
        tripBudget: 35000,
        currency: "INR",
        isTripEnded: false,
        tripEndDateActual: null,
        tripHistory: [
            {
                action: "trip_created",
                performedBy: "user_104",
                description: "Aman created the Goa trip",
                createdAt: "2026-10-12T09:00:00.000Z",
            },
        ],
        createdAt: "2026-10-12T09:00:00.000Z",
        updatedAt: "2026-10-12T09:00:00.000Z",
    },

    {
        _id: "trip_003",
        tripName: "Jaipur Heritage Tour",
        tripDescription: "Exploring forts, palaces, and local food",
        tripLocation: "Jaipur, Rajasthan, India",
        tripStartDate: "2026-09-15",
        tripEndDate: "2026-09-18",
        tripOwnerId: "user_108",
        tripMembers: [
            { memberId: "user_108", name: "Rohit", email: "rohit@example.com", role: "owner", isAccepted: true },
            { memberId: "user_109", name: "Ananya", email: "ananya@example.com", role: "member", isAccepted: true },
            { memberId: "user_110", name: "Vikas", email: "vikas@example.com", role: "member", isAccepted: true },
        ],
        tripExpenses: [
            {
                expenseId: "expense_005",
                expenseTitle: "Hotel Stay",
                amount: 4500,
                paidBy: "user_108",
                splitBetween: ["user_108", "user_109", "user_110"],
                category: "Accommodation",
                expenseDate: "2026-09-15",
                notes: "Three-night accommodation",
            },
            {
                expenseId: "expense_006",
                expenseTitle: "Fort Tickets",
                amount: 900,
                paidBy: "user_110",
                splitBetween: ["user_108", "user_109", "user_110"],
                category: "Activities",
                expenseDate: "2026-09-16",
                notes: "Entry tickets for the group",
            },
        ],
        tripBudget: 15000,
        currency: "INR",
        isTripEnded: true,
        tripEndDateActual: "2026-09-18",
        tripHistory: [
            {
                action: "trip_created",
                performedBy: "user_108",
                description: "Rohit created the Jaipur trip",
                createdAt: "2026-09-01T10:00:00.000Z",
            },
            {
                action: "trip_ended",
                performedBy: "user_108",
                description: "Rohit marked the trip as ended",
                createdAt: "2026-09-18T18:00:00.000Z",
            },
        ],
        createdAt: "2026-09-01T10:00:00.000Z",
        updatedAt: "2026-09-18T18:00:00.000Z",
    },

    {
        _id: "trip_004",
        tripName: "Rishikesh Weekend",
        tripDescription: "River rafting and a peaceful weekend",
        tripLocation: "Rishikesh, Uttarakhand, India",
        tripStartDate: "2026-10-24",
        tripEndDate: "2026-10-26",
        tripOwnerId: "user_111",
        tripMembers: [
            { memberId: "user_111", name: "Arjun", email: "arjun@example.com", role: "owner", isAccepted: true },
            { memberId: "user_112", name: "Meera", email: "meera@example.com", role: "member", isAccepted: true },
            { memberId: "user_113", name: "Dev", email: "dev@example.com", role: "member", isAccepted: true },
            { memberId: "user_114", name: "Isha", email: "isha@example.com", role: "member", isAccepted: true },
        ],
        tripExpenses: [
            {
                expenseId: "expense_007",
                expenseTitle: "River Rafting",
                amount: 3200,
                paidBy: "user_111",
                splitBetween: ["user_111", "user_112", "user_113", "user_114"],
                category: "Activities",
                expenseDate: "2026-10-25",
                notes: "Rafting for four people",
            },
            {
                expenseId: "expense_008",
                expenseTitle: "Group Lunch",
                amount: 1600,
                paidBy: "user_112",
                splitBetween: ["user_111", "user_112", "user_113", "user_114"],
                category: "Food",
                expenseDate: "2026-10-25",
                notes: "Lunch after rafting",
            },
        ],
        tripBudget: 12000,
        currency: "INR",
        isTripEnded: false,
        tripEndDateActual: null,
        tripHistory: [
            {
                action: "trip_created",
                performedBy: "user_111",
                description: "Arjun created the Rishikesh weekend trip",
                createdAt: "2026-10-01T08:30:00.000Z",
            },
        ],
        createdAt: "2026-10-01T08:30:00.000Z",
        updatedAt: "2026-10-01T08:30:00.000Z",
    },

 
];

const TripList = () => {
    return (
        <div className='mt-10'>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {trips.map((trip) => (
                    <div
                        key={trip._id}
                        className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#85D91F] hover:shadow-xl hover:shadow-neutral-200/50"
                    >
                        {/* Card header */}
                        <div className="relative flex h-28 items-center justify-between overflow-hidden bg-neutral-900 p-5">
                            <div className="absolute -right-5 -top-10 h-36 w-36 rounded-full  transition-all bg-[#85D91F]/30" />



                            <span
                                className={`relative rounded-full px-3 py-1.5 text-xs font-semibold ${trip.isTripEnded
                                    ? "bg-white/10 text-white"
                                    : "bg-yellow-700 text-neutral-200"
                                    }`}
                            >
                                {trip.isTripEnded ? "Completed" : "Upcoming"}
                            </span>
                        </div>

                        {/* Card content */}
                        <div className="p-5">
                            <h3 className="truncate text-lg font-bold text-neutral-900">
                                {trip.tripName}
                            </h3>

                            <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-neutral-500">
                                {trip.tripDescription}
                            </p>

                            <div className="mt-5 space-y-3 border-t border-neutral-100 pt-4">
                                <div className="flex items-center gap-3 text-sm text-neutral-600">
                                    <MapPin size={17} className="shrink-0 text-neutral-400" />
                                    <span className="truncate">{trip.tripLocation}</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-neutral-600">
                                    <CalendarDays
                                        size={17}
                                        className="shrink-0 text-neutral-400"
                                    />
                                    <span>
                                        {trip.tripStartDate} – {trip.tripEndDate && trip.tripEndDate}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-neutral-600">
                                    <Users size={17} className="shrink-0 text-neutral-400" />
                                    <span>
                                        {trip.tripMembers?.length} Members
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-neutral-600">
                                    <Wallet size={17} className="shrink-0 text-neutral-400" />
                                    <span>
                                        Budget:{" "}
                                        <span className="font-semibold text-neutral-900">
                                            {new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: trip.currency || "INR",
                                                maximumFractionDigits: 0,
                                            }).format(trip.tripBudget)}
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div className="mt-5 border-t border-neutral-100 pt-4">
                                <Link href={`trips/${trip._id}`}> 
                                <Button
                                    variant="outline"
                                    className="h-11 w-full justify-between rounded-xl border-neutral-200 font-semibold transition-colors  hover:text-neutral-900"
                                >
                                    View Details
                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>








            <div className="mt-4">
                {/* Pagination */}

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>





        </div>
    )
}

export default TripList
