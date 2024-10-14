import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'], // Puedes especificar los idiomas que necesitas, como 'latin'.
  weight: ['300',"500","600",'800','400', '700'], // Añade los pesos que vas a utilizar.
  style: ['normal', 'italic'], // Si necesitas estilos como 'normal' o 'italic'.
});