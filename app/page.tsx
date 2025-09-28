"use client";
import Image from "next/image";
import StartPage from "./components/StartPage";
import Question from "./components/Question";
import { quizQuestions } from "./data";
import { useReducer } from "react";
import Result from "./components/Result";

export enum Action {
  INITIALIZE = "Initialize",
  READY = "READY",
  SELECT_ANSWER = "SELECT_ANSWER",
  SUBMIT = "SUBMIT",
  NEXT_QUESTION = "NEXT_QUESTION",
  FINISHED = "FINISHED",
  UNANSWERED_QUESTION = "UNANSWERED_QUESTION",
}

export interface QUIZACTON {
  type: Action;
  payload?: {
    status?: string;
    selectedCourse?: string;
    selectedOption?: string;
    error?: boolean;
  };
}

interface Quiz {
  status: string;
  answer?: string | null;
  points: number;
  currentIndex: number;
  selectedCourse?: string;
  selectedOption?: string | null;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  courseIcon?: string;
  error: boolean;
}

const quizInit: Quiz = {
  status: "initialize",
  answer: null,
  points: 0,
  currentIndex: 0,
  selectedCourse: "",
  selectedOption: null,
  questions: [],
  courseIcon: "",
  error: false,
};

const reducer = (state: Quiz, action: QUIZACTON) => {
  switch (action.type) {
    case Action.READY:
      const selectedQuiz = quizQuestions.quizzes.find(
        (question) => question.title == action.payload?.selectedCourse
      );
      const courseIcon = selectedQuiz?.icon;
      return {
        ...state,
        status: "active",
        questions: selectedQuiz ? selectedQuiz.questions : [],
        courseIcon,
        selectedCourse: action.payload?.selectedCourse,
      };
    case Action.SELECT_ANSWER:
      return {
        ...state,
        selectedOption: action.payload?.selectedOption,
      };
    case Action.SUBMIT:
      const isAnswerCorrect =
        state.questions[state.currentIndex].answer == state.selectedOption;
      return {
        ...state,
        answer: state.questions[state.currentIndex].answer,
        point: isAnswerCorrect ? state.points++ : state.points,
        selectedOption: action.payload?.selectedOption,
        error: false,
      };
    case Action.NEXT_QUESTION:
      return {
        ...state,
        selectedOption: null,
        answer: null,
        currentIndex: state.currentIndex++,
      };
    case Action.FINISHED:
      return {
        ...state,
        selectedOption: null,
        answer: null,
        status: "completed",
      };
    case Action.UNANSWERED_QUESTION:
      return {
        ...state,
        error: true,
      };
    case Action.INITIALIZE:
      return quizInit;

    // return {
    //   ...state,
    //   status: "active",
    //   questions: selectedQuiz ? selectedQuiz.questions : [],
    // };

    default:
      return state;
  }
};

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
