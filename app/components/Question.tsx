"use client";
import React, { ActionDispatch, useEffect } from "react";
import Answer from "./Answer";
import StyledAnswer from "./StyledAnswer";
import { Action, QUIZACTON } from "../utils/types";
import Timer from "./Timer";

type Props = {
  index: number;
  answer?: string | null;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  dispatch: ActionDispatch<[action: QUIZACTON]>;
  selectedOption?: string | null;
  error: boolean;
  timeRemaining?: number;
};

const letters = ["a", "b", "c", "d"];

const Question = ({
  index,
  answer,
  questions,
  dispatch,
  selectedOption,
  error,
  timeRemaining,
}: Props) => {
  const currentQuestionObj = questions[index];
  const currentQuestion = currentQuestionObj?.question;
  const options = currentQuestionObj?.options;
  const refactoredOptions = options?.map((option, index) => {
    return {
      letter: letters[index],
      text: option,
    };
  });
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: Action.TIME });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex pt-20 pb-6 lg:pt-0 lg:pb-0 h-full flex-col gap-14 lg:flex-row w-full lg:justify-between">
      <div className="flex flex-col lg:gap-36 lg:w-[40%] relative">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between items-center lg:block">
            <p className="text-[16px] text-[#ABC1E1] italic">
              Question {index + 1} of {questions.length}
            </p>
            <Timer className="block lg:hidden" timeRemaining={timeRemaining} />
          </div>
          <p className="text-white text-[20px] text-base/10">
            {currentQuestion}
          </p>
        </div>
        <progress
          className="w-full rounded-full"
          value={answer ? index + 1 : index}
          max={questions.length}
        ></progress>
        <Timer
          className="hidden lg:block md:absolute bottom-2"
          timeRemaining={timeRemaining}
        />
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-[55%] lg:items-end">
        {typeof answer == "string"
          ? refactoredOptions?.map((option) => (
              <StyledAnswer
                selectedOption={selectedOption}
                option={option}
                dispatch={dispatch}
                key={option.letter}
                isAnswerCorrect={option.text == currentQuestionObj.answer}
              />
            ))
          : refactoredOptions?.map((option) => (
              <Answer
                selectedOption={selectedOption}
                option={option}
                dispatch={dispatch}
                key={option.letter}
              />
            ))}

        {!answer && (
          <button
            onClick={() => {
              if (!selectedOption) {
                dispatch({
                  type: Action.UNANSWERED_QUESTION,
                  payload: { error: true },
                });
                return;
              }
              dispatch({ type: Action.SUBMIT });
            }}
            className="w-full lg:w-[85%] cursor-pointer px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
          >
            submit
          </button>
        )}
        {answer && index !== questions.length - 1 && (
          <button
            onClick={() =>
              dispatch({
                type: Action.NEXT_QUESTION,
              })
            }
            className="w-full lg:w-[85%] cursor-pointer px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
          >
            next
          </button>
        )}
        {answer && index == questions.length - 1 && (
          <button
            onClick={() =>
              dispatch({
                type: Action.FINISHED,
              })
            }
            className="w-full lg:w-[85%] cursor-pointer px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
          >
            see results
          </button>
        )}
        {error && (
          <div className="flex w-full lg:w-[85%] gap-2 self-center items-center justify-center ">
            <img src="/icon-error.svg" alt="" />
            <p className="text-[#EE5454]">Please select an answer</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
