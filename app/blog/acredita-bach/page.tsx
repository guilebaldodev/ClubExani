import type { Metadata } from "next";
import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import { simulators } from "@/consts/simulators";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simuladores Acredita-Bach 2026 NEM | Simulandum",
  description:
    "Simuladores Acredita-Bach 2026 con enfoque NEM: estructura del examen, fechas, costos y práctica por áreas temáticas.",
  alternates: {
    canonical: "https://www.simulandum.com/blog/acredita-bach",
  },
  openGraph: {
    title: "Simuladores Acredita-Bach 2026 NEM | Simulandum",
    description:
      "Practica para el Acredita-Bach 2026 con simuladores basados en la nueva versión NEM.",
    url: "https://www.simulandum.com/blog/acredita-bach",
    images: ["/og.png"],
  },
};

const Page = () => {
  const acredita = simulators[1];

  return (
    <>
      <Header />

      <div className={`${styles["blog-header"]} ${styles["blog-header3"]}`}>
        <div className={styles["overlay"]}>
          <div className={styles["blog-header-texts"]}>
            <h3>EXAMEN CENEVAL</h3>
            <h2>
              Simuladores Acredita-Bach 2026 con enfoque NEM para acreditar el
              bachillerato
            </h2>

            <div className={styles["brands"]}>
              <div className={styles["brand"]}>
                <Image
                  width={50}
                  height={50}
                  src="/layout/logo.png"
                  alt="Simulandum logo"
                />
                <span>Simulandum</span>
              </div>

              <div className={styles["brand"]}>
                <Image
                  width={40}
                  height={40}
                  src="/layout/ceneval.png"
                  alt="Ceneval logo"
                />
                <span>Acredita-Bach</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["grid-simuladores"]}>
        {acredita.simulacros.map((sim) => (
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

            <Link
              href={
                sim.tipo === "paquete"
                  ? `/plataforma/paquetes/${sim.id}`
                  : `/plataforma/simuladores/${sim.id}`
              }
              className={
                sim.estado === "listo" ? styles["boton"] : styles["grey"]
              }
            >
              {sim.estado === "listo" ? "Detalles" : "Próximamente..."}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles["blog-container"]}>
        <h2>
          ¿Qué es el Acredita-Bach 2026 y por qué cambió con el enfoque NEM?
        </h2>

        <p>
          El <strong>Acredita-Bach</strong> es el examen del{" "}
          <strong>Ceneval</strong> dirigido a personas que desean acreditar sus
          conocimientos equivalentes al bachillerato. En su versión 2026, el
          examen se presenta con un enfoque relacionado con la{" "}
          <strong>Nueva Escuela Mexicana (NEM)</strong>, por lo que la
          preparación debe considerar áreas temáticas, comprensión de problemas,
          análisis de situaciones y aplicación de conocimientos.
        </p>

        <p>
          Practicar con un <strong>simulador Acredita-Bach 2026</strong> te
          permite conocer el tipo de preguntas, medir tu desempeño y prepararte
          antes de presentar el examen real.
        </p>

        <h2>¿Qué áreas evalúa el Acredita-Bach?</h2>

        <p>
          El examen se organiza por <strong>áreas temáticas</strong>. Cada una
          evalúa conocimientos y habilidades necesarias para acreditar el nivel
          medio superior.
        </p>

 
 <ul>
  <li>Pensamiento matemático</li>
  <li>Cultura digital</li>
  <li>Conciencia histórica</li>
  <li>Humanidades</li>
  <li>Ciencias naturales, experimentales y tecnología</li>
  <li>Lengua y comunicación (Español e Inglés)</li>
  <li>Ciencias sociales</li>
</ul>

        <h2>Calendario Acredita-Bach 2026</h2>

        <p>
          Para 2026, el Ceneval contempla cinco periodos de aplicación del{" "}
          <strong>Examen de Área Temática</strong>:
        </p>

        <ul>
          <li>
            <strong>Periodo 2026-1 Nacional:</strong> registro del 12 de enero
            al 16 de febrero; aplicación el 22 de marzo; resultados el 21 de
            abril.
          </li>
          <li>
            <strong>Periodo 2026-2 CDMX:</strong> registro del 23 de febrero al
            23 de marzo; aplicación el 03 de mayo; resultados el 29 de mayo.
          </li>
          <li>
            <strong>Periodo 2026-3 Nacional:</strong> registro del 13 de abril
            al 18 de mayo; aplicación el 05 de julio; resultados el 31 de julio.
          </li>
          <li>
            <strong>Periodo 2026-4 CDMX:</strong> registro del 15 de junio al 20
            de julio; aplicación el 6 de septiembre; resultados el 06 de
            octubre.
          </li>
          <li>
            <strong>Periodo 2026-5 Nacional:</strong> registro del 24 de agosto
            al 28 de septiembre; aplicación el 22 de noviembre; resultados el 18
            de diciembre.
          </li>
        </ul>

        <h2>Precio del Acredita-Bach 2026</h2>

        <p>
          El costo del <strong>Examen de Área Temática</strong> en 2026 es de{" "}
          <strong>$1,565.00 MXN</strong>. Este costo aplica para áreas como
          Matemáticas, Humanidades, Ciencias Sociales, Ciencias Experimentales y
          Comunicación.
        </p>

        <p>
          El pago debe realizarse dentro del periodo indicado en el formato de
          pago. Puede hacerse en ventanilla, transferencia, tarjeta de crédito o
          débito. No se aceptan pagos en OXXO ni otros sistemas de pago.
        </p>

        <h2>Simulador Acredita-Bach 2026 de Simulandum</h2>

        <p>
          En <strong>Simulandum</strong> puedes practicar con simuladores del{" "}
          <strong>Acredita-Bach 2026</strong> diseñados para ayudarte a estudiar
          con preguntas tipo examen, retroalimentación y resultados automáticos.
        </p>

        <ul>
          <li>Practica por áreas temáticas.</li>
          <li>Entrena con preguntas alineadas al enfoque NEM.</li>
          <li>Revisa tus errores y fortalece tus áreas débiles.</li>
          <li>Usa simuladores completos o específicos según tu avance.</li>
        </ul>

        <h2>¿Por qué usar un simulador del Acredita-Bach?</h2>

        <p>
          Porque no basta con estudiar teoría. Necesitas practicar con preguntas
          parecidas a las del examen, acostumbrarte al formato y medir tu nivel
          antes de la aplicación oficial.
        </p>

        <ul>
          <li>
            <strong>Conoces la estructura:</strong> entiendes cómo vienen las
            preguntas.
          </li>
          <li>
            <strong>Detectas debilidades:</strong> sabes qué áreas debes
            reforzar.
          </li>
          <li>
            <strong>Practicas con retroalimentación:</strong> aprendes de tus
            errores.
          </li>
          <li>
            <strong>Te preparas con enfoque NEM:</strong> entrenas con una
            versión actualizada del examen.
          </li>
        </ul>

        <h2>Empieza a practicar</h2>

        <p>
          Si vas a presentar el Acredita-Bach 2026, lo mejor es practicar antes
          con simuladores enfocados en la nueva versión NEM.{" "}
          <Link href="/simuladores" className={styles["link"]}>
            Aquí puedes ver todos los simuladores disponibles en Simulandum
          </Link>
          .
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Page;