import type { Metadata } from "next";
import SideNavbar from "./_component/pages/sideNavbar";
import { Currentuser } from "@/lib/auth/CurrentUser";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
    title: "Baantlo",
    description: "When friends travel together, one person pays for the hotel, another pays for food, and someone else pays for transport. At the end, nobody knows exactly who owes whom. BaantLo will organize all this information in one place",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
    const CurrentUser = await Currentuser();
    if (!CurrentUser) {
        redirect("/")
    }

    return (
        <div>
            <div className="">
                <SideNavbar />
                {children}
            </div>
        </div>
    );
}
