import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems2 } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black-100">
      <nav className="flex sticky top-0  z-50 flex-row justify-around items-center bg-black-200 h-24 w-full px-4 md:px-0">
        <div className="my-2">
          <Image
            src="/QPMatrix-Logo.svg"
            alt="logo"
            width={60}
            height={60}
            quality={100}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-row space-x-4 mt-2 md:mt-0 text-purple">
          <Link href="/" className="text-lg md:text-xl">
            Home
          </Link>
          <Link href="/projects" className="text-lg md:text-xl">
            Projects
          </Link>
        </div>
      </nav>
      <main className="flex-grow mt-28 md:mt-24">{children}</main>
    </div>
  );
};

export default Layout;
