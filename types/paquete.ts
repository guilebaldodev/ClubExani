// types/paquete.ts

export type Paquete = {
  _id: string;

  titulo: string;
  descripcion: string;
  descripcion_corta: string;

  examen: string;

  precio: number;
  imagen: string;

  simuladores: string[]; // ids de Simulador

  totalPreguntas: number;

  activo: boolean;

  createdAt?: string;
  updatedAt?: string;
};