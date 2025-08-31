"use client"

import { useRouter } from "next/navigation";
import styles from "./simulators.module.css"



const Page = () => {

    const router =useRouter()

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
    return ( <>
    
 <div className={styles["container"]}>
  <div className={styles["simulators-title"]}>
    <h2>Mis Simuladores</h2>
    <p>
      Aquí aparecerán los simuladores que hayas adquirido para practicar de forma
      realista y medir tu progreso en cada intento. 
      <br />
      Más abajo encontrarás todos los simuladores disponibles para comprar y
      seguir ampliando tu preparación.
    </p>
  </div>

  <div className={styles["simulators-grid"]}>
    {data[0].simulacros.map((sim) => (
      <div key={sim.id} className={styles["simulador-card"]}>
        <div>
          <img src={sim.imagen} alt={sim.titulo} />
          <h4>{sim.titulo}</h4>
          <p>
            <strong>{sim.preguntas}</strong> preguntas
          </p>
          <p>
            <strong>35</strong> minutos
          </p>
          <p>
            <strong>{sim.monedas}</strong> Intentos restantes
          </p>
        </div>
        <button
          onClick={() => {
            if (sim.estado !== "listo") return;
            router.push(`/plataforma/simuladores/${sim.id}`);
          }}

        >
          Empezar
        </button>
      </div>
    ))}
  </div>

  <div className={styles["groups"]}>
    <h2>Todos los simuladores</h2>

    {data.map((grupo) => (
      <section key={grupo.examen} className={styles["group-section"]}>
        <h3>{grupo.examen}</h3>
        <div
          className={`${styles["simulators-grid"]} ${styles["group"]}`}
        >
          {grupo.simulacros.map((sim) => (
            <div key={sim.id} className={styles["simulador-card"]}>
              <div>
                <img src={sim.imagen} alt={sim.titulo} />
                <h4>{sim.titulo}</h4>
                <p>
                  <strong>{sim.preguntas}</strong> preguntas
                </p>
                <p>
                  <strong>{sim.monedas}</strong> monedas
                </p>
              </div>
              <button
                onClick={() => {
                  if (sim.estado !== "listo") return;
                  router.push(`/simuladores/${sim.id}`);
                }}

          className={sim.estado === "listo" ? styles["button-blue"] : styles["grey"]}


              >
                {sim.estado === "listo" ? "Detalles" : "Próximamente..."}
              </button>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
</div>


    </> );
}
 
export default Page;