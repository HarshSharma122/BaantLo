"use client"

import Footer from '@/app/_components/fixed/Footer/Footer';
import Header from '@/app/_components/fixed/Header/Header';
import { usePathname } from 'next/navigation';
import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const authPath = pathName.startsWith("/auth");
  const dashPath = pathName.startsWith("/dashboard");


  return (
    <div>
      {!authPath && !dashPath && <Header />}
      {children}
      {!authPath && !dashPath && <Footer />}
    </div>
  )
}
export default Wrapper;