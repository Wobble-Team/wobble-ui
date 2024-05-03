// components/navigation/header.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-items md:sticky border-b-2 font-monsterrat w-full border-b-2 border-blue bg-gradient-to-r from-cyan-900 to-blue-900 p-2">
      <div className="flex justify-start items-center w-1/2">
        <p className="text-2xl font-bold text-white">WOBBLE</p>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <button className="p-2 bg-black text-white font-bold rounded hover:bg-slate-900 border">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
