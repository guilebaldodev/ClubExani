import type { Metadata } from "next";
import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import { simulators } from "@/consts/simulators";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";
import SimulatorCarousel from "@/app/ui/blog/carrousel";

export const metadata: Metadata = {
  title:
    "7 consejos para aprobar el ACREDITA-BACH NEM | Simulandum",

  description:
    "Consejos para prepararte mejor para el ACREDITA-BACH NEM: diagnóstico, práctica por áreas, revisión de errores y simuladores completos.",

  alternates: {
    canonical:
      "https://www.simulandum.com/blog/consejos-aprobar-acredita-bach-nem",
  },

  openGraph: {
    title:
      "7 consejos para aprobar el ACREDITA-BACH NEM | Simulandum",

    description:
      "Prepárate para el ACREDITA-BACH NEM con una estrategia práctica basada en diagnóstico, áreas y simuladores.",

    url:
      "https://www.simulandum.com/blog/consejos-aprobar-acredita-bach-nem",

    images: ["/og.png"],
  },
};

const Page = () => {
  const acredita = simulators[1];

  /*
    0-6:
    Diagnóstico + simuladores #1, #2 y #3
  */
  const simuladoresGenerales =
    acredita.simulacros.slice(0, 7);

  /*
    8-14:
    Simuladores específicos de las 7 áreas
  */
  const simuladoresPorArea =
    acredita.simulacros.slice(8, 15);

  return (
    <>
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className={`${styles["blog-header"]} ${styles["blog-header5"]}`}
      >
        <div className={styles["overlay"]}>
          <div
            className={
              styles["blog-header-texts"]
            }
          >
            <h3>ACREDITA-BACH NEM</h3>

            <h1
              className={
                styles["article-main-title"]
              }
            >
              7 consejos para aprobar el
              ACREDITA-BACH NEM
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

                <span>
                  ACREDITA-BACH NEM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INTRODUCCIÓN
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <p
          className={styles["article-intro"]}
        >
          Prepararte para el{" "}
          <strong>
            ACREDITA-BACH NEM
          </strong>{" "}
          no significa estudiar durante horas
          sin una estrategia. También necesitas
          identificar qué áreas dominas,
          practicar con preguntas tipo examen y
          comprobar constantemente si realmente
          estás mejorando.
        </p>

        <p>
          La práctica puede ayudarte a detectar
          errores que difícilmente notarías
          únicamente leyendo teoría. Por eso,
          los simuladores pueden utilizarse
          durante toda tu preparación y no
          solamente unos días antes del examen.
        </p>

        {/* =====================================================
            CONSEJO 1
        ====================================================== */}

        <h2>
          1. Haz un diagnóstico antes de comenzar
          a estudiar
        </h2>

        <p>
          Antes de repasar temas al azar,
          descubre cuál es tu nivel actual. Un{" "}
          <strong>
            simulador diagnóstico
          </strong>{" "}
          puede mostrarte rápidamente en qué
          áreas tienes un buen desempeño y
          cuáles necesitan mayor atención.
        </p>

        <p>
          No te preocupes demasiado por obtener
          una puntuación alta en tu primer
          intento. El objetivo del diagnóstico
          es establecer un punto de partida para
          organizar mejor tu preparación.
        </p>

        {/* =====================================================
            CONSEJO 2
        ====================================================== */}

        <h2>
          2. No estudies las siete áreas por
          igual
        </h2>

        <p>
          El ACREDITA-BACH NEM evalúa diferentes
          áreas y es normal que tengas mayor
          facilidad en unas que en otras.
          Dedicar exactamente el mismo tiempo a
          todas puede hacer menos eficiente tu
          estudio.
        </p>

        <ul>
          <li>
            Pensamiento Matemático
          </li>

          <li>
            Cultura Digital
          </li>

          <li>
            Conciencia Histórica
          </li>

          <li>
            Humanidades
          </li>

          <li>
            Ciencias Naturales,
            Experimentales y Tecnología
          </li>

          <li>
            Lengua y Comunicación
          </li>

          <li>
            Ciencias Sociales
          </li>
        </ul>

        <p>
          Utiliza los resultados de tus primeras
          prácticas para{" "}
          <strong>
            priorizar las áreas donde tengas
            menor desempeño
          </strong>
          , sin abandonar por completo aquellas
          que ya dominas.
        </p>

        {/* =====================================================
            CONSEJO 3
        ====================================================== */}

        <h2>
          3. Practica con preguntas tipo examen
        </h2>

        <p>
          Leer apuntes y repasar conceptos es
          importante, pero necesitas comprobar
          si puedes aplicar esos conocimientos
          cuando aparecen dentro de una
          pregunta.
        </p>

        <p>
          Una estrategia sencilla es seguir este
          ciclo:
        </p>

        <p>
          <strong>
            Estudia → practica → revisa tus
            errores → vuelve a practicar.
          </strong>
        </p>

        <p>
          Conforme resuelvas más reactivos
          comenzarás a familiarizarte con la
          forma en que se presentan las
          preguntas y con opciones de respuesta
          que pueden parecer similares a primera
          vista.
        </p>

        {/* =====================================================
            CONSEJO 4
        ====================================================== */}

        <h2>
          4. Revisa por qué te equivocaste
        </h2>

        <p>
          No te fijes únicamente en cuántos
          aciertos obtuviste. Una respuesta
          incorrecta puede darte información
          importante sobre lo que necesitas
          mejorar.
        </p>

        <ul>
          <li>
            ¿No conocías el tema?
          </li>

          <li>
            ¿Interpretaste incorrectamente la
            pregunta?
          </li>

          <li>
            ¿Confundiste dos conceptos?
          </li>

          <li>
            ¿Elegiste una respuesta demasiado
            rápido?
          </li>
        </ul>

        <p>
          Identificar la causa del error es
          mucho más útil que simplemente
          memorizar cuál era la opción correcta.
        </p>

        {/* =====================================================
            CONSEJO 5
        ====================================================== */}

        <h2>
          5. Practica cada área por separado
        </h2>

        <p>
          Después del diagnóstico, puedes
          concentrarte específicamente en las
          áreas donde tengas dificultades. Esto
          te permite resolver más preguntas de
          un mismo tipo y comprobar si realmente
          estás mejorando.
        </p>

        <p>
          Por ejemplo, si tienes buenos
          resultados en Cultura Digital pero
          bajas puntuaciones en Pensamiento
          Matemático, puedes dedicar varias
          sesiones a esta última antes de volver
          a realizar un examen completo.
        </p>
      </div>

      {/* =====================================================
          CARRUSEL POR ÁREA
      ====================================================== */}

      <section
        className={
          styles["article-wide-section"]
        }
      >
        <div
          className={
            styles["section-heading"]
          }
        >
          <h2>
            Refuerza las áreas que más se te
            dificultan
          </h2>

          <p>
            Practica de forma independiente las
            áreas del ACREDITA-BACH NEM y
            concentra tu esfuerzo donde
            realmente lo necesitas.
          </p>
        </div>

        <SimulatorCarousel
          simulators={simuladoresPorArea}
        />
      </section>

      {/* =====================================================
          CONSEJO 6
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>
          6. Haz simulacros completos antes del
          examen
        </h2>

        <p>
          Practicar por área es útil para
          reforzar conocimientos, pero también
          necesitas comprobar cómo respondes
          cuando debes enfrentarte a preguntas
          de diferentes temas dentro de una
          misma evaluación.
        </p>

        <p>
          Los{" "}
          <strong>
            simulacros completos
          </strong>{" "}
          te permiten medir tu desempeño general
          y descubrir si las áreas que has
          estado estudiando realmente mejoraron.
        </p>

        <p>
          Una buena estrategia es realizar un
          simulacro, revisar tus resultados,
          volver a trabajar tus puntos débiles y
          posteriormente realizar otro para
          comparar tu progreso.
        </p>
      </div>

      {/* =====================================================
          CARRUSEL GENERAL
      ====================================================== */}

      <section
        className={
          styles["article-wide-section"]
        }
      >
        <div
          className={
            styles["section-heading"]
          }
        >
          <h2>
            Pon a prueba tu preparación
          </h2>

          <p>
            Comienza con un diagnóstico y
            continúa con simuladores completos
            para medir tu avance.
          </p>
        </div>

        <SimulatorCarousel
          simulators={simuladoresGenerales}
        />
      </section>

      {/* =====================================================
          CONSEJO 7 + CIERRE
      ====================================================== */}

      <div className={styles["blog-container"]}>
        <h2>
          7. No esperes hasta el final para usar
          simuladores
        </h2>

        <p>
          Un error común es pensar que los
          simuladores solamente sirven para
          comprobar si estás preparado unos días
          antes del examen.
        </p>

        <p>
          En realidad, pueden acompañarte durante
          prácticamente todo el proceso de
          preparación. Puedes comenzar con un
          diagnóstico, estudiar tus áreas débiles
          y después utilizar nuevos simulacros
          para comprobar si tus resultados están
          mejorando.
        </p>

        <p>
          Una preparación organizada podría
          seguir este proceso:
        </p>

        <p>
          <strong>
            Diagnóstico → estudio → práctica por
            área → simulacro completo → revisión
            de errores → nuevo simulacro.
          </strong>
        </p>

        <h2>
          Practicar también es estudiar
        </h2>

        <p>
          Prepararte para el{" "}
          <strong>
            ACREDITA-BACH NEM
          </strong>{" "}
          no significa pasar semanas únicamente
          leyendo apuntes. También necesitas
          comprobar que puedes utilizar esos
          conocimientos cuando aparecen dentro
          de una pregunta.
        </p>

        <p>
          Empieza por conocer tu nivel, dedica
          más tiempo a tus áreas débiles y
          utiliza simuladores durante tu
          preparación para comprobar si
          realmente estás avanzando.
        </p>

        <p>
          En <strong>Simulandum</strong> puedes
          practicar con simuladores completos y
          ejercicios por área del{" "}
          <strong>
            ACREDITA-BACH NEM
          </strong>
          .
        </p>

        <p>
          <Link
            href="/simuladores"
            className={styles["link"]}
          >
            Ver simuladores de ACREDITA-BACH NEM
            en Simulandum
          </Link>
          .
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Page;