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
  nombre: string;
  imagen: string;
}

interface Progress {
  _id: string;
  simulatorId: Simulator;
  score: number;
  totalScore: number;
  time: number;
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
