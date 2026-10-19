"use client"
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { tripProps } from '@/types/types';
import Image from 'next/image';
import { DateConvert } from '@/utils/DateConversion/DateConversion';
import { toast } from 'sonner';
import AddMembers from './AddMembers';


const TripList = () => {
    const [trips, setTrips] = useState<tripProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [addmemberSectionOpen, setAddmemberSectionOpen] = useState(false);
    const[selectedTrip, setSelectedTrip] = useState<tripProps>();


    useEffect(() => {

        async function tripList() {
            try {
                const res = await fetch("/api/trip/tripList");
                if (!res.ok) {
                    setTrips([]);
                    return;
                }

                const data = await res.json();
                setTrips(data.msg);
            } catch {
                setTrips([]);
            } finally {
                setLoading(false);
            }
        }

        tripList();
    }, [])








    if (loading || !trips.length) {
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

            <div className='mt-10'>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {trips.map((trip, index) => (
                        <div
                            key={index}
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
                                    {trip.tripDesc}
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
                                            {trip?.tripStartDate && DateConvert(new Date(trip?.tripStartDate))} —  {trip?.tripEndDate ? DateConvert(new Date(trip?.tripEndDate)) : "Not Confirmed"}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                                        <Users size={17} className="shrink-0 text-neutral-400" />
                                        <span>
                                            {trip.tripMembers?.length} Members
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                                        <Button onClick={() => {
                                            setSelectedTrip(trip);
                                            setAddmemberSectionOpen(true)                
                                            }} variant="outline">Add Members</Button>
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






            </div>




            {
                addmemberSectionOpen && selectedTrip && (
                  <AddMembers trip={selectedTrip} setAddmemberSectionOpen={ setAddmemberSectionOpen}/>

                )
            }
        </>
    )
}

export default TripList
