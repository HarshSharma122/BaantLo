"use client"

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import TripDetails from '../../_component/pages/TripDetails';

const page = () => {
   const id = useParams();
  return (
    <div className='ml-5'>
        <TripDetails id={id.id}/>
    </div>
  )
}

export default page
