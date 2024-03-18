"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const NotFound = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>NotFound</h1>
      <Confetti width={width} height={height} numberOfPieces={100} />
    </div>
  );
};

export default NotFound;
