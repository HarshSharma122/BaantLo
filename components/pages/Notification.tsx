import React, { useState } from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Notification = ({ setNotification, tripId }: { setNotification: Function , tripId:any}) => {
    const [istripEnded, setIstripEnded] = useState(false);
    const router = useRouter();


    const tripEnded = async (tripId: string) => {

        
        setIstripEnded(true);
        try {
            const response = await fetch("/api/trip/tripEnd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tripId: tripId[0]
                })
            })

            const data = await response.json();
            if (!response.ok) {
                toast.error(data.msg);
            }
            if (response.ok) {
                setIstripEnded(false);
                router.push("/dashboard/trips")
                toast.message(data.msg);
                setNotification(false);

            }
        } catch (error: any) {
            console.log(error);

            toast.error("Please try again later");


        }
    }

    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">

                <div className="">


                    <h1 className='text-xl'>Do you want to end the trip</h1>



                    <Button disabled={istripEnded} onClick={()=>tripEnded(tripId)} className="mt-4">Proceed</Button>
                    <Button onClick={() => setNotification(false)} variant="outline" className='ml-3'>Cancel</Button>
                </div>

            </div>
        </div>
    )
}

export default Notification
