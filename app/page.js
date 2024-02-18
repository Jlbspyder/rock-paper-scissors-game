"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsPentagon } from "react-icons/bs";

const page = () => {
  return (
    <div className="login">
      <div className="log header">
        <div className="logo">
          <img src="images/logo-bonus.svg" alt="logo" className="title" />
        </div>
        <div className="result">
          <BsPentagon className="pentagon" />
        </div>
      </div>
      <Link href="/homepage">
        <div className="play">START GAME</div>
      </Link>
    </div>
  );
};

export default page;
