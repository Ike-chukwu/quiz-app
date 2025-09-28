import React, { ActionDispatch } from "react";
import { Action, QUIZACTON } from "../page";

type Props = {
  option: { letter: string; text: string };
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  selectedOption?: string | null;
  isAnswerCorrect?: boolean;
};

const alphabets = ["a", "b", "c", "d"];

const StyledAnswer = ({
  option,
  dispatch,
  selectedOption,
  isAnswerCorrect,
}: Props) => {
  console.log(isAnswerCorrect);

  return (
    <div
      onClick={() => {
        dispatch({
          type: Action.SELECT_ANSWER,
          payload: { selectedOption: option.text },
        });
      }}
      className={`w-full cursor-pointer relative lg:w-[85%] px-3 py-3 md:py-5 bg-[#3B4D66] rounded-[20px] flex items-center gap-3 md:gap-6 
  ${isAnswerCorrect ? "border border-green-500" : "border border-red-500"}`}
    >
      <div
        className={`w-[40px] capitalize text-[20px] px=2 h-[40px] rounded-md flex justify-center items-center ${
          isAnswerCorrect
            ? "bg-emerald-500 text-white"
            : "bg-red-400 text-white"
        }`}
      >
        {option.letter}
      </div>
      <p className="text-[14px] md:text-[20px] font-bold text-white ">
        {option.text}
      </p>
      {isAnswerCorrect ? (
        <img
          src="/icon-correct.svg"
          className="absolute right-4 top-[50%] translate-y-[-50%]"
          alt=""
        />
      ) : (
        <img
          src="/icon-error.svg"
          className="absolute right-4 top-[50%] translate-y-[-50%]"
          alt=""
        />
      )}
    </div>
  );
};

export default StyledAnswer;
