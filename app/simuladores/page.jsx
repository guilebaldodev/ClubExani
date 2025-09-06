'use client';
import Footer from '../ui/landingPage/Footer';
import Header from '../ui/landingPage/LandingHeader';
import styles from './simuladores.module.css';
import Select from 'react-select';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {simulators} from "../../consts/simulators"

const examenOptions = [
  { value: "Todos", label: "Todos los exámenes" },
  { value: "EXANI-III", label: "EXANI III" },
  { value: "ACREDITA-BACH", label: "ACREDITA-BACH" },
  { value: "EGEL", label: "EGEL" },
];

export default function SimuladoresPage() {
  const [categoria, setCategoria] = useState("Todos");

  const filtrado = simulators.filter(examen =>
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
