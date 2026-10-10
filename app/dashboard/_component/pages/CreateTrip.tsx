import { Button } from '@/components/ui/button'
import React from 'react'

const CreateTrip = ({ setIsOpen }:{setIsOpen:Function}) => {
    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-medium">Create a New Trip</h2>

                    <button onClick={() => setIsOpen(false)} className="text-xl">
                        ✕
                    </button>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        name="tripname"
                        placeholder="Trip Name"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="date"
                        name="startdate"
                        placeholder="Start Date"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="date"
                        name="enddate"
                        placeholder="End Date"
                        className="w-full border rounded-lg p-2"
                        required
                    />


                    <select
                        name="currency"

                        className="w-full border rounded-lg p-2"
                        required
                    >
                        <option value="">select currency</option>
                        <option value="ruppe">Ruppes</option>
                        <option value="usd">USD</option>
                    </select>




                    <div className="flex gap-3 pt-2">
                        <Button

                            type="submit"
                            className={`flex-1`}
                        >
                            Create Trip
                        </Button>

                        <Button
                            onClick={() => setIsOpen(false)}
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

export default CreateTrip
