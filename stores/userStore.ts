import { Simulador } from "@/types";
import { create } from "zustand";

export type SimuladorCanjeado = {
  fecha: string;
  monedasPagadas: number;
  simuladorId: Simulador;
  uso_justo: number;
};

export type UsuarioStore = {
  clerkId: string;
  email: string;
  nombre: string;
  estado: string;
  edad: number;
  rol: string;
  monedas: number;
  simuladoresCanjeados: SimuladorCanjeado[];
  setUser: (user: Omit<UsuarioStore, "setUser" | "addSimuladorCanjeado" | "updateMonedas" | "resetUser">) => void;
  addSimuladorCanjeado: (sim: SimuladorCanjeado) => void;
  updateMonedas: (monedas: number) => void;
    resetUser: () => void;

};

export const useUserStore = create<UsuarioStore>((set) => ({
  clerkId: "",
  email: "",
  nombre: "",
  estado: "",
  edad: 0,
  rol: "",
  monedas: 0,
  simuladoresCanjeados: [],
  setUser: (user) => set(user),
  addSimuladorCanjeado: (sim) =>
    set((state) => ({
      simuladoresCanjeados: [...state.simuladoresCanjeados, sim],
    })),
  updateMonedas: (monedas) => set(() => ({ monedas })),
  resetUser: () =>
    set({
      clerkId: "",
      email: "",
      nombre: "",
      estado: "",
      edad: 0,
      rol: "",
      monedas: 0,
      simuladoresCanjeados: [],
    }),
}));
