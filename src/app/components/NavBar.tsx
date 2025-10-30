"use client";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!currentTime) return null;

  return (
    <nav className="h-16 bg-[#0C2B4E] flex justify-between text-[#F4F4F4] items-center px-4">
      <h1 className="text-lg font-bold">Savvy tech front-end task</h1>
      <div className="text-sm">
        <span>{currentTime.toLocaleDateString()}</span>{" "}
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>
    </nav>
  );
};

export default NavBar;
