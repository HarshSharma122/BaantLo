"use client";

import React, { useEffect, useState } from "react";
import { fetchTripRequest } from "../fetchdata/TripRequest";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import {
  Bell,
  Check,
  Loader2,
  Phone,
  User,
  Plane,
  Sparkles,
} from "lucide-react";

const Notification = () => {
  const [notificationList, setNotificationList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [processingId, setProcessingId] =
    useState<string | null>(null);

  // Fetch Requests
  const fetchRequests = async () => {
    try {
      setLoading(true);

      const response = await fetchTripRequest();

      if (response?.msg) {
        setNotificationList(response.msg);
      } else {
        toast.error("Failed to fetch requests");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Accept Request
  const tripAccepted = async (id: string) => {
    try {
      setProcessingId(id);

      const response = await fetch(
        "/api/trip/tripAccepted",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            memberId: id,
          }),
        }
      );

      if (!response.ok) throw new Error();

      // Remove instantly
      setNotificationList((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("Request accepted");
    } catch (error) {
      toast.error("Failed to accept request");
    } finally {
      setProcessingId(null);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />

          <p className="text-sm text-gray-500">
            Loading requests...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-3 py-5 sm:px-5 lg:px-8">
      
      {/* Container */}
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-6 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-sm backdrop-blur-md sm:p-6">
          
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Left */}
            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                <Bell className="h-7 w-7 text-indigo-600" />
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Trip Requests
                  </h1>

                  <Sparkles className="h-5 w-5 text-yellow-500" />
                </div>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                  Manage friend requests for joining trips.
                </p>
              </div>
            </div>

            {/* Count */}
            <div className="rounded-2xl bg-indigo-100 px-5 py-3 text-center">
              <p className="text-sm text-indigo-700">
                Pending Requests
              </p>

              <h2 className="text-2xl font-bold text-indigo-800">
                {notificationList.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {notificationList.length === 0 ? (
          <div className="rounded-3xl border border-dashed bg-white/80 py-20 text-center shadow-sm backdrop-blur-md">
            
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
              <Plane className="h-10 w-10 text-indigo-600" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              No Pending Requests
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              When friends request to join your trip,
              they’ll appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            
            {notificationList.map((request) => (
              <div
                key={request._id}
                className="rounded-3xl border border-white/50 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    
                    {/* Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-lg font-bold text-indigo-700">
                      {request.name
                        ?.charAt(0)
                        ?.toUpperCase() || "?"}
                    </div>

                    {/* Details */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
                        Join Request
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-gray-800">
                        {request.tripName ||
                          "Trip"}
                      </h2>

                      {/* User Info */}
                      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-5">
                        
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-indigo-500" />
                          {request.name}
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-green-500" />
                          {request.phoneNo}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    
                    <Button
                      onClick={() =>
                        tripAccepted(request._id)
                      }
                      disabled={
                        processingId === request._id
                      }
                      className="h-11 rounded-2xl bg-green-600 px-6 hover:bg-green-700"
                    >
                      {processingId ===
                      request._id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing
                        </>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Accept Request
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;