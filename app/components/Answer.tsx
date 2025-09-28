import React, { ActionDispatch } from "react";
import { Action, QUIZACTON } from "../page";

type Props = {
  option: { letter: string; text: string };
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  selectedOption?: string | null;
};

const alphabets = ["a", "b", "c", "d"];

const Answer = ({ option, dispatch, selectedOption }: Props) => {
  return (
    <div
      onClick={() => {
        dispatch({
          type: Action.SELECT_ANSWER,
          payload: { selectedOption: option.text },
        });
      }}
      className={`w-full cursor-pointer lg:w-[85%] px-3 py-3 md:py-5 bg-[#3B4D66] rounded-[20px] flex items-center gap-3 md:gap-6 
  ${selectedOption === option.text ? "border border-white" : ""}`}
    >
      <div className="w-[40px] capitalize text-[20px] px=2 h-[40px] rounded-md flex text-black bg-white justify-center items-center">
        {option.letter}
      </div>
      <p className="text-[14px] md:text-[20px] font-bold text-white ">
        {option.text}
      </p>
    </div>
  );
};

export default Answer;
