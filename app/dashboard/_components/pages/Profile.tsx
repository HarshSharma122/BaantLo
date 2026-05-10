"use client";

import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

import {
  LogOut,
  Wallet,
  Plane,
  Users,
  Trophy,
  Clock3,
  Sparkles,
  Settings,
  Mail,
} from "lucide-react";

const Profile = () => {
  const { isLoaded } = useAuth();
  const { user } = useUser();

  if (!isLoaded) return null;

  const stats = [
    {
      title: "Total Groups",
      value: "10",
      icon: Users,
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },

    {
      title: "Total Trips",
      value: "18",
      icon: Plane,
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
    },

    {
      title: "Total Expenses",
      value: "₹3,000",
      icon: Wallet,
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },

   
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your account and expenses
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-pink-100">
                <Image
                  src={user?.imageUrl || "/profile.png"}
                  alt="profile"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {user?.fullName}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-gray-500">
                  <Mail className="h-4 w-4" />
                  <p className="text-sm">{user?.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-800">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${item.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        
          {/* Account Info */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Account Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <h3 className="font-semibold text-gray-800">
                  {user?.username || "Not Available"}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <h3 className="font-semibold text-gray-800">
                  {user?.primaryEmailAddress?.emailAddress}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Account ID</p>
                <h3 className="font-semibold text-gray-800">
                  {user?.id}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;