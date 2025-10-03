import { quizQuestions } from "../data";
import { Quiz } from "./types";

export const courseTitles = quizQuestions.quizzes.map((quiz) => {
  return { title: quiz.title, icon: quiz.icon };
});

export const quizInit: Quiz = {
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