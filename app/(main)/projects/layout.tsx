import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems2 } from "@/data";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <FloatingNav
        navItems={navItems2}
        animated={false}
        className=" opacity-50 bg-black-100"
      />
      {children}
    </div>
  );
};

export default Layout;
