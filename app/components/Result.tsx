"use client";
import React, { ActionDispatch, useEffect } from "react";
import { Action, QUIZACTON } from "../utils/types";

type Props = {
  index: number;
  answer?: string | null;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  points: number;
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  selectedOption?: string | null;
  selectedCourse?: string;
  icon?: string;
};

const Result = ({
  questions,
  dispatch,
  points,
  selectedCourse,
  icon,
}: Props) => {
  let highScoreHolder = localStorage.getItem("highScores");
  const highScoresObj = highScoreHolder && JSON.parse(highScoreHolder);
  const highScoreOfSelectedCourseInLS =
    selectedCourse && highScoresObj[selectedCourse];

  return (
    <div className="flex h-full flex-col gap-14 lg:flex-row w-full lg:justify-between">
      <div className="flex w-full flex-col lg:w-[45%] gap-6 md:gap-12">
        <h2 className="text-white text-[40px] text-base/10 md:text-[60px] md:text-base/16">
          Quiz completed <br />
          <span className="font-bold leading-none">You scored...</span>
        </h2>
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-[55%] lg:items-end">
        <div className="w-full rounded-[20px] h-[350px] lg:w-[85%] py-4 bg-[#3B4D66] flex flex-col justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={icon} alt="" />
            <p className="text-white text-[16px]">{selectedCourse}</p>
          </div>
          <p className="text-[80px] text-white">{points}</p>
          <p className="text-white text-[14px]">
            out of {`${questions.length}`}
          </p>
        </div>
        <div className="w-full lg:w-[85%] px-2  rounded-[20px] py-4 bg-[#3B4D66] flex flex-col justify-between items-center">
          {highScoreOfSelectedCourseInLS > points && (
            <p className="text-[16px] text-center text-white">
              For the {selectedCourse} course, the high score remains unbeaten
              at {highScoreOfSelectedCourseInLS}{" "}
              {`point${points > 1 ? "s" : ""} `}😤
            </p>
          )}

          {points == highScoreOfSelectedCourseInLS && (
            <p className="text-[16px] text-center text-white">
              Well done! 🏆
              <br />
              You’ve set a new high score of {points}{" "}
              {`point${points > 1 ? "s" : ""} `}
              for the {selectedCourse} course!
            </p>
          )}
        </div>
        <button
          onClick={() =>
            dispatch({
              type: Action.INITIALIZE,
            })
          }
          className="w-full lg:w-[85%] cursor-pointer px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default Result;
