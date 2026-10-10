import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import TripList from './tripList'


const Trips = () => {
    return (
        <div className='ml-5'>
            <div className='flex items-center justify-between'>
                <div className="">

                    <h1 className='text-2xl font-semibold '>My Trips</h1>
                </div>
                <div className="flex items-center gap-3">

                    <Input placeholder='Search trips...' />
                    <Button className="cursor-pointer">Search</Button>
                </div>



            </div>



            {/* Trip details */}




            <TripList />



        </div>
    )
}

export default Trips
