import type { Metadata } from "next";
import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import { simulators } from "@/consts/simulators";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";
import SimulatorCarousel from "@/app/ui/blog/carrousel";

export const metadata: Metadata = {
  title: "ACREDITA-BACH NEM 2026-2027: Guía completa | Simulandum",

  description:
    "Conoce cómo es el ACREDITA-BACH NEM 2026-2027, sus áreas, estructura y cómo prepararte con simuladores.",

  alternates: {
    canonical:
      "https://www.simulandum.com/blog/acredita-bach-nem-2026-2027",
  },

  openGraph: {
    title:
      "ACREDITA-BACH NEM 2026-2027: Guía completa | Simulandum",

    description:
      "Conoce la estructura y áreas del ACREDITA-BACH NEM y practica con simuladores.",

    url:
      "https://www.simulandum.com/blog/acredita-bach-nem-2026-2027",

    images: ["/og.png"],
  },
};

const Page = () => {
  const acredita = simulators[1];

  /*
   * SIMULADORES GENERALES
   * Diagnóstico + simuladores completos divididos en Parte 1 y Parte 2.
   */
  const simuladoresGenerales = acredita.simulacros.filter((sim) => {
    const titulo = sim.titulo.toLowerCase();

    return (
      titulo.includes("diagnóstico") ||
      titulo.includes("diagnostico") ||
      titulo.includes("simulador #1") ||
      titulo.includes("simulador #2") ||
      titulo.includes("simulador #3")
    );
  });

  /*
   * SIMULADORES POR ÁREA
   * Aquí NO entran simuladores completos ni paquetes.
   */
  const simuladoresPorArea = acredita.simulacros.filter((sim) => {
    const titulo = sim.titulo.toLowerCase();

    return (
      titulo.includes("pensamiento matemático") ||
      titulo.includes("pensamiento matematico") ||
      titulo.includes("cultura digital") ||
      titulo.includes("conciencia histórica") ||
      titulo.includes("conciencia historica") ||
      titulo.includes("humanidades") ||
      titulo.includes("ciencias naturales") ||
      titulo.includes("experimentales") ||
      titulo.includes("lengua y comunicación") ||
      titulo.includes("lengua y comunicacion") ||
      titulo.includes("ciencias sociales")
    );
  });

  return (
    <>
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <div className={`${styles["blog-header"]} ${styles["blog-header4"]}`}>
        <div className={styles["overlay"]}>
          <div className={styles["blog-header-texts"]}>
            <h3>EXAMEN CENEVAL</h3>

            <h1 className={styles["article-main-title"]}>
              ACREDITA-BACH NEM 2026-2027: guía completa del examen
            </h1>

            <div className={styles["brands"]}>
              <div className={styles["brand"]}>
                <Image
                  width={50}
                  height={50}
                  src="/layout/logo.png"
                  alt="Logo de Simulandum"
                />

                <span>Simulandum</span>
              </div>

              <div className={styles["brand"]}>
                <Image
                  width={40}
                  height={40}
                  src="/layout/ceneval.png"
                  alt="Ceneval"
                />

                <span>ACREDITA-BACH NEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INTRODUCCIÓN
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <p className={styles["article-intro"]}>
          El <strong>ACREDITA-BACH NEM</strong> es la evaluación que permite
          acreditar conocimientos equivalentes al bachillerato general mediante
          un examen.
        </p>

        <p>
          Desde 2026 utiliza un modelo alineado con la{" "}
          <strong>Nueva Escuela Mexicana (NEM)</strong>, por lo que cambió su
          estructura y las áreas que evalúa.
        </p>

        <p>
          Si planeas presentarlo durante <strong>2026 o 2027</strong>, aquí
          encontrarás lo esencial para conocer el examen y organizar tu
          preparación.
        </p>

        {/* =====================================================
            ESTRUCTURA
        ====================================================== */}

        <h2>¿Cómo es el ACREDITA-BACH NEM?</h2>

        <p>
          Quienes presentan por primera vez realizan el{" "}
          <strong>Examen Global</strong>, compuesto por{" "}
          <strong>180 reactivos de opción múltiple</strong>. La evaluación se
          realiza en dos sesiones durante el mismo día.
        </p>

        <div className={styles["table-wrapper"]}>
          <table className={styles["article-table"]}>
            <thead>
              <tr>
                <th></th>
                <th>Primera sesión</th>
                <th>Segunda sesión</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Reactivos</strong>
                </td>

                <td>92</td>
                <td>88</td>
              </tr>

              <tr>
                <td>
                  <strong>Duración</strong>
                </td>

                <td>4 h 30 min</td>
                <td>4 h</td>
              </tr>

              <tr>
                <td>
                  <strong>Áreas</strong>
                </td>

                <td>4</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["info-box"]}>
          <strong>¿Sabías que?</strong>

          <p>
            El examen también incorpora reactivos piloto utilizados para evaluar
            futuras preguntas. Estos reactivos no afectan tu calificación.
          </p>
        </div>
      </div>

      {/* =====================================================
          CARRUSEL GENERAL
      ====================================================== */}

      <section className={styles["article-wide-section"]}>
        <div className={styles["section-heading"]}>
          <h2>Practica con simuladores completos</h2>

          <p>
            Comienza con un diagnóstico o realiza simulaciones para conocer tu
            nivel y medir tu avance.
          </p>
        </div>

        <SimulatorCarousel simulators={simuladoresGenerales} />
      </section>

      {/* =====================================================
          ÁREAS
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>¿Qué áreas evalúa el ACREDITA-BACH NEM?</h2>

        <p>
          El modelo contempla <strong>siete áreas</strong> que reúnen
          conocimientos y habilidades correspondientes al nivel medio superior.
        </p>

        <div className={styles["table-wrapper"]}>
          <table className={styles["article-table"]}>
            <thead>
              <tr>
                <th>Área</th>
                <th>Enfoque general</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Pensamiento Matemático</td>
                <td>Razonamiento y resolución de problemas.</td>
              </tr>

              <tr>
                <td>Cultura Digital</td>
                <td>Tecnología y entornos digitales.</td>
              </tr>

              <tr>
                <td>Conciencia Histórica</td>
                <td>Comprensión de procesos históricos.</td>
              </tr>

              <tr>
                <td>Humanidades</td>
                <td>Reflexión, análisis y argumentación.</td>
              </tr>

              <tr>
                <td>Ciencias Naturales, Experimentales y Tecnología</td>
                <td>Fenómenos científicos y tecnológicos.</td>
              </tr>

              <tr>
                <td>Lengua y Comunicación</td>
                <td>Comprensión y uso del lenguaje.</td>
              </tr>

              <tr>
                <td>Ciencias Sociales</td>
                <td>Comprensión de fenómenos sociales.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["info-box"]}>
          <strong>No estudies todo por igual</strong>

          <p>
            Comienza con un diagnóstico y utiliza tus resultados para dedicar
            más tiempo a las áreas donde tengas menor desempeño.
          </p>
        </div>
      </div>

      {/* =====================================================
          BANNER
      ====================================================== */}

      <section className={styles["simulandum-banner"]}>
        <div className={styles["simulandum-banner-content"]}>
          <div>
            <span className={styles["banner-label"]}>SIMULANDUM</span>

            <h2>Prepárate para el ACREDITA-BACH NEM</h2>

            <p>
              Practica con simuladores completos y ejercicios por área para
              identificar qué temas necesitas reforzar.
            </p>

            <Link href="/simuladores" className={styles["banner-button"]}>
              Ver simuladores
            </Link>
          </div>

          <Image
            src="/layout/logo.png"
            alt="Simulandum"
            width={150}
            height={150}
          />
        </div>
      </section>

      {/* =====================================================
          PREPARACIÓN
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>¿Cómo prepararte para el ACREDITA-BACH NEM?</h2>

        <p>
          No conviene comenzar estudiando todas las áreas por igual. Una
          estrategia más eficiente es conocer primero tu nivel y decidir dónde
          concentrar tu esfuerzo.
        </p>

        <ol>
          <li>
            <strong>Realiza un diagnóstico</strong> para conocer tu nivel
            inicial.
          </li>

          <li>
            <strong>Identifica tus áreas débiles</strong> y dales prioridad.
          </li>

          <li>
            <strong>Estudia y practica por área</strong> en lugar de intentar
            abarcar todo al mismo tiempo.
          </li>

          <li>
            <strong>Revisa tus errores</strong> y vuelve a practicar los temas
            que más se te dificulten.
          </li>

          <li>
            <strong>Realiza simulacros completos</strong> para comprobar cuánto
            has avanzado.
          </li>
        </ol>

        <p>
          La idea es combinar <strong>estudio, práctica y revisión de errores</strong>{" "}
          hasta conseguir un desempeño más equilibrado entre las distintas
          áreas.
        </p>
      </div>

      {/* =====================================================
          CARRUSEL POR ÁREA
      ====================================================== */}

      <section className={styles["article-wide-section"]}>
        <div className={styles["section-heading"]}>
          <h2>Practica por área</h2>

          <p>
            Si ya identificaste tus puntos débiles, concentra tu práctica en las
            áreas que necesitas reforzar.
          </p>
        </div>

        <SimulatorCarousel simulators={simuladoresPorArea} />
      </section>

      {/* =====================================================
          EXAMEN DE ÁREA
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>¿Qué pasa si no acreditas alguna área?</h2>

        <p>
          No acreditar una parte del examen no siempre significa comenzar desde
          cero. El ACREDITA-BACH contempla un <strong>Examen de Área</strong>{" "}
          para determinadas personas que mantienen un área pendiente después
          del Examen Global.
        </p>

        <p>
          Esto hace especialmente importante conocer tu desempeño por área y no
          únicamente tu resultado general.
        </p>

        <div className={styles["info-box"]}>
          <strong>Tu resultado por área importa</strong>

          <p>
            Practicar cada área de manera independiente puede ayudarte a
            detectar con mayor precisión dónde estás teniendo dificultades.
          </p>
        </div>

        {/* =====================================================
            2027
        ====================================================== */}

        <h2>¿Qué sabemos del ACREDITA-BACH NEM 2027?</h2>

        <p>
          El modelo NEM comenzó a utilizarse en 2026. Si planeas presentar el
          examen durante <strong>2027</strong>, Simulandum mantendrá esta guía
          actualizada conforme se conozcan las nuevas fechas, costos y periodos
          de aplicación.
        </p>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <h2>Preguntas frecuentes</h2>

        <div className={styles["faq-list"]}>
          <details>
            <summary>
              ¿Qué pasa si no apruebo una o dos áreas del ACREDITA-BACH NEM?
            </summary>

            <p>
              Dependiendo de tu resultado, puedes tener derecho a presentar un
              Examen de Área para acreditar únicamente el área pendiente, sin
              repetir todo el Examen Global.
            </p>
          </details>

          <details>
            <summary>
              ¿El ACREDITA-BACH NEM es más difícil que la versión anterior?
            </summary>

            <p>
              No se trata únicamente de que sea más difícil. El modelo actual
              reorganiza los contenidos alrededor de siete áreas alineadas con
              la NEM, por lo que conviene prepararse específicamente para esta
              versión.
            </p>
          </details>

          <details>
            <summary>¿Qué área debería estudiar primero?</summary>

            <p>
              Lo mejor es comenzar con un diagnóstico y priorizar las áreas
              donde obtengas menor desempeño.
            </p>
          </details>

          <details>
            <summary>
              ¿Conviene estudiar por áreas o hacer simulacros completos?
            </summary>

            <p>
              Conviene combinar ambos. Primero practica las áreas donde tengas
              dificultades y después utiliza simulacros completos para medir tu
              progreso.
            </p>
          </details>

          <details>
            <summary>
              ¿Puedo prepararme únicamente haciendo simuladores?
            </summary>

            <p>
              Los simuladores permiten practicar y detectar debilidades. Cuando
              encuentres un tema que no dominas, conviene repasarlo y después
              volver a practicar para comprobar tu avance.
            </p>
          </details>

          <details>
            <summary>
              ¿Cuánto tiempo antes debería comenzar a prepararme?
            </summary>

            <p>
              Depende de tu nivel actual. Un diagnóstico puede ayudarte a
              determinar qué áreas requieren más preparación y organizar mejor
              tu tiempo.
            </p>
          </details>
        </div>

        {/* =====================================================
            CIERRE
        ====================================================== */}

        <h2>Empieza a prepararte</h2>

        <p>
          Conocer cómo funciona el examen es el primer paso. Ahora puedes medir
          tu nivel, identificar tus áreas débiles y comenzar a practicar para el{" "}
          <strong>ACREDITA-BACH NEM</strong>.
        </p>

        <p>
          <Link href="/simuladores" className={styles["link"]}>
            Ver simuladores de ACREDITA-BACH NEM en Simulandum
          </Link>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Page;