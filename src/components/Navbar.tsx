"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
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
    isDisabled: true,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (href: string) => {
    if (href === "/detail") return pathname.includes("/detail");
    return pathname === href;
  };

  return (
    <nav className="bg-[#0a0810] flex flex-row items-center p-4">
      <div className="flex-grow flex flex-row justify-center gap-5">
        {navLinks.map((link) => {
          return (
            <Link
              href={link.isDisabled ? "#" : link.href}
              style={{ cursor: link.isDisabled ? "not-allowed" : undefined }}
              key={link.name}
            >
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
        <FontAwesomeIcon
          icon={faHeart}
          className={
            pathname === "/favorites"
              ? "text-violet-600"
              : "text-white hover:text-violet-600"
          }
        />
      </Link>
    </nav>
  );
};

export default Navbar;
