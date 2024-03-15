"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    name: "SEARCH",
    href: "/",
  },
  {
    name: "LIST",
    href: "/list",
  },
  {
    name: "DETAIL",
    href: "/detail",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <nav className="bg-[#0a0810] flex flex-row justify-center items-center p-4 gap-8">
      {NavLinks.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            <h1
              className={
                isActive(link.href)
                  ? "text-white"
                  : "text-slate-500 hover:text-whit"
              }
            >
              {link.name}
            </h1>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
