export enum Action {
  INITIALIZE = "Initialize",
  READY = "READY",
  SELECT_ANSWER = "SELECT_ANSWER",
  SUBMIT = "SUBMIT",
  NEXT_QUESTION = "NEXT_QUESTION",
  FINISHED = "FINISHED",
  UNANSWERED_QUESTION = "UNANSWERED_QUESTION",
  TIME = "TIME",
  SET_HIGHSCORE = "SET_HIGHSCORE",
  UPDATE_HIGHSCORE = "UPDATE_HIGHSCORE",
  MODE = "MODE",
}

export interface QUIZACTON {
  type: Action;
  payload?: {
    status?: string;
    selectedCourse?: string;
    selectedOption?: string;
    error?: boolean;
    score?: number;
    mode?: string ;
  };
}

export interface Quiz {
  status: string;
  answer: string | null;
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
  timeRemaining?: number;
  highScore?: number;
  mode?: string;
}
