"use client"

import Footer from '@/app/_components/fixed/Footer/Footer';
import Header from '@/app/_components/fixed/Header/Header';
import { usePathname } from 'next/navigation';
import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  
  const dashPath = pathName.startsWith("/dashboard");


  return (
    <div>
      {!dashPath && <Header />}
      {children}
      {!dashPath && <Footer />}
    </div>
  )
}
export default Wrapper;