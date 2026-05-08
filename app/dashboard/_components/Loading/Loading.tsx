"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import logo from "@/public/logo1.png";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/auth/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex-col flex items-center justify-center min-h-screen">
        <Image
          src={logo}
          width={120}
          height={120}
          alt="logo"
          className="animate-pulse duration-700"
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
