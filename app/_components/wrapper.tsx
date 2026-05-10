"use client"
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "./fixed/Header";
import Footer from "./fixed/Footer";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const pathName = path.startsWith("/dashboard");
  const authPath= path.startsWith("/auth");
  return (
    <div>
      {!pathName && !authPath  && <Header />}

      {children}
      {!pathName && !authPath && <Footer />}
    </div>
  );
};

export default Wrapper;
