"use client";

import { Button } from "@/components/ui/button";
import { TripsProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import TripDetails from "./TripDetails";
import { fetchTripData } from "../fetchdata/tripData";
import AddTripMember from "./addTripMember";
import { useRefreshStore } from "@/zustand/useRefresh";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  Plus,
  Luggage,
} from "lucide-react";

const Trips = ({ setTripBoxOpen }: any) => {
  const { isRefresh } = useRefreshStore();

  const [tripFullOpen, setTripFullOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripsProps | null>(null);
  const [trips, setTrips] = useState<TripsProps[]>([]);

  const [tripName, setTripName] = useState("");
  const [tripId, setTripId] = useState<object | null>(null);
  const [addMemberBox, setAddMemberBox] = useState(false);

  // Open Trip Details
  const viewDetailsOpen = (trip: TripsProps) => {
    setSelectedTrip(trip);
    setTripFullOpen(true);
  };

  // Close Trip Details
  const exitDetailsOpen = () => {
    setSelectedTrip(null);
    setTripFullOpen(false);
  };

  // Fetch Trips
  const getTrips = async () => {
    try {
      const tripResponse = await fetchTripData();
      setTrips(tripResponse.msg || []);
    } catch (error) {
      console.error("Failed to fetch trips:", error);
    }
  };

  useEffect(() => {
    getTrips();
  }, [isRefresh]);

  // Open Add Member Modal
  const openTripMemberFn = (id: object, tripName: string) => {
    setTripId(id);
    setAddMemberBox(true);
    setTripName(tripName);
  };

  return (
    <>
      {!trips.length ? (
        <div className="flex min-h-[75vh] flex-col items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl border bg-white p-10 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
              <Luggage className="h-10 w-10 text-indigo-600" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-800">
              No Trips Yet
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Create your first trip and start splitting expenses with friends
              easily using BaantLo.
            </p>

            <Button
              onClick={() => setTripBoxOpen(true)}
              className="mt-7 h-12 rounded-xl bg-indigo-600 px-8 hover:bg-indigo-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Trip
            </Button>
          </div>
        </div>
      ) : (
        <div className="px-4 py-6 md:px-8">
        

          {/* Trips Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {trips.map((trip, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Top Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl transition-all duration-300 group-hover:bg-indigo-200" />

                {/* Trip Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Luggage className="h-7 w-7 text-indigo-600" />
                </div>

                {/* Trip Name */}
                <h2 className="relative z-10 mt-5 text-2xl font-bold text-gray-800">
                  {trip.tripName}
                </h2>

                {/* Location */}
                <div className="relative z-10 mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-indigo-500" />
                  <span>{trip.tripLocation || "Unknown Location"}</span>
                </div>

                {/* Dates */}
                <div className="relative z-10 mt-4 space-y-2 rounded-2xl bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays className="h-4 w-4 text-indigo-500" />
                    <span>
                      Start: {trip.tripStartDate || "Not Available"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays className="h-4 w-4 text-pink-500" />
                    <span>End: {trip.tripEndDate || "Not Available"}</span>
                  </div>
                </div>

                {/* Members */}
                <div className="relative z-10 mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>
                    {trip.tripMembers?.length || 0} Members Added
                  </span>
                </div>

                {/* Actions */}
                <div className="relative z-10 mt-6 flex gap-3">
                  <Button
                    onClick={() =>
                      openTripMemberFn(trip._id, trip.tripName)
                    }
                    className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-700"
                  >
                    Add Members
                  </Button>

                  <Button
                    onClick={() => viewDetailsOpen(trip)}
                    variant="outline"
                    className="rounded-xl border-gray-300 px-4"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Trip Details */}
          <TripDetails
            trip={selectedTrip}
            tripFullOpen={tripFullOpen}
            exitDetails={exitDetailsOpen}
          />

          {/* Add Member Modal */}
          {addMemberBox && tripId && (
            <AddTripMember
              tripName={tripName}
              open={setAddMemberBox}
              tripId={tripId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Trips;