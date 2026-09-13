import type { Metadata } from "next";
import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import { simulators } from "@/consts/simulators";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";
import SimulatorCarousel from "@/app/ui/blog/carrousel";

export const metadata: Metadata = {
  title: "EXANI III 2026-2027: Guía y Simuladores | Simulandum",
  description:
    "Conoce qué es el EXANI III, qué áreas evalúa, cómo se estructura y cómo prepararte para ingresar a una especialidad, maestría o doctorado.",

  alternates: {
    canonical: "https://www.simulandum.com/blog/exani-iii",
  },

  openGraph: {
    title: "EXANI III 2026-2027: Guía y Simuladores | Simulandum",
    description:
      "Conoce la estructura del EXANI III, sus áreas y cómo prepararte con simuladores.",
    url: "https://www.simulandum.com/blog/exani-iii",
    images: ["/og.png"],
  },
};

const Page = () => {
  const exani = simulators[0];

  // Diagnóstico + simuladores completos #1, #2 y #3
  const simuladoresGenerales = exani.simulacros.slice(0, 4);

  // Metodología, Comprensión Lectora,
  // Redacción Indirecta y Pensamiento Matemático
  const simuladoresPorArea = exani.simulacros.slice(5, 9);

  return (
    <>
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <div className={styles["blog-header"]}>
        <div className={styles["overlay"]}>
          <div className={styles["blog-header-texts"]}>
            <h3>EXAMEN CENEVAL</h3>

            <h1 className={styles["article-main-title"]}>
              EXANI III 2026-2027: guía y simuladores para ingresar al posgrado
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
                <span>EXANI III</span>
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
          El{" "}
          <strong>
            Examen Nacional de Ingreso al Posgrado (EXANI III)
          </strong>{" "}
          es una evaluación utilizada por instituciones de educación superior
          como parte de sus procesos de admisión a programas de{" "}
          <strong>especialidad, maestría y doctorado</strong>.
        </p>

        <p>
          Si vas a presentar el EXANI III durante <strong>2026 o 2027</strong>,
          conocer su estructura antes de comenzar a estudiar puede ayudarte a
          organizar mejor tu preparación y evitar dedicar el mismo tiempo a
          todas las áreas.
        </p>

        <p>
          En esta guía conocerás qué evalúa el examen, cómo se distribuyen sus
          áreas y cómo puedes utilizar simuladores para detectar tus fortalezas
          y debilidades antes de la aplicación.
        </p>

        {/* =====================================================
            QUÉ ES
        ====================================================== */}

        <h2>¿Qué es el EXANI III?</h2>

        <p>
          El EXANI III es una evaluación desarrollada por el{" "}
          <strong>Ceneval</strong> para medir habilidades académicas que pueden
          ser relevantes para el desempeño de un estudiante durante sus
          estudios de posgrado.
        </p>

        <p>
          Puede ser solicitado por universidades, centros de investigación y
          otras instituciones como uno de los elementos dentro de su proceso de
          selección. Sin embargo, cada institución determina la importancia que
          tendrá el resultado y los criterios que utilizará para admitir a sus
          aspirantes.
        </p>

        <h2>¿A quién está dirigido?</h2>

        <p>
          Está dirigido principalmente a personas que han concluido estudios de
          nivel superior y desean continuar su formación académica.
        </p>

        <ul>
          <li>
            Aspirantes a una <strong>especialidad</strong>.
          </li>

          <li>
            Aspirantes a una <strong>maestría</strong>.
          </li>

          <li>
            Aspirantes a un <strong>doctorado</strong>.
          </li>

          <li>
            Profesionistas que desean conocer su desempeño en las habilidades
            evaluadas por el examen.
          </li>
        </ul>

        {/* =====================================================
            ESTRUCTURA
        ====================================================== */}

        <h2>¿Cómo está estructurado el EXANI III?</h2>

        <p>
          El puntaje global del EXANI III se obtiene a partir de cuatro áreas.
          Cada una contiene <strong>30 reactivos</strong>, para un total de{" "}
          <strong>120 reactivos que forman parte del puntaje global</strong>.
        </p>

        <div className={styles["table-wrapper"]}>
          <table className={styles["article-table"]}>
            <thead>
              <tr>
                <th>Área</th>
                <th>Reactivos</th>
                <th>Qué evalúa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Metodología de la investigación</td>
                <td>30</td>
                <td>
                  Comprensión de conceptos y procesos utilizados en
                  investigación.
                </td>
              </tr>

              <tr>
                <td>Comprensión lectora</td>
                <td>30</td>
                <td>
                  Interpretación, análisis y comprensión de diferentes textos.
                </td>
              </tr>

              <tr>
                <td>Redacción indirecta</td>
                <td>30</td>
                <td>
                  Uso adecuado del lenguaje escrito y reconocimiento de
                  estructuras correctas.
                </td>
              </tr>

              <tr>
                <td>Pensamiento matemático</td>
                <td>30</td>
                <td>
                  Razonamiento cuantitativo y resolución de problemas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Además, el examen incluye una sección de <strong>inglés</strong>. Esta
          sección permite conocer el nivel de comprensión del idioma del
          sustentante, pero su resultado no forma parte del puntaje global del
          EXANI III.
        </p>

        {/* ÚNICO BLOQUE AZUL */}

        <div className={styles["info-box"]}>
          <strong>Dato importante</strong>

          <p>
            Las cuatro áreas principales aportan al puntaje global. Por eso,
            obtener un buen resultado no depende únicamente de dominar una
            materia: conviene mantener un desempeño equilibrado entre
            Metodología, Comprensión Lectora, Redacción Indirecta y Pensamiento
            Matemático.
          </p>
        </div>
      </div>

      {/* =====================================================
          CARRUSEL 1
      ====================================================== */}

      <section className={styles["article-wide-section"]}>
        <div className={styles["section-heading"]}>
          <h2>Practica con simuladores completos del EXANI III</h2>

          <p>
            Puedes comenzar con un diagnóstico y después realizar simulaciones
            completas para medir tu progreso.
          </p>
        </div>

        <SimulatorCarousel simulators={simuladoresGenerales} />
      </section>

      {/* =====================================================
          QUÉ EVALÚA CADA ÁREA
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>¿Qué evalúa cada área del EXANI III?</h2>

        <p>
          Aunque todas forman parte del mismo examen, cada área requiere un tipo
          diferente de preparación. Conocer estas diferencias puede ayudarte a
          organizar mejor tu tiempo de estudio.
        </p>

        <h2>Metodología de la investigación</h2>

        <p>
          Evalúa conocimientos relacionados con el proceso de investigación,
          como la identificación de problemas, objetivos, hipótesis, variables,
          diseños de investigación y análisis de información.
        </p>

        <p>
          Más que memorizar definiciones aisladas, es importante aprender a
          reconocer cómo se utilizan estos conceptos dentro de situaciones de
          investigación.
        </p>

        <h2>Comprensión lectora</h2>

        <p>
          En esta área deberás interpretar información contenida en distintos
          textos, identificar ideas principales, establecer relaciones entre
          fragmentos y comprender el propósito de lo que estás leyendo.
        </p>

        <p>
          Leer rápido ayuda, pero lo más importante es ser capaz de{" "}
          <strong>identificar información relevante sin perder precisión</strong>.
        </p>

        <h2>Redacción indirecta</h2>

        <p>
          Evalúa tu capacidad para reconocer la forma correcta de expresar una
          idea por escrito. Pueden aparecer aspectos relacionados con
          coherencia, cohesión, gramática, ortografía y organización del
          discurso.
        </p>

        <p>
          En lugar de pedirte escribir un texto completo, los reactivos suelen
          exigir que identifiques cuál opción presenta una redacción más
          adecuada.
        </p>

        <h2>Pensamiento matemático</h2>

        <p>
          Esta área se concentra en la resolución de problemas mediante
          razonamiento matemático. No se trata únicamente de recordar fórmulas,
          sino de interpretar datos, elegir procedimientos y llegar a una
          solución correcta.
        </p>

        <p>
          Si llevas tiempo sin estudiar matemáticas, esta puede ser una de las
          áreas donde más convenga comenzar a practicar con anticipación.
        </p>

        {/* =====================================================
            CÓMO PREPARARSE
        ====================================================== */}

        <h2>¿Cómo prepararte para el EXANI III?</h2>

        <p>
          La preparación puede ser mucho más eficiente si primero conoces tu
          nivel actual. Empezar a estudiar sin saber cuáles son tus debilidades
          puede hacer que inviertas demasiado tiempo en contenidos que ya
          dominas.
        </p>

        <ol>
          <li>
            <strong>Realiza una prueba diagnóstica.</strong> Úsala para
            identificar en qué áreas tienes mayores dificultades.
          </li>

          <li>
            <strong>Organiza tu estudio por áreas.</strong> Dedica más tiempo a
            aquellas donde obtuviste menor desempeño.
          </li>

          <li>
            <strong>Combina teoría y preguntas.</strong> Después de estudiar un
            tema, intenta resolver reactivos relacionados.
          </li>

          <li>
            <strong>Revisa tus errores.</strong> No basta con conocer tu
            puntuación; identifica por qué elegiste una respuesta incorrecta.
          </li>

          <li>
            <strong>Realiza simulacros completos.</strong> Cuando hayas
            reforzado tus áreas débiles, mide nuevamente tu desempeño.
          </li>
        </ol>

        <p>
          Este proceso permite convertir cada simulación en una herramienta de
          estudio, en lugar de limitarte únicamente a responder preguntas una
          tras otra.
        </p>
      </div>

      {/* =====================================================
          CARRUSEL 2
      ====================================================== */}

      <section className={styles["article-wide-section"]}>
        <div className={styles["section-heading"]}>
          <h2>Practica por área</h2>

          <p>
            Si ya sabes dónde necesitas mejorar, puedes concentrar tu práctica
            en una sección específica del EXANI III.
          </p>
        </div>

        <SimulatorCarousel simulators={simuladoresPorArea} />
      </section>

      {/* =====================================================
          PUNTAJE
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>¿Qué puntaje necesitas en el EXANI III?</h2>

        <p>
          No existe un único puntaje de aprobación válido para todos los
          aspirantes. El resultado requerido depende de la{" "}
          <strong>institución y del programa de posgrado</strong> al que deseas
          ingresar.
        </p>

        <p>
          Algunas universidades utilizan el EXANI III como requisito, mientras
          que otras combinan el resultado con entrevistas, promedio académico,
          proyectos de investigación, cursos propedéuticos u otros criterios de
          selección.
        </p>

        <p>
          Por esta razón, además de prepararte para obtener el mejor resultado
          posible, debes revisar los requisitos específicos de la convocatoria
          del posgrado al que quieres ingresar.
        </p>

        {/* =====================================================
            2026 - 2027
        ====================================================== */}

        <h2>EXANI III 2026 y 2027</h2>

        <p>
          Las instituciones pueden aplicar el EXANI III en diferentes periodos
          y algunas manejan procesos de admisión propios. Si planeas presentar
          el examen durante 2026 o 2027, revisa con anticipación las fechas y
          requisitos establecidos por el posgrado de tu interés.
        </p>

        <p>
          Simulandum mantendrá sus simuladores y este contenido actualizados
          conforme cambie la estructura o información relevante del examen.
        </p>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <h2>Preguntas frecuentes sobre el EXANI III</h2>

        <div className={styles["faq-list"]}>
          <details>
            <summary>
              ¿Todas las universidades piden el EXANI III?
            </summary>

            <p>
              No. Cada universidad y programa de posgrado determina sus propios
              requisitos de admisión. Algunas utilizan EXANI III y otras
              emplean evaluaciones o procesos diferentes.
            </p>
          </details>

          <details>
            <summary>¿El inglés cuenta para el puntaje global?</summary>

            <p>
              No. La sección de inglés permite conocer el desempeño del
              sustentante en esta área, pero no forma parte del cálculo del
              puntaje global.
            </p>
          </details>

          <details>
            <summary>
              ¿Cuál es el área más difícil del EXANI III?
            </summary>

            <p>
              Depende de cada sustentante. Una persona con experiencia en
              investigación puede tener facilidad en Metodología y mayor
              dificultad en Pensamiento Matemático, mientras que para otra
              persona puede ocurrir lo contrario.
            </p>
          </details>

          <details>
            <summary>
              ¿Conviene hacer simulacros completos o practicar por área?
            </summary>

            <p>
              Lo mejor es combinar ambas formas de práctica. Primero puedes
              reforzar áreas específicas y después utilizar simulacros completos
              para medir tu progreso general.
            </p>
          </details>

          <details>
            <summary>
              ¿Cuánto tiempo debería estudiar para el EXANI III?
            </summary>

            <p>
              Depende de tu nivel inicial y del tiempo disponible antes del
              examen. Una prueba diagnóstica puede ayudarte a decidir qué áreas
              requieren más preparación.
            </p>
          </details>
        </div>

        {/* =====================================================
            CIERRE
        ====================================================== */}

        <h2>Empieza a practicar para el EXANI III</h2>

        <p>
          La mejor preparación comienza por saber dónde estás. Realiza un
          diagnóstico, identifica las áreas que necesitas reforzar y utiliza
          simuladores para medir tu progreso antes de presentar el{" "}
          <strong>EXANI III</strong>.
        </p>

        <p>
          <Link href="/simuladores" className={styles["link"]}>
            Ver simuladores EXANI III disponibles en Simulandum
          </Link>
          .
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Page;