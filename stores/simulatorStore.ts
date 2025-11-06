import { Simulador } from "@/types";
import { Pregunta } from "@/types/pregunta";
import { create } from "zustand";

interface SolvedQuestion {
  questionId: string;
  selectedAnswer: number;
  wasCorrect: boolean;
}

interface SimulatorState {
  simulator: Simulador | null;
  questions: Pregunta[];
  currentIndex: number;
  solvedQuestions: SolvedQuestion[];
  score: number;
  totalScore: number;
  timeLeft: number;
  totalTime: number;
  sound: boolean;
  explanation: boolean;
  setSimulator: (sim: Simulador, qs: Pregunta[]) => void;
  selectAnswer: (questionId: string, answerIndex: number, wasCorrect: boolean) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  normalizeSolvedQuestions: () => SolvedQuestion[];
  tick: () => void;
  formatTime: () => string;
  reset: () => void;
  toggleSound: () => void;
  toggleExplanation: () => void;
}

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
  simulator: null,
  questions: [],
  currentIndex: 0,
  solvedQuestions: [],
  score: 0,
  totalScore: 0,
  timeLeft: 0,
  totalTime: 0,
  sound: false,
  explanation: false,
  setSimulator: (sim, qs) =>
    set({
      simulator: sim,
      questions: qs,
      currentIndex: 0,
      solvedQuestions: [],
      score: 0,
      totalScore: qs.length,
      timeLeft:(Number(sim.tiempo) || 0) * 60,
      totalTime: (Number(sim.tiempo) || 0) * 60,
    }),

  selectAnswer: (questionId, answerIndex, wasCorrect) =>
    set((state) => {
      const existing = state.solvedQuestions.find((q) => q.questionId === questionId);

      let updatedSolved: SolvedQuestion[];
      if (existing) {
        updatedSolved = state.solvedQuestions.map((q) =>
          q.questionId === questionId ? { ...q, selectedAnswer: answerIndex, wasCorrect } : q
        );
      } else {
        updatedSolved = [
          ...state.solvedQuestions,
          { questionId, selectedAnswer: answerIndex, wasCorrect },
        ];
      }

      const score = updatedSolved.filter((q) => q.wasCorrect).length;

      return { solvedQuestions: updatedSolved, score };
    }),

  nextQuestion: () =>
    set((state) => {
      const { currentIndex, questions, solvedQuestions } = state;

      const nextUnansweredAhead = questions
        .slice(currentIndex + 1)
        .find((q) => !solvedQuestions.some((s) => s.questionId === q._id));

      if (nextUnansweredAhead) {
        const nextIndex = questions.findIndex((q) => q._id === nextUnansweredAhead._id);
        return { currentIndex: nextIndex };
      }

      const nextUnansweredBack = questions
        .slice(0, currentIndex)
        .find((q) => !solvedQuestions.some((s) => s.questionId === q._id));

      if (nextUnansweredBack) {
        const nextIndex = questions.findIndex((q) => q._id === nextUnansweredBack._id);
        return { currentIndex: nextIndex };
      }

      return {};
    }),

  prevQuestion: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),

  tick: () => {
    const { timeLeft } = get();
    if (timeLeft > 0) {
      set({ timeLeft: timeLeft - 1 });
    }
  },

normalizeSolvedQuestions: () => {
  const state = get();
  return state.questions.map((q) => {
    const solved = state.solvedQuestions.find((s) => s.questionId === q._id);

    if (solved) {
      return {
        ...solved,
        resumen:q.resumen,
        contenidoHTML:q.contenidoHTML,
        answers: q.respuestas
      };
    } else {
      return {
        questionId: q._id,
        selectedAnswer: -1,
        wasCorrect: false,
        resumen : q.resumen,
        contenidoHTML:q.contenidoHTML,
        answers: q.respuestas,
      };
    }
  });
},


  formatTime: () => {
    const { timeLeft } = get();
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
    } else {
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    }
  },

  toggleSound: () => set((state) => ({ sound: !state.sound })),
  toggleExplanation: () => set((state) => ({ explanation: !state.explanation })),

  reset: () =>
    set({
      simulator: null,
      questions: [],
      currentIndex: 0,
      solvedQuestions: [],
      score: 0,
      totalScore: 0,
      timeLeft: 0,
    }),
}));
