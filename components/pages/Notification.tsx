import React from 'react'
import { Button } from '../ui/button'

const Notification = ({ setNotification }: { setNotification: Function }) => {
    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">

                <div className="">


                    <h1 className='text-xl'>Do you want to end the trip</h1>



                    <Button className="mt-4">Proceed</Button>
                    <Button onClick={() => setNotification(false)} variant="outline" className='ml-3'>Cancel</Button>
                </div>

            </div>
        </div>
    )
}

export default Notification
