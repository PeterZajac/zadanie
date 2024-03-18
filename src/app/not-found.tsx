"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Link from "next/link";

const NotFound = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex-col justify-center grid place-items-center mt-40">
      <h1>NotFound</h1>
      <Confetti width={width} height={height} numberOfPieces={100} />
      <Link className="hover:text-violet-600" href="/">
        Return back for Searching a fruit
      </Link>
    </div>
  );
};

export default NotFound;
