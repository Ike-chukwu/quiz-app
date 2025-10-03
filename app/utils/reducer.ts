import { quizQuestions } from "../data";
import { quizInit } from "./constants";
import { Action, Quiz, QUIZACTON } from "./types";

export const reducer = (state: Quiz, action: QUIZACTON) => {
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

    default:
      return state;
  }
};
