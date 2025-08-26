'use client';

import Footer from '../ui/landingPage/Footer';
import Header from '../ui/landingPage/LandingHeader';
import styles from './simuladores.module.css';
import Select from 'react-select';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const data = [
  {
    examen: "EXANI-III",
    simulacros: [
      { id: "68520ae9bf6b4b066f90b51c", titulo: "EXANI-III Dianóstico", monedas: 0, preguntas: 15, estado: "listo", imagen: "/simuladores/exani-iii-diagnostico.png" },
      { id: "68520e65bf6b4b066f90b523", titulo: "Simulador EXANI-III #1", monedas: 35, preguntas: 120, estado: "listo", imagen: "/simuladores/exani-iii-1.png" },
      { id: "685212f7bf6b4b066f90b528", titulo: "Simulador EXANI-III #2", monedas: 40, preguntas: 120, estado: "listo", imagen: "/simuladores/exani-iii-2.png" },
      { id: "68521409bf6b4b066f90b52b", titulo: "Simulador EXANI-III #3", monedas: 45, preguntas: 120, estado: "listo", imagen: "/simuladores/exani-iii-3.png" },
    ]
  },
  {
    examen: "ACREDITA-BACH",
    simulacros: [
      { id: "diems1", titulo: "ACREDITA-BACH DIANÓSTICO", monedas: 0, preguntas: 200, estado: "en proceso", imagen: "/simuladores/acredita-bach-diagnostico.png" },
      { id: "diems2", titulo: "Simulador ACREDITA-BACH #1", monedas: 45, preguntas: 200, estado: "en proceso", imagen: "/simuladores/acredita-bach-1.png" },
      { id: "diems3", titulo: "Simulador ACREDITA-BACH #2", monedas: 45, preguntas: 200, estado: "en proceso", imagen: "/simuladores/acredita-bach-2.png" },
    ]
  },
  {
    examen: "EGEL",
    simulacros: [
      { id: "dies1", titulo: "EGEL MEDICINA #1", monedas: 50, preguntas: 210, estado: "en proceso", imagen: "/simuladores/egel-medicina-1.png" },
      { id: "dies2", titulo: "EGEL DERECHO #1", monedas: 50, preguntas: 210, estado: "en proceso", imagen: "/simuladores/egel-derecho-1.png" },
      { id: "dies3", titulo: "EGEL EGEL ADMINISTRACIÓN #1", monedas: 50, preguntas: 210, estado: "en proceso", imagen: "/simuladores/egel-administracion-1.png" },
    ]
  }
];

const examenOptions = [
  { value: "Todos", label: "Todos los exámenes" },
  { value: "EXANI-III", label: "EXANI III" },
  { value: "ACREDITA-BACH", label: "ACREDITA-BACH" },
  { value: "EGEL", label: "EGEL" },
];

export default function SimuladoresPage() {
  const [categoria, setCategoria] = useState("Todos");

  const filtrado = data.filter(examen =>
    categoria === "Todos" || examen.examen === categoria
  );

  const router= useRouter()

  return (
    <>
      <Header />
      <div className={styles["catalogo-container"]}>
        <h2 className={styles["catalogo-title"]}>Todos los simuladores</h2>

        <div className={styles["filtros-row"]}>
          <div className={styles["filtros-izquierda"]}>
            <Select
              isClearable
              placeholder="Filtrar por examen"
              options={examenOptions}
              defaultValue={examenOptions[0]}
              onChange={(option) => setCategoria(option?.value ?? "Todos")}
              className={styles["react-select"]}
            />
          </div>
        </div>

        <main className={styles["catalogo"]}>
          {filtrado.map(grupo => (
            <section key={grupo.examen} className={styles["grupo-examen"]}>
              <h3>{grupo.examen}</h3>
              <div className={styles["grid-simuladores"]}>
                {grupo.simulacros.map(sim => (
                  <div key={sim.id} className={styles["simulador-card"]}>
                    <div>
                      <img src={sim.imagen} alt={sim.titulo} />
                      <h4>{sim.titulo}</h4>
                      <p><strong>{sim.preguntas}</strong> preguntas</p>
                      <p><strong>{sim.monedas}</strong> monedas</p>
                    </div>
                    <button onClick={()=>{
                      if(sim.estado!=="listo") return;
                        router.push(`/simuladores/${sim.id}`)
                    }} className={sim.estado === "listo" ? styles["boton"] : styles["grey"]}>
                      {sim.estado === "listo" ? "Detalles" : "Próximamente..."}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
