import { create } from "zustand";

export type SimuladorCanjeado = {
  simuladorId: string;
  fecha: string;
  monedasPagadas: number;
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
  setUser: (user: Omit<UsuarioStore, "setUser">) => void;
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
}));
