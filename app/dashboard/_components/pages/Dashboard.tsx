"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import CreateTrip from "./CreateTrip";
import Trips from "./trips";

import {
  Plus,
  Bell,
  Sparkles,
  Plane,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const [createTripBoxOpen, setCreateTripBoxOpen] =
    useState(false);

  return (
    <div className="min-h-screen">
      
      {/* Main Container */}
      <div className="mx-auto w-full max-w-8xl px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-6  p-4  sm:p-6">
          
          {/* Mobile + Desktop Responsive */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Left Content */}
            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                <Plane className="h-7 w-7 text-indigo-600" />
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                    Your Trips
                  </h1>

                </div>

               

                {/* Small Stats */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="rounded-full bg-indigo-100 px-4 py-1 text-xs font-medium text-indigo-700 sm:text-sm">
                    Smart Expense Tracking
                  </div>

                  <div className="rounded-full bg-pink-100 px-4 py-1 text-xs font-medium text-pink-700 sm:text-sm">
                    Easy Group Splits
                  </div>

                  <div className="rounded-full bg-green-100 px-4 py-1 text-xs font-medium text-green-700 sm:text-sm">
                    Trip Management
                  </div>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              
              {/* Notification Button */}
              <Link href="/dashboard/notification">
              <Button
                variant="outline"
                className="h-11 rounded-xl border-gray-200 bg-white px-4 hover:bg-gray-50"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              </Link>

              {/* Add Trip Button */}
              <Button
                onClick={() =>
                  setCreateTripBoxOpen(true)
                }
                className="h-11 rounded-xl bg-indigo-600 px-5 text-sm font-medium hover:bg-indigo-700 sm:px-6"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Trip
              </Button>
            </div>
          </div>
        </div>

        {/* Trips Section */}
        <div className="">
          <Trips
            setTripBoxOpen={setCreateTripBoxOpen}
          />
        </div>
      </div>

      {/* Create Trip Modal */}
      {createTripBoxOpen && (
        <CreateTrip
          cancel={setCreateTripBoxOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;