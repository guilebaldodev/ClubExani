'use client';
import Header from '../ui/landingPage/LandingHeader';
import styles from './simuladores.module.css';
import { useState } from 'react';

const data = [
  {
    examen: "EXANI III",
    tipo: "CENEVAL",
    simulacros: [
      { id: "exani1", titulo: "Simulador EXANI III #1", monedas: 35, dificultad: "Fácil", imagen: "/simuladores/exani-iii-1.png" },
      { id: "exani2", titulo: "Simulador EXANI III #2", monedas: 40, dificultad: "Intermedio", imagen: "/simuladores/exani-iii-2.png" },
      { id: "exani3", titulo: "Simulador EXANI III #3", monedas: 45, dificultad: "Avanzado", imagen: "/simuladores/exani-iii-3.png" },
    ]
  },
  {
    examen: "EXADIEMS",
    tipo: "UAGro",
    simulacros: [
      { id: "diems1", titulo: "Simulador EXADIEMS #1", monedas: 35, dificultad: "Fácil", imagen: "/img/simuladores/diems1.png" },
      { id: "diems2", titulo: "Simulador EXADIEMS #2", monedas: 38, dificultad: "Intermedio", imagen: "/img/simuladores/diems2.png" },
      { id: "diems3", titulo: "Simulador EXADIEMS #3", monedas: 42, dificultad: "Avanzado", imagen: "/img/simuladores/diems3.png" },
    ]
  },
  {
    examen: "EXADIES",
    tipo: "UAGro",
    simulacros: [
      { id: "dies1", titulo: "Simulador EXADIES #1", monedas: 36, dificultad: "Fácil", imagen: "/img/simuladores/dies1.png" },
      { id: "dies2", titulo: "Simulador EXADIES #2", monedas: 39, dificultad: "Intermedio", imagen: "/img/simuladores/dies2.png" },
      { id: "dies3", titulo: "Simulador EXADIES #3", monedas: 44, dificultad: "Avanzado", imagen: "/img/simuladores/dies3.png" },
    ]
  }
];

export default function SimuladoresPage() {
  const [categoria, setCategoria] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");

  const filtrado = data
    .filter(examen => categoria === "Todos" || examen.examen === categoria)
    .filter(examen => tipo === "Todos" || examen.tipo === tipo);

  return (
    <>
      <Header></Header>
    <div className={styles["catalogo-container"]}>
      <h2 className={styles["catalogo-title"]}>Todos los simuladores</h2>

      <div className={styles["filtros-row"]}>
        <div className={styles["filtros-izquierda"]}>
          <select onChange={(e) => setCategoria(e.target.value)}>
            <option value="Todos">Todos los exámenes</option>
            <option value="EXANI III">EXANI III</option>
            <option value="EXADIEMS">EXADIEMS</option>
            <option value="EXADIES">EXADIES</option>
          </select>

          <select onChange={(e) => setTipo(e.target.value)}>
            <option value="Todos">Todos los tipos</option>
            <option value="CENEVAL">CENEVAL</option>
            <option value="UAGro">UAGro</option>
          </select>

          <select>
            <option value="Todos">Todas las dificultades</option>
            <option value="Fácil">Fácil</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div className={styles["filtros-derecha"]}>
          <select>
            <option value="relevancia">Ordenar por: Relevancia</option>
            <option value="precio">Menor precio</option>
          </select>
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
                  <p>{grupo.tipo}</p>
                  <p><strong>{sim.monedas}</strong> monedas</p>
                  <p className={styles["dificultad"]}>{sim.dificultad}</p>
                  </div>
                  <button>Aplicar</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
    </>

  );
}
