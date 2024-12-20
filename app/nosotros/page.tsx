import styles from "./about.module.css"; // Importa el CSS como un módulo
import Header from "../ui/landingPage/LandingHeader";
import Footer from "../ui/landingPage/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <div className={styles["about-us-container"]}>
        <div className={styles["about-us-titles"]}>
          <h2>
            Somos la plataforma más completa para tu preparación del examen de
            posgrado
          </h2>
          <p>
            ClubExani es la plataforma de preparación y simulación de exámenes
            que conecta a estudiantes con el éxito en su acceso a programas de
            posgrado. Ofrecemos herramientas integrales para mejorar el
            rendimiento y asegurar el mejor desempeño en el examen, todo en un
            solo lugar. Nuestro enfoque personalizado y fácil de usar te
            garantiza una experiencia de aprendizaje eficiente y efectiva.
          </p>
        </div>

        <div className={styles["about-us-banner"]}></div>

        <div className={styles["our-history"]}>
          <h4>Nuestra historia</h4>
          <h3>El origen de ClubExani</h3>
          <div className={styles["our-history-text"]}>
            <p>
              ClubExani comenzó como una meta compartida entre compañeros de una
              universidad de matemáticas, quienes aspiraban a acceder a un
              posgrado. Sin embargo, al explorar los recursos disponibles en
              línea, se dieron cuenta de que había una escasez alarmante de
              material de estudio. Esta necesidad los llevó a crear una
              herramienta que facilitaría el camino hacia la maestría,
              transformando un proceso complicado en una experiencia más
              accesible.
            </p>
            <br />
            <p>
              El examen EXANI contaba con un simulador oficial, pero su limitado
              número de preguntas y la abrumadora cantidad de libros de estudio
              disponibles complicaban la preparación de los estudiantes. Nos
              propusimos simplificar este proceso, centrándonos en presentar de
              manera clara los temas del examen y proporcionando un enfoque
              directo que evitara la confusión. A medida que el proyecto
              avanzaba, el equipo se expandió, incorporando programadores y
              especialistas en diseño educativo que trabajan en la creación de
              lecciones atractivas y efectivas. Nuestra misión se mantiene
              firme: ayudar a los estudiantes a prepararse para el examen de
              forma justa y accesible. A diferencia de otros cursos que pueden
              costar el doble o el triple, ClubExani se compromete a ofrecer
              precios competitivos para asegurar que más personas tengan acceso
              a nuestros recursos de calidad.
            </p>
            <br />
            <p>
              Hoy, ClubExani es la plataforma que transforma la preparación para
              el posgrado, ayudando a los estudiantes a enfocarse en lo que
              realmente importa y brindando el apoyo necesario para alcanzar sus
              objetivos académicos.
            </p>
          </div>
        </div>

        <div className={styles["about-us-numbers"]}>
          <h3>Construyendo el camino hacia el éxito en el posgrado</h3>
          <div className={styles["about-numbers-items"]}>
            <div className={styles["about-numbers-item"]}>
              <h4>+2,500</h4>
              <p>Estudiantes en nuestra plataforma.</p>
            </div>
            <div className={styles["about-numbers-item"]}>
              <h4>+15,000</h4>
              <p>Simulaciones de examen realizadas.</p>
            </div>
            <div className={styles["about-numbers-item"]}>
              <h4>+220</h4>
              <p>Recursos y materiales de estudio ofrecidos.</p>
            </div>
          </div>
        </div>

        <div className={styles["about-filler"]}>
          <h3>Comienza tu preparación para el posgrado hoy mismo</h3>
          <p>Accede a 4 lecciones y un examen diagnóstico gratis.</p>

          <Link href="/exani-iii">Descubre la plataforma</Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
