"use client";
import React, { ActionDispatch } from "react";
import Answer from "./Answer";
import { log } from "console";
import { Action, QUIZACTON } from "../page";
import StyledAnswer from "./StyledAnswer";

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
};

const letters = ["a", "b", "c", "d"];

const Question = ({
  index,
  answer,
  questions,
  dispatch,
  selectedOption,
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

  console.log(index);
  console.log(questions.length);

  return (
    <div className="flex h-full flex-col gap-14 lg:flex-row w-full lg:justify-between">
      <div className="flex flex-col lg:gap-36 lg:w-[40%]">
        <div className="flex flex-col gap-4">
          <p className="text-[16px] text-[#ABC1E1] italic">
            Question {index + 1} of {questions.length}
          </p>
          <p className="text-white text-[20px] text-base/10">
            {currentQuestion}
          </p>
        </div>
        <progress
          className="w-full rounded-full"
          value={answer ? index + 1 : index}
          max={questions.length}
        ></progress>
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

        {/* {courseTitles.map((course) => (
          <CourseCard courseName={course.title} courseImg={course.source} />
        ))} */}

        {!answer && (
          <button
            onClick={() => dispatch({ type: Action.SUBMIT })}
            className="w-full lg:w-[85%] px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
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
            className="w-full lg:w-[85%] px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
          >
            next
          </button>
        )}
        {!answer && index == questions.length - 1 && (
          <button
            onClick={() =>
              dispatch({
                type: Action.SUBMIT,
              })
            }
            className="w-full lg:w-[85%] px-3 py-3 md:py-5 bg-[#a52bf1] rounded-[20px] text-white text-center text-[20px] capitalize"
          >
            see results
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
