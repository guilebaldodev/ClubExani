// types/simulador.ts

export type SelectOption = {
  value: string;
  label: string;
};

export type Simulador = {
  _id: string;
  titulo: string;
  descripcion: string;
  descripcion_corta: string;
  tipo: string;
  dificultad: string;
  contador: number;
  uso_justo:number;
  tiempo: string;
  precio: number;
  imagen:string;
  totalPreguntas: number;
  examen: string;
};
