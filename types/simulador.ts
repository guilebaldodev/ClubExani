// types/simulador.ts

export type SelectOption = {
  value: string;
  label: string;
};

export type Simulador = {
  _id: string;
  titulo: string;
  descripcion: string;
  examen: string;
  tipo: string;
  precio: number;
  totalPreguntas: number;
  contador: number;
};
