"use client"

import Footer from '@/app/_components/fixed/Footer/Footer';
import Header from '@/app/_components/fixed/Header/Header';
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Wrapper = ({children}:{children:React.ReactNode}) => {
    const pathName = usePathname();




  return (
    <div>
      {pathName != "get-started" && <Header/> }  
      {children}
      {pathName != "get-started" && <Footer/> }  
    </div>
  )
}

export default Wrapper
