'use client'
import Image from 'next/image';
import styles from './LandingPage.module.css'; 
import Footer from './ui/landingPage/Footer';
import Header from './ui/landingPage/LandingHeader';

const LandingPage = () => {  
  

  
  return (
    <>
    <Header></Header>
   <div className={styles['landing-page']}>
      <div className={styles['content-container']}>
        <div className={styles['landing-hero']}>
          <div className={styles['landing-hero-img']}>
            <Image src={'/landing/hero.png'} width={400} height={400} alt='hero image' style={{width:"100%",height:"auto"}}></Image>
          </div>

          <div className={styles['landing-hero-texts']}>
            <h3>
              <span className={styles['primary-color']}>
                Prepárate para el EXANI III
              </span>
            </h3>
            <h1>INGRESA A UN POSGRADO EN MEXICO</h1>
            <p>
              Prepárate para tu examen de admisión con nuestro curso en línea,
              donde encontrarás una amplia variedad de recursos que te
              permitirán medir y mejorar tus habilidades. Aumenta tus
              posibilidades de éxito en el EXANI III y accede al posgrado que
              deseas.
            </p>
            <div className={styles['landing-hero-buttons']}>
              <button className={styles['primary']}>Probar Curso</button>
              {/* <button className={styles['secundary']}>Probar Curso</button> */}
            </div>
          </div>
        </div>

        <div className={styles['landing-numbers']}>
          <div className={styles['landing-number-item']}>
            <div className={styles['landing-number-img']}>
            </div>
            <h3>+1000</h3>
            <p>Usuarios</p>
          </div>

          <div className={styles['landing-number-item']}>
            <h3>+1500</h3>
            <p>Ejercicios</p>
          </div>

          <div className={styles['landing-number-item']}>
            <h3>+300</h3>
            <p>Lecciones</p>
          </div>

          <div className={styles['landing-number-item']}>
            <h3>+250</h3>
            <p>Cuestionarios</p>
          </div>
        </div>

        <div className={styles['landing-cards-container']}>
          <div className={styles['landing-cards-titles']}>
            <div className={styles['landing-cards-logo']}>
            </div>
            <h2>
              Conoce todo lo que <span className={styles['primary-color']}>Club</span>
              Exani tiene para ti
            </h2>

            <p>
              Hemos desarrollado un programa de preparación enfocado en el
              EXANI III, diseñado para facilitar tu aprendizaje y asegurarte
              de dominar los temas esenciales. Nuestro objetivo es
              proporcionarte los recursos para que superes con éxito tu examen
              de admisión.
            </p>
          </div>


<div className={styles['landing-cards']}>
  <div className={styles['landing-card']}>
    <Image src="/landing/test.png" alt="Simuladores" width={40} height={40} />
    <h3>Simuladores</h3>
    <p>
      Realiza simulaciones completas del EXANI III, con preguntas y
      tiempos similares al examen real.
    </p>
  </div>
  <div className={styles['landing-card']}>
    <Image src="/landing/book.png" alt="Lecciones" width={40} height={40} />
    <h3>Lecciones</h3>
    <p>
      Accede a contenido teórico detallado y estructurado para cada
      área del EXANI III.
    </p>
  </div>
  <div className={styles['landing-card']}>
    <Image src="/landing/test2.png" alt="Cuestionarios" width={40} height={40} />
    <h3>Cuestionarios</h3>
    <p>
      Practica de forma interactiva con cuestionarios diseñados para
      evaluar tus conocimientos.
    </p>
  </div>
  <div className={styles['landing-card']}>
    <Image src="/landing/chart.png" alt="Seguimiento de Progreso" width={40} height={40} />
    <h3>Seguimiento de Progreso</h3>
    <p>
      Monitorea tu avance con reportes personalizados que te
      mostrarán qué áreas necesitas reforzar.
    </p>
  </div>
  <div className={styles['landing-card']}>
    <Image src="/landing/light.png" alt="Recordatorios y Consejos" width={40} height={40} />
    <h3>Recordatorios y Consejos</h3>
    <p>
      Recibe notificaciones con recordatorios, consejos y
      recomendaciones útiles que te ayudarán a estar enfocado.
    </p>
  </div>
  <div className={styles['landing-card']}>
    <Image src="/landing/medidor.png" alt="Exámen Diagnóstico" width={40} height={40} />
    <h3>Exámen Diagnóstico</h3>
    <p>
      Inicia tu preparación con un diagnóstico inicial que te ayudará
      a identificar tus fortalezas y áreas de oportunidad.
    </p>
  </div>
</div>

        </div>

        <div className={styles['landing-sections-container']}>
          <div className={styles['landing-sections-title']}>
            <h2>
              ¿Por qué elegir <span className={styles['primary-color']}>Exani</span>
              Exani para prepararte para el EXANI III?
            </h2>
          </div>

          <div className={styles['landing-section']}>

          <div className={styles['landing-section-img']}>
              <Image src={'/landing/hero.png'} width={400} height={400} alt='hero image' style={{width:"100%",height:"auto"}}></Image>

            </div>

            <div className={styles['landing-section-texts']}>
              <h4>Examenes simuladores</h4>
              <h3>Prueba tu nivel antes del examen real</h3>
              <p>
                Los simuladores de Club Exani te permiten enfrentar
                escenarios realistas del EXANI III, preparándote para los
                desafíos que encontrarás en el examen oficial. Practica bajo
                condiciones reales, detecta áreas de mejora y optimiza tu
                tiempo de respuesta para maximizar tus posibilidades de
                éxito.
              </p>
              <button>Examen Diagnostico</button>
            </div>

        
          </div>

          <div className={styles['landing-blue']}>
            <div className={styles['landing-section']}>
              <div className={styles['landing-section-img']}>
              <Image src={'/landing/hero.png'} width={400} height={400} alt='hero image' style={{width:"100%",height:"auto"}}></Image>

              </div>

              <div className={styles['landing-section-texts']}>
                <h4>Lecciones Interactivas</h4>
                <h3>Domina los temas clave del EXANI III</h3>
                <p>
                  Las lecciones de Club Exani están diseñadas para que aprendas de manera efectiva cada uno de los temas que verás en el examen. Con explicaciones claras y ejemplos prácticos, podrás comprender incluso los conceptos más complejos.
                </p>
                <button>Ver lecciones</button>
              </div>
            </div>
          </div>

          {/* <div className={styles['landing-section']}>
            <div className={styles['landing-section-texts']}>
              <h4>Tu progreso</h4>
              <h3>Herramientas de seguimiento avanzadas</h3>
              <p>
                Nuestro sistema de seguimiento mide tu progreso en tiempo real, brindándote informes detallados sobre tus avances y recomendaciones personalizadas para que sepas exactamente en qué temas debes mejorar.
              </p>
              <button>Ir a plataforma</button>
            </div>

            <div className={styles['landing-section-img']}>
            <Image src={'/landing/hero.png'} width={400} height={400} alt='hero image' style={{width:"100%",height:"auto"}}></Image>



            </div>
          </div> */}
        </div>

        <div className={styles['testimonials-container']}>
          <h2>Historias de éxito de nuestros estudiantes</h2>
          <div className={styles['testimonials']}>
            <div className={styles['testimonial-item']}>
              <div className={styles['testimonial-img']}>
                <Image src={'/landing/person.jpg'} width={310} height={310} alt='persona' ></Image>

              </div>

              <div className={styles['testimonial-texts']}>
                <div className={styles['testimonial-title']}>
                  <h4>Esteban de Jesus</h4>
                  <p>Estudiante de posgrado en Matemáticas</p>
                </div>
                <p>
                  <q>
                    Usar Club Exani fue clave para mi preparación para el EXANI III. Las lecciones son súper claras y los simuladores realmente me ayudaron a entender cómo sería el examen. Me sentí más seguro gracias al seguimiento que recibí. ¡Sin duda, les debo mi éxito!
                  </q>
                </p>

              </div>
            </div>

            <div className={styles['testimonial-item']}>
              <div className={styles['testimonial-img']}>
              <Image src={'/landing/person.jpg'} width={310} height={310} alt='persona' ></Image>

              </div>

              <div className={styles['testimonial-texts']}>
                <div className={styles['testimonial-title']}>
                  <h4>Maria Gonzalez</h4>
                  <p>Estudiante de posgrado en Ingeniería</p>
                </div>
                <p>
                  <q>
                    Club Exani me proporcionó todas las herramientas necesarias para estudiar y afrontar el EXANI III. Las lecciones son interactivas y los ejercicios fueron muy útiles para reforzar mi aprendizaje. ¡Lo recomiendo!
                  </q>
                </p>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default LandingPage
