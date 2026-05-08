"use client";

import { Button } from "@/components/ui/button";
import { tripExpensesProps, TripsProps } from "@/types/types";
import { useRefreshStore } from "@/zustand/useRefresh";

import {
  ArrowLeft,
  Plus,
  Trash2,
  Calendar,
  MapPin,
  Users,
  Wallet,
  CheckCircle2,
  XCircle,
  Clock3,
  Flag,
  Loader2,
  Receipt,
  IndianRupee,
  X,
} from "lucide-react";

import React, { useState } from "react";
import { toast } from "sonner";

const TripDetails = ({
  trip,
  tripFullOpen,
  exitDetails,
}: {
  trip: TripsProps | null;
  tripFullOpen: boolean;
  exitDetails: any;
}) => {
  const { setIsRefresh } = useRefreshStore();

  const [openExpense, setOpenExpense] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  // Total Expenses
  const totalExpenses =
    trip?.tripExpenses?.reduce(
      (total: any, expense: tripExpensesProps) =>
        total + Number(expense.amount),
      0
    ) || 0;

  // Expense Per Member
  const expensePerMember =
    trip?.tripMembers?.length! > 0
      ? Math.floor(totalExpenses / trip?.tripMembers?.length!)
      : 0;

  // Format Price
  function formatPrice(num: number) {
    return num.toLocaleString();
  }

  // Submit Expense
  const submitExpense = async (id: any) => {
    if (!title || !amount || !paidBy) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setIsSubmit(true);

      const response = await fetch("/api/submitExpenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tripId: id,
          expenseTitle: title,
          amount: amount,
          paidBy: paidBy,
        }),
      });

      if (response.ok) {
        toast.success("Expense added successfully");

        setOpenExpense(false);

        setTitle("");
        setAmount("");
        setPaidBy("");

        setIsRefresh(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network issue");
    } finally {
      setIsSubmit(false);
    }
  };

  // End Trip
  const updateIsEndedTrip = async (id: any) => {
    try {
      setIsUpdated(true);

      const today = new Date().toDateString();

      const response = await fetch("/api/updateTrip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tripId: id,
          tripEndedDate: today,
        }),
      });

      if (response.ok) {
        toast.success("Trip ended successfully");

        setIsRefresh(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network issue");
    } finally {
      setIsUpdated(false);
    }
  };

  // Delete Trip
  const deleteTrip = async (id: any) => {
    try {
      setIsSubmit(true);

      const response = await fetch("/api/deleteTrip", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tripId: id,
        }),
      });

      if (response.ok) {
        toast.success("Trip deleted successfully");

        exitDetails();

        setIsRefresh(true);
      } else {
        toast.error("Failed to delete trip");
      }
    } catch (error) {
      toast.error("Network issue");
    } finally {
      setIsSubmit(false);
    }
  };

  // Delete Expense
  const deleteExpense = async (id: any) => {
    try {
      setIsSubmit(true);

      const response = await fetch("/api/deleteTripExpense", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tripExpenseId: id,
        }),
      });

      if (response.ok) {
        toast.success("Expense deleted");

        setIsRefresh(true);
      } else {
        toast.error("Failed to delete expense");
      }
    } catch (error) {
      toast.error("Network issue");
    } finally {
      setIsSubmit(false);
    }
  };

  // PDF
  const createPdfSubmit = () => {
    toast.message("PDF feature coming soon 🚀");
  };

  return (
    <>
      {tripFullOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="min-h-screen px-2 py-3 sm:px-4 sm:py-8">
            <div className="mx-auto w-full max-w-6xl rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
              
              {/* Header */}
              <div className="sticky top-0 z-20 flex flex-col gap-4 rounded-t-2xl sm:rounded-t-3xl border-b bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                
                {/* Left */}
                <div className="flex items-center gap-3">
                  <Button
                    onClick={exitDetails}
                    variant="outline"
                    className="rounded-xl h-10 w-10 p-0"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>

                  <div>
                    <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                      Trip Details
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-500">
                      Manage expenses and members
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-wrap gap-2">
                  {!trip?.isTripEnded ? (
                    <>
                      <Button
                        onClick={() => setOpenExpense(true)}
                        className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs sm:text-sm"
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Add Expense
                      </Button>

                      <Button
                        onClick={() => updateIsEndedTrip(trip?._id)}
                        disabled={isUpdated}
                        variant="outline"
                        className="rounded-xl text-xs sm:text-sm"
                      >
                        {isUpdated ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <Flag className="mr-1 h-4 w-4" />
                            End Trip
                          </>
                        )}
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={createPdfSubmit}
                      className="rounded-xl bg-green-600 hover:bg-green-700 text-xs sm:text-sm"
                    >
                      <Receipt className="mr-1 h-4 w-4" />
                      Create PDF
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6">

                {/* Trip Card */}
                <div className="rounded-2xl sm:rounded-3xl border bg-gradient-to-br from-indigo-50 to-white p-4 sm:p-6">
                  
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    
                    {/* Trip Info */}
                    <div>
                      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 break-words">
                        {trip?.tripName}
                      </h1>

                      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4 text-sm text-gray-600">
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-pink-500" />
                          <span>{trip?.tripLocation}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-indigo-500" />
                          <span>{trip?.tripStartDate}</span>
                        </div>

                        {trip?.tripEndDate && (
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-green-500" />
                            <span>{trip?.tripEndDate}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      
                      <div
                        className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold ${
                          trip?.isTripEnded
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {trip?.isTripEnded
                          ? "Trip Ended"
                          : "Active Trip"}
                      </div>

                      <Button
                        variant="destructive"
                        className="rounded-xl text-xs sm:text-sm"
                        onClick={() => deleteTrip(trip?._id)}
                      >
                        <Trash2 className="mr-1 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  
                  {/* Total Expense */}
                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      
                      <div>
                        <p className="text-sm text-gray-500">
                          Total Expenses
                        </p>

                        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-800">
                          ₹{formatPrice(totalExpenses)}
                        </h1>
                      </div>

                      <div className="rounded-2xl bg-indigo-100 p-3">
                        <Wallet className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      
                      <div>
                        <p className="text-sm text-gray-500">
                          Members
                        </p>

                        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-800">
                          {trip?.tripMembers?.length}
                        </h1>
                      </div>

                      <div className="rounded-2xl bg-pink-100 p-3">
                        <Users className="h-5 w-5 text-pink-600" />
                      </div>
                    </div>
                  </div>

                  {/* Per Member */}
                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      
                      <div>
                        <p className="text-sm text-gray-500">
                          Per Member
                        </p>

                        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-800">
                          ₹{formatPrice(expensePerMember)}
                        </h1>
                      </div>

                      <div className="rounded-2xl bg-green-100 p-3">
                        <IndianRupee className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Members */}
                <div className="mt-8">
                  <h2 className="mb-4 text-xl sm:text-2xl font-bold text-gray-800">
                    Trip Members
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {trip?.tripMembers?.map((member, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm"
                      >
                        <div className="min-w-0">
                          <h3 className="truncate font-semibold text-gray-800">
                            {member.name}
                          </h3>

                          <p className="truncate text-sm text-gray-500">
                            {member.email}
                          </p>
                        </div>

                        {member.isAccepted ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expenses */}
                <div className="mt-8">
                  <h2 className="mb-4 text-xl sm:text-2xl font-bold text-gray-800">
                    Expenses
                  </h2>

                  {trip?.tripExpenses?.length! > 0 ? (
                    <div className="space-y-4">
                      {trip?.tripExpenses?.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border bg-white p-4 shadow-sm"
                        >
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {item.expenseTitle}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                              Paid by {item.paidBy}
                            </p>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3">
                            <h2 className="text-lg sm:text-xl font-bold text-green-600">
                              ₹{item.amount}
                            </h2>

                            {!trip?.isTripEnded && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => deleteExpense(item._id)}
                              >
                                <Trash2 className="h-5 w-5 text-red-500" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-3xl border border-dashed py-12 text-center">
                      <Wallet className="mx-auto h-10 w-10 text-gray-300" />

                      <h2 className="mt-4 text-lg sm:text-xl font-semibold text-gray-700">
                        No Expenses Added
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        Start adding expenses to track spending.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Add Expense Modal */}
          {openExpense && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
              <div className="w-full max-w-md rounded-3xl bg-white p-5 sm:p-6 shadow-2xl">
                
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Add Expense
                    </h2>

                    <p className="text-sm text-gray-500">
                      Track your trip spending
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenExpense(false)}
                    className="rounded-full p-2 hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Expense title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-2xl border bg-gray-50 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-2xl border bg-gray-50 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <select
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                    className="w-full rounded-2xl border bg-gray-50 px-4 py-3 outline-none focus:border-indigo-500"
                  >
                    <option value="">Who Paid?</option>

                    {trip?.tripMembers
                      .filter((member) => member.isAccepted)
                      .map((member, i) => (
                        <option key={i} value={member.name}>
                          {member.name}
                        </option>
                      ))}
                  </select>

                  {/* Buttons */}
                  <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="rounded-xl w-full sm:w-auto"
                      onClick={() => setOpenExpense(false)}
                    >
                      Cancel
                    </Button>

                    <Button
                      disabled={isSubmit}
                      onClick={() => submitExpense(trip?._id)}
                      className="rounded-xl bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto"
                    >
                      {isSubmit ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Expense"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TripDetails;