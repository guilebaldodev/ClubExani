import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import { simulators } from "@/consts/simulators";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const exani = simulators[0];

  return (
    <>
      <Header />

      <div className={styles["blog-header"]}>
        <div className={styles["overlay"]}>
          <div className={styles["blog-header-texts"]}>
            <h3>EXAMEN CENEVAL</h3>
            <h2>
              Simuladores del examen EXANI III para estudiar una especialidad,
              maestría o doctorado
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
                <span>EXANI III</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["grid-simuladores"]}>
        {exani.simulacros.map((sim) => (
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
              href={`/plataforma/simuladores/${sim.id}`}
              className={
                sim.estado === "listo"
                  ? styles["boton"]
                  : styles["grey"]
              }
            >
              {sim.estado === "listo" ? "Detalles" : "Próximamente..."}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles["blog-container"]}>
        <h2>
          ¿Qué es el EXANI III y por qué deberías practicar con un simulador?
        </h2>
        <p>
          El <strong>Examen Nacional de Ingreso al Posgrado (EXANI III)</strong>{" "}
          es la evaluación aplicada por el
          <strong> Ceneval </strong> para medir las habilidades académicas y los
          conocimientos específicos de quienes desean cursar una{" "}
          <strong>especialidad, maestría o doctorado</strong>. Cada año, miles
          de profesionistas presentan esta prueba como requisito para ingresar a
          programas de posgrado en universidades públicas y privadas, y la
          preparación previa es clave para obtener un buen resultado.
        </p>
        <p>
          En este artículo conocerás qué evalúa el EXANI III, cómo se estructura
          y por qué
          <strong> usar un simulador</strong> puede marcar la diferencia en tu
          desempeño.
        </p>

        <h2>¿A quién está dirigido el EXANI III?</h2>
        <p>
          El examen está dirigido a personas que{" "}
          <strong>ya concluyeron la educación superior</strong> y desean
          ingresar a un programa de posgrado.
        </p>
        <ul>
          <li>
            <strong>A título personal:</strong> si el aspirante quiere conocer
            su nivel académico.
          </li>
          <li>
            <strong>Por convocatoria institucional:</strong> cuando una
            universidad o centro de investigación lo solicita como parte de su
            proceso de admisión.
          </li>
        </ul>

        <h2>¿Qué evalúa el EXANI III?</h2>
        <p>
          El EXANI III busca medir tanto <strong>habilidades generales</strong>{" "}
          como <strong>conocimientos específicos</strong> que son esenciales
          para el desempeño académico en el posgrado.
        </p>

        <p>
          Estas áreas conforman el <strong>puntaje global</strong> del examen:
        </p>
        <ul>
          <li>Metodología de la investigación – 30 reactivos</li>
          <li>Comprensión lectora – 30 reactivos</li>
          <li>Redacción indirecta – 30 reactivos</li>
          <li>Pensamiento matemático – 30 reactivos</li>
        </ul>
        <p>
          <strong>Total: 120 reactivos</strong>
        </p>

        <p>
          Además, se incluye un módulo de <strong>inglés</strong> con 30
          reactivos, aunque <em>no forma parte del puntaje global</em>.
        </p>

        <h2>Simulador EXANI III de Simulandum</h2>
        <p>
          En <strong>Simulandum</strong> puedes practicar con un{" "}
          <strong>simulador completo del EXANI III</strong>, diseñado para
          replicar la experiencia real del examen. Incluye todas las secciones,
          puntuación automática, retroalimentación detallada y un cronómetro
          para que entrenes bajo las mismas condiciones que en la aplicación
          oficial.
        </p>
        <ul>
          <li>Canjea simuladores con monedas.</li>
          <li>Guarda tus resultados y repasa tus errores.</li>
          <li>Mide tu nivel antes del examen real.</li>
        </ul>

        <p>
          Prepárate con <strong>Simulandum</strong> y{" "}
          <strong>
            aumenta tus posibilidades de ingresar al posgrado que deseas.
          </strong>
        </p>

        <h2>¿Por qué usar un simulador del EXANI III?</h2>
        <p>
          Prepararte con un simulador te permite{" "}
          <strong>experimentar las condiciones reales del examen</strong> antes
          del día oficial.
        </p>
        <ul>
          <li>
            <strong>Familiarización con la estructura:</strong> conocer el tipo
            de preguntas y tiempos.
          </li>
          <li>
            <strong>Retroalimentación inmediata:</strong> detectar tus puntos
            fuertes y débiles.
          </li>
          <li>
            <strong>Entrenamiento con cronómetro:</strong> mejorar tu manejo del
            tiempo.
          </li>
          <li>
            <strong>Seguimiento de tu progreso:</strong> medir tu avance con
            resultados reales.
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Page;
