"use client"

import { Button } from "@/components/ui/button"
import Dashboard from "./_component/pages/Dashboard"
import { useState } from "react"
import CreateTrip from "./_component/pages/CreateTrip"

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen  px-4 lg:py-8 py-10 sm:px-6 lg:px-10">
    


        <div className="flex items-center justify-between">
          <div className="">
            <h1 className='text-2xl'>Trip Dashboard</h1>
            <h1 className="text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl lg:text-4xl">
              Your Entire Trip,{" "}
              At a Glance
            </h1>

            {/* <h3>Here's what's happening with your trips.</h3> */}
          </div>
          <div>
            <Button onClick={() => setIsOpen(!isOpen)} className="px-7 py-6 text-[18px] cursor-pointer">Create New Trip</Button>
          </div>
        </div>




        <Dashboard />



        {/* When click on create trip then this createTrip function will run */}

        {
          isOpen && (
            <CreateTrip setIsOpen={setIsOpen} />
          )
        }






    </div>


  )
}
export default page