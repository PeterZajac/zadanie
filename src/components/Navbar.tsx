"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="bg-[#0a0810] flex flex-row items-center p-4">
      <div className="flex-grow flex flex-row justify-center gap-5">
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
      </div>
      <Link href="/favorites" className="flex items-right">
        {" "}
        {/* Maintain flex for icon alignment */}
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white hover:text-gray-200"
        />{" "}
        {/* Style the icon */}
      </Link>
    </nav>
  );
};

export default Navbar;
