import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'], // Puedes especificar los idiomas que necesitas, como 'latin'.
  weight: ["500","600",'800','400', '700'], // Añade los pesos que vas a utilizar.
  style: ['normal', 'italic'], // Si necesitas estilos como 'normal' o 'italic'.
  display: 'swap', // Esto asegura que la fuente se cargue de manera óptima.
});