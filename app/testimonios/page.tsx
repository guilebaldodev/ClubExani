import Image from "next/image";
import Footer from "../ui/landingPage/Footer"
import Header from "../ui/landingPage/LandingHeader"
import styles from './testimonios.module.css'


const Testimonios = () => {
    return (
        <>
        <Header></Header>
        <div className={styles['testimonials-page-container']}>
            <div className={styles['testimonials-header']}>
                <div className={styles['testimonials-overlay']}>
                    <div className={styles['testimonials-titles']}>
                        <h2>Casos de Éxito</h2>
                        <p>
                            Descubre cómo nuestra plataforma ha sido clave para que muchos estudiantes superen con éxito el EXANI III. Aquí encontrarás algunos ejemplos reales de quienes han utilizado nuestras herramientas y recursos para optimizar su preparación y obtener los mejores resultados en el examen.
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
              <p>Estudiante de posgrado en Matemáticas</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Usar Club Exani fue clave para mi preparación para el EXANI III. Las lecciones son súper claras y los simuladores realmente me ayudaron a entender cómo sería el examen. Me sentí más seguro gracias al seguimiento que recibí.
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
              <p>Estudiante de Economía</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Siempre pensé que el examen sería más difícil, pero después de practicar varias veces, me di cuenta de que era cuestión de estar bien preparada. Llegué al día del examen sintiéndome tranquila y segura de mis respuestas.
              </q>
            </p>
          </div>
        </div>

        <div className={styles['testimonial-item']}>
          <div className={styles['testimonial-img']}>
            <Image src="/landing/person.jpg" alt="Esteban de Jesus" width={80} height={80} />
          </div>
          <div className={styles['testimonial-texts']}>
            <div className={styles['testimonial-title']}>
              <h4>Esteban de Jesus</h4>
              <p>Estudiante de posgrado en Física</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Club Exani me ayudó un montón con mi preparación. Los simuladores eran súper realistas y me permitieron practicar como si ya estuviera en el examen. Además, las lecciones son muy claras y van directo al grano, lo que me hizo sentir mucho más preparado.
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
              <p>Estudiante de Posgrado en Derecho</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Trabajando y estudiando al mismo tiempo es difícil encontrar un equilibrio, pero con la flexibilidad de poder estudiar cuando quisiera logré estudiar a mi ritmo. Gracias a eso, conseguí los puntos que necesitaba para entrar a mi posgrado en Derecho.
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
              <p>Estudiante de Derecho</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Al comenzar con los simuladores, mis resultados no eran los mejores. Poco a poco, al revisar mis errores y enfocarme en los temas que me costaban más trabajo, pude mejorar. La práctica constante me ayudó a sentirme más segura y preparada.
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
              <p>Estudiante de Arquitectura</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Una de las cosas que más me ayudó fue tener un resumen claro de mis errores después de cada simulacro. Me permitió identificar las áreas en las que debía mejorar y concentrar mis esfuerzos de manera más efectiva. Al final, noté un progreso significativo.
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
              <p>Estudiante de Biotecnología</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Me gustó el enfoque práctico. Lo que más me gustó fue que los conceptos no solo eran teoría, sino que también incluían ejemplos prácticos que me ayudaron a entender mejor las materias.
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
              <p>Estudiante de Psicología</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Al principio me costaba organizarme con tantos temas que estudiar, pero tener una guía estructurada y simuladores me ayudó a enfocarme mejor. Poco a poco fui ganando confianza en los temas.
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
              <p>Estudiante de Ciencias Políticas</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Me preocupaba mucho la parte de matemáticas, pero con el material de práctica y los ejercicios, logré entenderlo mejor. El día del examen, todo me resultó más familiar y sencillo.
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
              <p>Estudiante de Arquitectura</p>
            </div>
            <p className={styles['testimonial-pb']}>
              <q>
                Estaba muy nervioso antes de comenzar a estudiar, pero los simuladores, cuestionarios y el material me dieron la confianza que necesitaba. Cuando llegó el examen real, ya me sentía preparado. Todo estuvo muy bien organizado.
              </q>
            </p>
          </div>
        </div>

            </div>
            </div>

        <Footer></Footer>
        </>
     );
}
 
export default Testimonios;