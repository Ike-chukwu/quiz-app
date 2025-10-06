import React, { ActionDispatch } from "react";
import CourseCard from "./CourseCard";
import { QUIZACTON } from "../utils/types";
import { courseTitles } from "../utils/constants";

type Props = {
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  mode?: string;
};

const StartPage = ({ dispatch, mode }: Props) => {
  return (
    <div className="flex flex-col gap-14 lg:flex-row w-full  lg:justify-between">
      <div className="flex w-full flex-col lg:w-[45%] gap-6 md:gap-12">
        <h2 className=" text-[40px] text-base/10 md:text-[60px] md:text-base/16">
          Welcome to the <br />
          <span className="font-bold leading-none">frontend quiz!</span>
        </h2>
        <p
          className={`text-[16px] md:text-[20px] italic ${
            mode == "dark" ? "text-[#ABC1E1]" : "text-[#626C83]"
          } `}
        >
          Pick a subject to get started
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[55%] lg:items-end">
        {courseTitles.map((course) => (
          <CourseCard
            key={course.title}
            dispatch={dispatch}
            courseName={course.title}
            courseImg={course.icon}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
};

export default StartPage;
