"use client";

import React, { useEffect, useState } from "react";
import {
  UserRound,
  CalendarDays,
  Bell,
  ShieldCheck,
  LogOut,
  Trash2,
  Crown,
  Mail,
  Check,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { userProps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Profile = () => {
  const router  =  useRouter();
  const [user, setUser] = useState<userProps>();
  const [loading, setLoading] = useState(true);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);


  const[isLogout, setIsLogout] = useState(false);

  const logout = async()=>{
    setIsLogout(true);



    const response = await fetch("/api/auth/logout", {
      method:"POST",
    });

    if(response.ok){
      toast.message('You successFully log out')
      setIsLogout(false);
      router.push("/");
    }
    else{
      toast.error('Error! please try again later')
      setIsLogout(false);

    }
  }




  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/user");

        if (!res.ok) {
          setUser(undefined);
          return;
        }

        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(undefined);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);




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



  const initials = user?.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen px-4 lg:py-8 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-[#65A914]">
            ACCOUNT MANAGEMENT
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#222] sm:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-[#888] sm:text-base">
            Manage your account and preferences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <section className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 text-white sm:p-8">
              <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#85D91F]/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#85D91F]/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-white/10 bg-[#85D91F] text-2xl font-bold text-[#171717] shadow-lg">
                    {initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-semibold capitalize tracking-tight sm:text-3xl">
                        {user?.name}
                      </h2>

                      {user?.plan == "Pro" && (
                        <span className="flex items-center gap-1 rounded-full bg-[#85D91F]/15 px-3 py-1 text-xs font-medium text-[#B7F56A]">
                          <Crown size={13} />
                          Pro Member
                        </span>
                      )}
                    </div>

                    <p className="mt-2 flex items-center gap-2 break-all text-sm text-white/55">
                      <Mail size={15} className="shrink-0" />
                      {user?.email}
                    </p>

                    <p className="mt-3 text-xs text-white/40">
                      Member ID: {user?._id as any}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <UserRound size={20} className="text-[#85D91F]" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-white/45">Account status</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#85D91F]" />
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-white/45">Current plan</p>
                    <p className="mt-2 text-sm font-medium">{user?.plan}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="rounded-[26px] border border-[#E6E6E0] bg-white p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0F8E7]">
                  <Bell size={20} className="text-[#65A914]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[#222]">
                    Notifications
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#888]">
                    Receive updates about trip invitations, expenses, and
                    settlements.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={notificationsEnabled}
                  aria-label="Toggle notifications"
                  onClick={() =>
                    setNotificationsEnabled((previous) => !previous)
                  }
                  className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition ${notificationsEnabled ? "bg-[#85D91F]" : "bg-[#D4D4D0]"
                    }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${notificationsEnabled ? "left-6" : "left-1"
                      }`}
                  />
                </button>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEA] pt-4">
                <span className="text-xs text-[#999]">
                  {notificationsEnabled
                    ? "Notifications are enabled"
                    : "Notifications are disabled"}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${notificationsEnabled
                      ? "bg-[#F0F8E7] text-[#65A914]"
                      : "bg-[#F4F4F1] text-[#888]"
                    }`}
                >
                  {notificationsEnabled ? "On" : "Off"}
                </span>
              </div>
            </section>

            {/* Delete Account */}
            <section className="rounded-[26px] border border-red-100 bg-white p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                  <Trash2 size={20} className="text-red-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[#222]">
                    Delete Account
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#888]">
                    Permanently remove your account and associated data.
                    This action cannot easily be undone.
                  </p>
                </div>
              </div>

              {!showDeleteConfirm ? (
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="mt-5 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 size={15} className="mr-2" />
                  Delete my account
                </Button>
              ) : (
                <div className="mt-5 rounded-2xl bg-red-50 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      size={18}
                      className="mt-0.5 shrink-0 text-red-600"
                    />
                    <div>
                      <p className="text-sm font-semibold text-red-700">
                        Are you sure?
                      </p>
                      <p className="mt-1 text-xs leading-5 text-red-600">
                        Account deletion must be handled securely by your
                        backend before any data is removed.
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="mt-4 border-red-200 bg-white text-red-600 hover:bg-red-100"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Membership */}
            <section className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#999]">
                    CURRENT PLAN
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#222]">
                    {user?.plan}
                  </h3>
                  <p className="mt-1 text-sm text-[#888]">
                    Simple expense management.
                  </p>
                </div>

                <span className="rounded-full bg-[#F0F8E7] px-3 py-1.5 text-xs font-semibold text-[#65A914]">
                  Active
                </span>
              </div>

              <div className="my-6 border-t border-[#EEEEEA]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F6F2]">
                  <CalendarDays size={18} className="text-[#65A914]" />
                </div>
                <div>
                  <p className="text-xs text-[#999]">Member since</p>
                  <p className="mt-1 text-sm font-medium text-[#222]">
                    {new Date(user?.createdAt as Date).toDateString()}
                  </p>
                </div>
              </div>

              {user?.plan != "Pro" && (
                <div className="mt-6 rounded-2xl bg-[#F6F9F0] p-4">
                  <p className="text-sm font-semibold text-[#222]">
                    Enjoy simple group expenses
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#777]">
                    Create trips, track shared expenses, and keep settlements
                    organized with BaantLo.
                  </p>
                </div>
              )}
            </section>

            {/* Security */}
            <section className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0F8E7]">
                  <ShieldCheck size={20} className="text-[#65A914]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#222]">
                    Account Security
                  </h3>
                  <p className="mt-1 text-xs text-[#888]">
                    Keep your account protected.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#FAFAF7] p-3">
                <Check size={16} className="text-[#65A914]" />
                <p className="text-xs text-[#666]">
                  Authentication managed securely
                </p>
              </div>
            </section>

            {/* Logout */}
            <section className="rounded-[26px] border border-[#E6E6E0] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F6F2]">
                  <LogOut size={20} className="text-[#555]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#222]">Sign out</h3>
                  <p className="mt-1 text-xs text-[#888]">
                    Sign out of your BaantLo account.
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                disabled={isLogout}
                className="mt-5 w-full justify-between border-[#E6E6E0] text-[#333] hover:border-[#85D91F] hover:bg-[#F6F9F0]"
                onClick={() => logout()}
              >
                Logout
                <ArrowUpRight size={16} />
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;