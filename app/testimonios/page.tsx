import Image from "next/image";
import Footer from "../ui/landingPage/Footer";
import Header from "../ui/landingPage/LandingHeader";
import styles from './testimonios.module.css';

const Testimonios = () => {
  return (
    <>
      <Header />
      <div className={styles['testimonials-page-container']}>
        <div className={styles['testimonials-header']}>
          <div className={styles['testimonials-overlay']}>
            <div className={styles['testimonials-titles']}>
              <h2>Casos de Éxito</h2>
              <p>
                Descubre cómo Simulandum ha sido clave para que muchas personas superen con éxito sus exámenes de admisión. Aquí encontrarás ejemplos reales de quienes utilizaron nuestros simuladores y recursos para prepararse de forma efectiva.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles['testimonials']} ${styles['w-90']}`}>
          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Esteban de Jesus" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Esteban de Jesus</h4>
                <p>EXANI III</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Usar Simulandum fue clave para mi preparación para el EXANI III. Las lecciones son claras y los simuladores me ayudaron a entender cómo sería el examen real. Me sentí mucho más seguro.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Daniela Martínez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Daniela Martínez</h4>
                <p>EXADIEMS</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Siempre pensé que el examen sería muy difícil, pero después de practicar con Simulandum, me sentí tranquila y confiada el día del EXADIEMS.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Laura Jiménez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Laura Jiménez</h4>
                <p>EXANI III</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Estudiar con Simulandum me permitió adaptar mi ritmo. Logré alcanzar los puntos necesarios para entrar a mi posgrado.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Laura Sánchez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Laura Sánchez</h4>
                <p>EXADIEMS</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Al empezar, mis resultados no eran buenos. Pero con la práctica constante y el análisis de errores, mejoré mucho antes del EXADIEMS.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Javier Pérez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Javier Pérez</h4>
                <p>EXANI III</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Gracias a los reportes detallados de mis simulacros, pude identificar exactamente dónde mejorar. Eso marcó la diferencia.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Felipe Castro" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Felipe Castro</h4>
                <p>EXADIEMS</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Me gustó que los contenidos no eran solo teoría. Había ejemplos prácticos que me ayudaron a entender mejor los temas del EXADIEMS.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Ricardo Pérez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Ricardo Pérez</h4>
                <p>EXANI III</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Tener una guía estructurada y simuladores me ayudó a organizarme mejor. Gané confianza con cada práctica.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Alejandra Torres" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Alejandra Torres</h4>
                <p>EXADIEMS</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Me preocupaba la parte de matemáticas, pero con los ejercicios interactivos de Simulandum, todo fue más claro. Me fue excelente en el EXADIEMS.
                </q>
              </p>
            </div>
          </div>

          <div className={styles['testimonial-item']}>
            <div className={styles['testimonial-img']}>
              <Image src="/landing/person.jpg" alt="Luis Gómez" width={80} height={80} />
            </div>
            <div className={styles['testimonial-texts']}>
              <div className={styles['testimonial-title']}>
                <h4>Luis Gómez</h4>
                <p>EXANI III</p>
              </div>
              <p className={styles['testimonial-pb']}>
                <q>
                  Estaba muy nervioso antes de empezar, pero Simulandum me ayudó a prepararme con simuladores muy bien diseñados. Llegué listo al EXANI III.
                </q>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonios;
