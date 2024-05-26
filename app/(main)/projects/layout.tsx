import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems2 } from "@/data";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <FloatingNav navItems={navItems2} animated={false} className="w-full" />
      <main className="flex-grow mt-28 md:mt-24">{children}</main>
    </div>
  );
};

export default Layout;
