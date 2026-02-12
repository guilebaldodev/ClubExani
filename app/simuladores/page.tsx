import type { Metadata } from "next";
import SimuladoresClient from "./SimuladorClient";

export const metadata: Metadata = {
  title: "Simuladores | Simulandum",
  description:
    "Explora todos los simuladores de Simulandum: EXANI-III, EGEL, ACREDITA-BACH y más. Filtra por examen y empieza a practicar.",
  alternates: {
    canonical: "https://www.simulandum.com/simuladores",
  },
  openGraph: {
    title: "Simuladores | Simulandum",
    description:
      "Explora todos los simuladores: EXANI-III, EGEL, ACREDITA-BACH y más. Filtra por examen y empieza a practicar.",
    url: "https://www.simulandum.com/simuladores",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <SimuladoresClient />;
}
