"use client";

import { Button } from "@/components/ui/button";
import {
  SignOutButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";

import Image from "next/image";
import React from "react";

import {
  LogOut,
  Wallet,
  Plane,
  Users,
  Bell,
  CreditCard,
  IndianRupee,
  Trophy,
  Clock3,
  Sparkles,
  Settings,
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
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },

    {
      title: "Total Trips",
      value: "18",
      icon: Plane,
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
    },

    {
      title: "Total Expenses",
      value: "₹3,000",
      icon: Wallet,
      color: "from-green-500 to-green-600",
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },

    {
      title: "Settled Amount",
      value: "₹1,200",
      icon: Trophy,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },

    {
      title: "Pending Amount",
      value: "₹1,800",
      icon: Clock3,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <></>
  );
};

export default Profile;