import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner';

const AddExpense = ({ setOpenExpenseInput, tripId }: { setOpenExpenseInput: Function, tripId: string }) => {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false);


    const [expenseInput, setExpenseInput] = useState({
        expenseTitle: "",
        amount: "",
        expenseDesc: "",
        dateofExpense: "",
    })

    const handleChange = (e: any) => {
        setExpenseInput({ ...expenseInput, [e.target.name]: e.target.value })
    }




    const expenseSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmit(true);
        try {
            const response = await fetch("/api/trip/expense/add-expense", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...expenseInput,
                    tripId: tripId
                })
            })

            if (response.ok) {
                setIsSubmit(false);
                setOpenExpenseInput(false);

                router.push("/dashboard/trips")

                setExpenseInput({
                    expenseTitle: "",
                    amount: "",
                    expenseDesc: "",
                    dateofExpense: "",

                })
                toast.message("Expense Created");

            } else {

                toast.error("Server side Error");
            }

        } catch (error) {
            toast.error("Please try again after some time");
            return error;


        }
    }

    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-medium">Add Expense</h2>

                    <button onClick={() => setOpenExpenseInput(false)} className="text-xl">
                        ✕
                    </button>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        name="expenseTitle"
                        value={expenseInput.expenseTitle}
                        onChange={handleChange}
                        placeholder="Expense Title"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        value={expenseInput.amount}
                        onChange={handleChange}
                        name="amount"
                        placeholder="Amount"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="date"
                        value={expenseInput.dateofExpense}
                        onChange={handleChange}
                        name="dateofExpense"
                        placeholder="Date"
                        className="w-full border rounded-lg p-2"
                        required
                    />

                    <Textarea name='expenseDesc' value={expenseInput.expenseDesc} onChange={handleChange} placeholder='Description..' className='w-full border rounded-lg p-2' />

                    <div className="flex gap-3 pt-2">
                        <Button
                        disabled={isSubmit}
                            onClick={expenseSubmit}
                            type="submit"
                            className={`flex-1`}
                        >
                            Add Expense
                        </Button>

                        <Button
                            onClick={() => setOpenExpenseInput(false)}
                            type="button"
                            variant="outline"
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense;
