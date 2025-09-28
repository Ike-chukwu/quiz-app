"use client";
import React, { useState } from "react";

const NightModeToggler = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className="w-full flex justify-end items-center gap-4">
      {dark ? (
        <img src="/icon-sun-dark.svg" alt="" />
      ) : (
        <img src="/icon-sun-light.svg" alt="" />
      )}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      {dark ? (
        <img src="/icon-moon-dark.svg" alt="" />
      ) : (
        <img src="/icon-moon-light.svg" alt="" />
      )}
    </div>
  );
};

export default NightModeToggler;
