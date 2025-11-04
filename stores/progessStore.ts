import { create } from "zustand";

interface DashboardStats {
  totalSimulations: number;
  totalScore: number;
  totalPossible: number;
  totalTime: number;
  average: number;
}

interface Simulator {
  _id: string;
  titulo: string;
  imagen: string;
}


// questionId
// : 
// "68c431148e5391db56f8d754"
// selectedAnswer
// : 
// 0
// wasCorrect
// : 
// true
// _id
// : 
// "690a12235a43dc493414f752"


interface singleProgress{
  questionId: string;
  selectedAnswer: number;
  wasCorrect: boolean;
  _id: string

}

interface Progress {
  _id: string;
  simulatorId: Simulator;
  score: number;
  totalScore: number;
  time: number;
  createdAt: string;
  solvedQuestions: singleProgress[]
}

interface DashboardState {
  stats: DashboardStats | null;
  lastProgress: Progress[];
  setDashboardData: (data: Partial<DashboardState>) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: null,
  lastProgress: [],
  setDashboardData: (data) => set((state) => ({ ...state, ...data })),
}));
