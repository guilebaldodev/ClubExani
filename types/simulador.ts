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
  examen: string;
  imagen:string;
  tipo: string;
  tiempo: string;
  precio: number;
  totalPreguntas: number;
  contador: number;
  uso_justo:number;
};
