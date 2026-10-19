import { Button } from '@/components/ui/button';
import { tripProps } from '@/types/types';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

const AddMembers = ({ setAddmemberSectionOpen, trip }: { setAddmemberSectionOpen: Function, trip:tripProps }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        phoneNo: "",
    })

    const handleChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const tripSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsAdded(true);
        try {
            const response = await fetch("/api/trip/members/add-members", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...input,
                    tripName:trip.tripName,
                    tripId:trip._id
                })
            })


            if (response.ok) {
                setIsAdded(false);
                setAddmemberSectionOpen(false);

                setInput({
                    name: "",
                    email: "",
                    phoneNo: "",


                })
                toast.message("Member is SuccessFully Added");

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
                    <h2 className="text-xl font-medium">Add Member</h2>

                    <button onClick={() => setAddmemberSectionOpen(false)} className="text-xl">
                        ✕
                    </button>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="number"
                        name="phoneNo"
                        value={input.phoneNo}
                        onChange={handleChange}
                        placeholder="Enter phoneNo"
                        className="w-full border rounded-lg p-2"
                        required
                    />





                    <div className="flex gap-3 pt-2">
                        <Button
                            disabled={isAdded}
                            onClick={tripSubmit}
                            type="submit"
                            className={`flex-1`}
                        >
                            Add Member
                        </Button>

                        <Button
                            onClick={() => setAddmemberSectionOpen(false)}
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

export default AddMembers;
