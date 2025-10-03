"use client";
import StartPage from "./components/StartPage";
import Question from "./components/Question";
import { useReducer } from "react";
import Result from "./components/Result";
import { reducer } from "./utils/reducer";
import { quizInit } from "./utils/constants";


export default function Home() {
  const [
    {
      questions,
      selectedOption,
      status,
      answer,
      currentIndex,
      selectedCourse,
      points,
      courseIcon,
      error,
    },
    dispatch,
  ] = useReducer(reducer, quizInit);

  return (
    <div className="w-full">
      {status == "active" && (
        <Question
          answer={answer}
          index={currentIndex}
          questions={questions}
          dispatch={dispatch}
          selectedOption={selectedOption}
          error={error}
        />
      )}
      {status == "initialize" && <StartPage dispatch={dispatch} />}
      {status == "completed" && (
        <Result
          index={currentIndex}
          questions={questions}
          dispatch={dispatch}
          points={points}
          icon={courseIcon}
          selectedCourse={selectedCourse}
        />
      )}
    </div>
  );
}
