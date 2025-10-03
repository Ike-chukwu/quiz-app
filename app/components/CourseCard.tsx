import React, { ActionDispatch } from "react";
import { Action, QUIZACTON } from "../utils/types";


type Props = {
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  courseName: string;
  courseImg: string;
};

const CourseCard = ({ dispatch, courseImg, courseName }: Props) => {
  return (
    <div
      onClick={() =>
        dispatch({
          type: Action.READY,
          payload: { status: Action.READY, selectedCourse: courseName },
        })
      }
      className="w-full cursor-pointer transition-all ease-in duration-75 border-transparent border-1 hover:border-1 hover:border-white lg:w-[400px] px-3 py-3 md:py-5 bg-[#3B4D66] rounded-[20px] flex items-center gap-3 md:gap-6"
    >
      <img src={courseImg} alt="" />
      <p className="text-[20px] md:text-[24px] font-bold text-white ">
        {courseName}
      </p>
    </div>
  );
};

export default CourseCard;
