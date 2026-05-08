"use client"
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Header from "./fixed/Header";
import Footer from "./fixed/Footer";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const pathName = path.startsWith("/dashboard");

  return (
    <div>
      {!pathName && <Header />}

      {children}
      {!pathName && <Footer />}
    </div>
  );
};

export default Wrapper;
