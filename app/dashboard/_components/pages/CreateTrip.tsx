"use client";

import { Button } from "@/components/ui/button";
import { useRefreshStore } from "@/zustand/useRefresh";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  CalendarDays,
  MapPin,
  Plane,
  X,
  Loader2,
} from "lucide-react";

interface TripData {
  tripName: string;
  tripLocation: string;
  startDate: string;
}

const CreateTrip = ({ cancel }: { cancel: any }) => {
  const { setIsRefresh } = useRefreshStore();

  const [isSubmit, setIsSubmit] = useState(false);

  const [tripData, setTripData] = useState<TripData>({
    tripName: "",
    tripLocation: "",
    startDate: "",
  });

  // Handle Input Change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setTripData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = async () => {
    if (
      !tripData.tripName.trim() ||
      !tripData.tripLocation.trim() ||
      !tripData.startDate
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setIsSubmit(true);

      const response = await fetch("/api/createTrip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripName: tripData.tripName,
          tripLocation: tripData.tripLocation,
          startDate: tripData.startDate,
        }),
      });

      if (response.ok) {
        toast.success("Trip created successfully ✈️");

        setTripData({
          tripName: "",
          tripLocation: "",
          startDate: "",
        });

        setIsRefresh(true);
        cancel(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Server error occurred");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Top Gradient */}
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Create New Trip
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Plan your next journey with friends
            </p>
          </div>

          <button
            onClick={() => cancel(false)}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="relative space-y-5 px-6 py-6">
          {/* Trip Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Trip Name
            </label>

            <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 transition focus-within:border-indigo-500 focus-within:bg-white">
              <Plane className="h-5 w-5 text-indigo-500" />

              <input
                type="text"
                name="tripName"
                value={tripData.tripName}
                onChange={handleInputChange}
                placeholder="Goa Adventure"
                disabled={isSubmit}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Trip Location
            </label>

            <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 transition focus-within:border-indigo-500 focus-within:bg-white">
              <MapPin className="h-5 w-5 text-pink-500" />

              <input
                type="text"
                name="tripLocation"
                value={tripData.tripLocation}
                onChange={handleInputChange}
                placeholder="Dehradun"
                disabled={isSubmit}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Start Date
            </label>

            <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 transition focus-within:border-indigo-500 focus-within:bg-white">
              <CalendarDays className="h-5 w-5 text-emerald-500" />

              <input
                type="date"
                name="startDate"
                value={tripData.startDate}
                onChange={handleInputChange}
                disabled={isSubmit}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => cancel(false)}
              disabled={isSubmit}
              className="rounded-xl px-6"
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={isSubmit}
              className="rounded-xl bg-indigo-600 px-6 hover:bg-indigo-700"
            >
              {isSubmit ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Trip"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;