import React, { ActionDispatch } from "react";
import { Action, QUIZACTON } from "../utils/types";

type Props = {
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  courseName: string;
  courseImg: string;
  mode?: string;
};

const CourseCard = ({ dispatch, courseImg, courseName, mode }: Props) => {
  return (
    <div
      onClick={() =>
        dispatch({
          type: Action.READY,
          payload: { status: Action.READY, selectedCourse: courseName },
        })
      }
      className={`w-full cursor-pointer transition-all ease-in duration-75 hover:border-1 border-transparent border-1 lg:w-[400px] px-3 py-3 md:py-5 rounded-[20px] flex items-center gap-3 md:gap-6 ${
        mode == "dark"
          ? "hover:border-white bg-[#3B4D66] text-white"
          : "bg-[#FFFFFF] hover:border-[#313E51] text-[#313E51] shadow-md"
      } `}
    >
      <img src={courseImg} alt="" />
      <p className="text-[20px] md:text-[24px] font-bold ">{courseName}</p>
    </div>
  );
};

export default CourseCard;
