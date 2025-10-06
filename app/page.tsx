"use client";
import StartPage from "./components/StartPage";
import Question from "./components/Question";
import { useEffect, useReducer } from "react";
import Result from "./components/Result";
import { reducer } from "./utils/reducer";
import { quizInit } from "./utils/constants";
import NightModeToggler from "./components/Layout/NightModeToggler";
import { Action } from "./utils/types";

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
      timeRemaining,
      highScore,
      mode,
    },
    dispatch,
  ] = useReducer(reducer, quizInit);
  const modeFromLS = localStorage.getItem("mode");
  useEffect(() => {
    if (!modeFromLS) {
      localStorage.setItem("mode", mode ?? "light");
    } else {
      dispatch({ type: Action.MODE, payload: { mode: modeFromLS } });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode ?? "light");
    document.body.style.background = mode == "dark" ? "#313E51" : "white";
  }, [mode]);

  return (
    <div
      className={`h-full ${
        mode == "dark"
          ? "dark-mobile dark-tablet dark-desktop "
          : "white-mobile white-tablet white-desktop "
      } `}
    >
      <div className="container w-full h-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={courseIcon} alt="" />
            <p>{selectedCourse}</p>
          </div>
          <NightModeToggler dispatch={dispatch} mode={mode} />
        </div>
        <div className="h-full flex items-center w-full">
          <div className="w-full">
            {status == "active" && (
              <Question
                answer={answer}
                index={currentIndex}
                questions={questions}
                dispatch={dispatch}
                selectedOption={selectedOption}
                error={error}
                timeRemaining={timeRemaining}
                selectedCourse={selectedCourse}
                points={points}
                highScore={highScore}
                mode={mode}
              />
            )}
            {status == "initialize" && (
              <StartPage dispatch={dispatch} mode={mode} />
            )}
            {status == "completed" && (
              <Result
                index={currentIndex}
                questions={questions}
                dispatch={dispatch}
                points={points}
                icon={courseIcon}
                selectedCourse={selectedCourse}
                mode={mode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
