import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const AddExpense = ({ setOpenExpenseInput }: { setOpenExpenseInput: Function }) => {
   
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
                        placeholder="Expense Title"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="expenseAmount"
                        placeholder="Amount"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="date"
                        name="expenseDate"
                        placeholder="Date"
                        className="w-full border rounded-lg p-2"
                        required
                    />

                    <Textarea name='expenseDesc' placeholder='Description..' className='w-full border rounded-lg p-2' />






                    <div className="flex gap-3 pt-2">
                        <Button

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
