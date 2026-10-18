import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

const CreateTrip = ({ setIsOpen }: { setIsOpen: Function }) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [input, setInput] = useState({
        tripName: "",
        tripDesc: "",
        destination: "",
        startDate: "",
        endDate: "",
        currency: "",
    })

    const handleChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const tripSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmit(true);
        try {
            const response = await fetch("/api/trip/createTrip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...input
                })
            })


            if (response.ok) {
                setIsSubmit(false);
                setIsOpen(false);

                setInput({
                    tripName: "",
                    tripDesc: "",
                    destination: "",
                    startDate: "",
                    endDate: "",
                    currency: "",

                })
                toast.message("Trip is SuccessFully Created");

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
                    <h2 className="text-xl font-medium">Create a New Trip</h2>

                    <button onClick={() => setIsOpen(false)} className="text-xl">
                        ✕
                    </button>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        name="tripName"
                        value={input.tripName}
                        onChange={handleChange}
                        placeholder="Trip Name"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        value={input.destination}
                        onChange={handleChange}
                        name="destination"
                        placeholder="Destination"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <Textarea
                        value={input.tripDesc}
                        onChange={handleChange}
                        name="tripDesc"
                        placeholder="tripDesc"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <Label>Start Date</Label>
                    <input
                        type="date"
                        value={input.startDate}
                        onChange={handleChange}
                        name="startDate"
                        placeholder="Start Date"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <Label>End Date (Optional)</Label>
                    <input
                        type="date"
                        value={input.endDate}
                        onChange={handleChange}
                        name="endDate"
                        placeholder="End Date"
                        className="w-full border rounded-lg p-2"

                    />


                    <select
                        name="currency"
                        value={input.currency}
                        onChange={handleChange}

                        className="w-full border rounded-lg p-2"
                        required
                    >
                        <option value="">select currency</option>
                        <option value="ruppe">Ruppes</option>
                        <option value="usd">USD</option>
                    </select>




                    <div className="flex gap-3 pt-2">
                        <Button
                            onClick={tripSubmit}
                            disabled={isSubmit}
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
