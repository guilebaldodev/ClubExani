
export type Respuesta = {
  texto?: string;
  imagen?: string;
  esCorrecta: boolean;
  explicacion?: string;
};

export type Pregunta = {
  _id: string;
  contenidoHTML: string;
  origen:string;
  resumen:string;
  examen:string;
  respuestas: Respuesta[];
  simuladores: string[]; 
  createdAt?: string;
  updatedAt?: string;
};