"use client";

import { Button } from "@/components/ui/button";
import { useRefreshStore } from "@/zustand/useRefresh";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  X,
  Loader2,
  CheckCircle2,
  Users,
} from "lucide-react";

interface tripProps {
  open: any;
  tripId: any;
  tripName: string;
}

const AddTripMember = ({
  open,
  tripId,
  tripName,
}: tripProps) => {
  const { setIsRefresh } = useRefreshStore();

  const [isSubmit, setIsSubmit] = useState(false);

  const [id, setId] = useState("");

  const [openNotification, setOpenNotification] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !inputValue.name ||
      !inputValue.email ||
      !inputValue.phoneNo
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setIsSubmit(true);

      const res = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: inputValue.name,
          email: inputValue.email,
          tripId: tripId,
          tripName: tripName,
          phoneNo: inputValue.phoneNo,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setId(data.id);

        setInputValue({
          name: "",
          email: "",
          phoneNo: "",
        });

        setIsRefresh(true);

        toast.success(
          "Member added successfully 🚀"
        );

        open(false);

        setOpenNotification(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network issue occurred");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Background Glow */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />

          {/* Header */}
          <div className="relative flex items-start justify-between border-b px-6 py-5">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Add Member
                  </h2>

                  <p className="text-sm text-gray-500">
                    Invite friends to{" "}
                    <span className="font-semibold text-indigo-600">
                      {tripName}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => open(false)}
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative space-y-5 px-6 py-6"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 focus-within:border-indigo-500 focus-within:bg-white">
                <User className="h-5 w-5 text-indigo-500" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={inputValue.name}
                  onChange={handleChange}
                  disabled={isSubmit}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 focus-within:border-indigo-500 focus-within:bg-white">
                <Mail className="h-5 w-5 text-pink-500" />

                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  value={inputValue.email}
                  onChange={handleChange}
                  disabled={isSubmit}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3 focus-within:border-indigo-500 focus-within:bg-white">
                <Phone className="h-5 w-5 text-emerald-500" />

                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={inputValue.phoneNo}
                  onChange={handleChange}
                  disabled={isSubmit}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => open(false)}
                disabled={isSubmit}
                className="rounded-xl px-6"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isSubmit}
                className="rounded-xl bg-indigo-600 px-6 hover:bg-indigo-700"
              >
                {isSubmit ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Member"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Notification */}
      {openNotification && id && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-800">
              Invitation Sent 🚀
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your friend has received an invitation email to join the
              trip.
            </p>

            <Button
              onClick={() => setOpenNotification(false)}
              className="mt-6 rounded-xl bg-indigo-600 px-6 hover:bg-indigo-700"
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTripMember;