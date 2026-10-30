"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { tripExpensesProps } from '@/types/types';


const ExpenseList = () => {
    const [expense, setexpense] = useState<tripExpensesProps[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function expenseList() {
            try {
                const res = await fetch("/api/trip/expense/expense-list");
                if (!res.ok) {
                    setexpense([]);
                    return;
                }

                const data = await res.json();
                setexpense(data.msg);
            } catch {
                setexpense([]);
            } finally {
                setLoading(false);
            }
        }

        expenseList();
    }, [])








    if (loading || !expense.length) {
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

                <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

                    {/* Table Header */}
                    <div className="flex flex-col gap-2 border-b border-neutral-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">
                                All Expenses
                            </h2>
                            <p className="mt-1 text-sm text-[#888]">
                                Track and manage your trip expenses
                            </p>
                        </div>
                        <span className="w-fit rounded-full bg-[#85D91F]/15 px-3 py-1 text-xs font-semibold text-neutral-800">
                            {expense.length} Expenses
                        </span>
                    </div>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-187.5 text-left">
                            <thead>
                                <tr className="border-b border-neutral-100 bg-neutral-50">
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#888]">
                                        Expense
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#888]">
                                        Description
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#888]">
                                        Date
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#888]">
                                        Amount
                                    </th>

                                </tr>
                            </thead>

                            <tbody className="divide-y divide-neutral-100">
                                {expense.map((exp, index) => (
                                    <tr
                                        key={index}
                                        className="group transition-colors hover:bg-[#85D91F]/5"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#85D91F]/15 font-bold text-neutral-800">
                                                    {exp.expenseTitle?.charAt(0)?.toUpperCase()}
                                                </div>
                                                <span className="font-semibold text-neutral-800">
                                                    {exp.expenseTitle}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="max-w-55 truncate px-6 py-4 text-sm text-[#888]">
                                            {exp.expenseDesc || "No description"}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-sm  text-[#888]">
                                            {exp.dateofExpense}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-right">
                                            <span className="font-bold text-neutral-900">
                                                ₹{Number(exp.amount).toLocaleString("en-IN")}
                                            </span>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {expense.length === 0 && (
                            <div className="py-16 text-center">
                                <p className="font-semibold text-neutral-800">
                                    No expenses yet
                                </p>
                                <p className="mt-1 text-sm text-neutral-500">
                                    Add your first expense to get started.
                                </p>
                            </div>
                        )}
                    </div>
                </div>





            </div>


        </>
    )
}

export default ExpenseList
