import type { Metadata } from "next";
import SideNavbar from "./_component/pages/sideNavbar";


export const metadata: Metadata = {
    title: "Baantlo",
    description: "When friends travel together, one person pays for the hotel, another pays for food, and someone else pays for transport. At the end, nobody knows exactly who owes whom. BaantLo will organize all this information in one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <div>
            <div className="">
                <SideNavbar/>
                {children}
            </div>
        </div>
    );
}
