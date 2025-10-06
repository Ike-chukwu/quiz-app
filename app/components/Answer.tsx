import React, { ActionDispatch } from "react";
import { Action, QUIZACTON } from "../utils/types";

type Props = {
  option: { letter: string; text: string };
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  selectedOption?: string | null;
  mode?: string;
};

const alphabets = ["a", "b", "c", "d"];

const Answer = ({ option, dispatch, selectedOption, mode }: Props) => {
  return (
    <div
      onClick={() => {
        dispatch({
          type: Action.SELECT_ANSWER,
          payload: { selectedOption: option.text },
        });
      }}
      className={`w-full cursor-pointer lg:w-[85%] px-3 py-3 md:py-5 
  border-1 rounded-[20px] flex items-center gap-3 md:gap-6 
  ${
    mode === "dark"
      ? "text-white hover:border-white bg-[#3B4D66]"
      : "bg-white text-[#313E51] hover:border-[#313E51] shadow-md"
  } 
  ${
    selectedOption === option.text
      ? mode === "dark"
        ? "border-white"
        : "border-[#313E51]"
      : "border-transparent"
  }`}
    >
      <div
        className={`w-[40px] capitalize text-[20px] px=2 h-[40px] rounded-md flex justify-center items-center ${
          mode == "dark" ? "bg-white text-black" : "text-[#626C7F] bg-[#F4F6FA]"
        }`}
      >
        {option.letter}
      </div>
      <p className="text-[14px] md:text-[20px] font-bold  ">{option.text}</p>
    </div>
  );
};

export default Answer;
