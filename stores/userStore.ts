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
  setUser: (
    user: Omit<
      UsuarioStore,
      | "setUser"
      | "addSimuladorCanjeado"
      | "updateMonedas"
      | "updateUsoJusto"
      | "resetUser"
    >
  ) => void;
  addSimuladorCanjeado: (sim: SimuladorCanjeado) => void;
  updateMonedas: (monedas: number) => void;
  updateUsoJusto: (id: string, nuevoUso: number) => void;
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
  set((state) => {
    const index = state.simuladoresCanjeados.findIndex(
      (s) => s.simuladorId._id === sim.simuladorId._id
    );

    if (index !== -1) {
      const updated = [...state.simuladoresCanjeados];
      updated[index] = { ...updated[index], uso_justo: sim.uso_justo, fecha: sim.fecha };
      return { ...state, simuladoresCanjeados: updated };
    } else {
      return { ...state, simuladoresCanjeados: [...state.simuladoresCanjeados, sim] };
    }
  }),


  updateMonedas: (monedas) => set(() => ({ monedas })),
  updateUsoJusto: (id, nuevoUso) =>
    set((state) => ({
      simuladoresCanjeados: state.simuladoresCanjeados.map((s) =>
        s.simuladorId._id === id ? { ...s, uso_justo: nuevoUso } : s
      ),
    })),
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
