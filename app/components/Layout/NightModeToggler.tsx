"use client";
import { Action, QUIZACTON } from "@/app/utils/types";
import React, { ActionDispatch } from "react";

type Props = {
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  mode?: string;
};

const NightModeToggler = ({ dispatch, mode }: Props) => {
  const toggleMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: Action.MODE, payload: { mode: "dark" } });
    } else {
      dispatch({ type: Action.MODE, payload: { mode: "light" } });
    }
  };

  return (
    <div className="flex items-center gap-4">
      {mode == "dark" ? (
        <img src="/icon-sun-light.svg" alt="" />
      ) : (
        <img src="/icon-sun-dark.svg" alt="" />
      )}
      <label className="switch">
        <input type="checkbox" checked={mode == "dark"} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
      {mode == "dark" ? (
        <img src="/icon-moon-light.svg" alt="" />
      ) : (
        <img src="/icon-moon-dark.svg" alt="" />
      )}
    </div>
  );
};

export default NightModeToggler;
