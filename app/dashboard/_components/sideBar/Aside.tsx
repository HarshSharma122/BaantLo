"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  LogOut,
  User,
  UsersRound,
  Menu,
  X,
  Wallet,
} from "lucide-react";
import Image from "next/image";

const Aside = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      link: "/dashboard",
    },
    {
      name: "Profile",
      icon: <User className="w-5 h-5" />,
      link: "/dashboard/profile",
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between border-b bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo1.png" alt="logo" width={45} height={45} />
          <h1 className="text-xl font-bold text-indigo-600">BaantLo</h1>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border p-2"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-60 flex-col border-r bg-white shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Top */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div className="flex items-center gap-1">
            <Image src="/logo1.png" alt="logo" width={70} height={70} />

            <div>
              <h1 className="text-xl font-bold text-indigo-600">
                BaantLo
              </h1>

              <p className="text-xs text-gray-500">
                Split expenses smarter
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

    

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group flex items-center gap-2 text-[15px] rounded-xl px-4 py-3 text-gray-700 transition-all duration-200"
              >
                <span className="transition-transform group-hover:scale-110">
                  {item.icon}
                </span>

                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;