import styles from "./about.module.css";
import Header from "../ui/landingPage/LandingHeader";
import Footer from "../ui/landingPage/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles["about-us-container"]}>
        <div className={styles["about-us-titles"]}>
          <h2>
            Somos la plataforma más completa para tu preparación de exámenes de admisión
          </h2>
          <p>
            Simulandum es una plataforma especializada en la simulación y preparación de exámenes de ingreso, 
            diseñada para conectar a los aspirantes con el éxito académico. Ofrecemos herramientas inteligentes 
            para mejorar el rendimiento y asegurar un alto desempeño en distintas evaluaciones, todo en un solo lugar. 
            Nuestra experiencia de aprendizaje es eficiente, personalizada y centrada en lo que realmente importa.
          </p>
        </div>

        <div className={styles["about-us-banner"]}></div>

<div className={styles["our-history"]}>
  <h4>Nuestra historia</h4>
  <h3>El origen de Simulandum</h3>
  <div className={styles["our-history-text"]}>
    <p>
      Simulandum nació como una respuesta a la falta de herramientas efectivas para prepararse ante distintos tipos de exámenes de admisión. 
      Lo que comenzó como un proyecto enfocado en posgrados, pronto se transformó en una plataforma más amplia, 
      diseñada para apoyar a estudiantes en múltiples niveles educativos y áreas de evaluación.
    </p>
    <br />
    <p>
      En sus inicios, el equipo identificó una carencia de simuladores claros, organizados y accesibles. 
      Muchos aspirantes enfrentaban plataformas poco intuitivas o con contenidos limitados. 
      Simulandum surgió para llenar ese vacío, ofreciendo simulaciones realistas, contenido bien estructurado y herramientas que realmente ayudan a avanzar.
    </p>
    <br />
    <p>
      Hoy, Simulandum es una plataforma en expansión que cubre exámenes de ingreso a preparatoria, universidad, posgrado y más. 
      Nuestra misión es brindar a cada estudiante —sin importar su nivel— una preparación justa, accesible y enfocada, 
      con materiales de calidad y tecnología educativa de vanguardia.
    </p>
  </div>
</div>


        <div className={styles["about-us-numbers"]}>
          <h3>Construyendo el camino hacia el éxito académico</h3>
          <div className={styles["about-numbers-items"]}>
            <div className={styles["about-numbers-item"]}>
              <h4>+1,000</h4>
              <p>Estudiantes confían en nuestra plataforma.</p>
            </div>
            <div className={styles["about-numbers-item"]}>
              <h4>+5,000</h4>
              <p>Simulaciones de examen realizadas.</p>
            </div>
            <div className={styles["about-numbers-item"]}>
              <h4>+220</h4>
              <p>Recursos y materiales disponibles.</p>
            </div>
          </div>
        </div>

        <div className={styles["about-filler"]}>
          <h3>Comienza tu preparación hoy mismo</h3>
          <p>Conoce toda la variedad de examenes que tenemos</p>
          <Link href="/exani-iii">Explora nuestros simuladores</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
