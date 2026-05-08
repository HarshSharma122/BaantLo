import type { Metadata } from "next";
import Aside from "./_components/sideBar/Aside";
import Loading from "./_components/Loading/Loading";

export const metadata: Metadata = {
  title: "BaantLo - Dashboard",
  description:
    "Baantlo is for friends who wants to split the money without choas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Loading>
      <div className="min-h-full flex flex-col lg:ml-55">
        <Aside />
        <div>{children}</div>
      </div>
    </Loading>
  );
}
