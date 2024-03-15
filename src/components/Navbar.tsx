import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0a0810] flex flex-row justify-center items-center p-4 gap-8">
      <Link href="#">
        <h1 className="text-slate-500 hover:text-white">Search</h1>
      </Link>
      <Link href="/list">
        <h1 className="text-slate-500 hover:text-white">List</h1>
      </Link>
      <Link href="/detail">
        <h1 className="text-slate-500 hover:text-white">Detail</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
