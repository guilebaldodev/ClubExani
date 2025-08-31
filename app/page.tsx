"use client";
import Image from "next/image";
import styles from "./LandingPage.module.css";
import Footer from "./ui/landingPage/Footer";
import Header from "./ui/landingPage/LandingHeader";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <div className={styles["landing-page"]}>
        <div className={styles["content-container"]}>
          <div className={styles["landing-hero"]}>
            <div className={styles["landing-hero-img"]}>
              <Image
                src={"/landing/hero.png"}
                width={400}
                height={400}
                alt="Simulandum hero image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className={styles["landing-hero-texts"]}>
              <h3>
                <span className={styles["primary-color"]}>
                  Simula, Aprende y Avanza.
                </span>
              </h3>
              <h1>Simuladores para cada examen</h1>
              <p>
                En Simulandum te enfrentas a simuladores que replican exámenes
                reales. Sin mensualidades. Practica con tiempos, estructura y
                preguntas diseñadas para evaluar lo que realmente importa.
              </p>
              <div className={styles["landing-hero-buttons"]}>
                <Link href={"/dashboard"} className={styles["primary"]}>
                  Empezar
                  <Image
                    src={"/landing/start-arrow.png"}
                    alt="right"
                    width={25}
                    height={25}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["landing-numbers"]}>
            <div className={styles["landing-number-item"]}>
              <div className={styles["landing-number-img"]}></div>
              <h3>+60</h3>
              <p>Areas</p>
            </div>

            <div className={styles["landing-number-item"]}>
              <h3>+1000</h3>
              <p>Ejercicios</p>
            </div>

            <div className={styles["landing-number-item"]}>
              <h3>+20</h3>
              <p>Temas</p>
            </div>

            <div className={styles["landing-number-item"]}>
              <h3>+50</h3>
              <p>Programas </p>
            </div>
          </div>

          <div className={styles["landing-options-container"]}>
            <h2>Selecciona el examen que necesitas</h2>

            <div className={styles["examen-options"]}>
              <div className={styles["examen-option"]}>
                <div className={styles["examen-img"]}>
                  <Image
                    src="/landing/exani-iii.png"
                    alt="EXANI III"
                    width={300}
                    height={180}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className={styles["examen-info"]}>
                  <div>
                    <h3>EXANI III</h3>
                    <p>
                      Examen utilizado para el ingreso a maestrías,
                      especialidades y doctorados en México
                    </p>
                  </div>

                  <div>
                    <div className={styles["examen-meta"]}>
                      <span>3 simuladores</span> | <span>+300 preguntas</span>
                    </div>
                    <Link
                      href={"/simuladores"}
                      className={styles["examen-boton"]}
                    >
                      Ver simuladores
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles["examen-option"]}>
                <div className={styles["examen-img"]}>
                  <Image
                    src="/landing/Acredita-Bach.png"
                    alt="Acredita-Bach"
                    width={300}
                    height={180}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className={styles["examen-info"]}>
                  <div>
                    <h3>ACREDITA-BACH</h3>
                    <p>
                      Examen que permite acreditar el nivel medio superior
                      (preparatoria) en una sola evaluación.
                    </p>
                  </div>

                  <div>
                    <div className={styles["examen-meta"]}>
                      <span>2 simuladores</span> | <span>+200 preguntas</span>
                    </div>
                    <Link
                      href={"/simuladores"}
                      className={`${styles["examen-boton"]} ${styles["grey"]}`}
                    >
                      Proximamente...
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles["examen-option"]}>
                <div className={styles["examen-img"]}>
                  <Image
                    src="/landing/egel-plus.png"
                    alt="Egel plus"
                    width={300}
                    height={180}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className={styles["examen-info"]}>
                  <div>
                    <h3>EGEL PLUS</h3>
                    <p>
                      Examen especializado para egresados de licenciatura con
                      fines de titulación y reconocimiento académico.
                    </p>
                  </div>

                  <div>
                    <div className={styles["examen-meta"]}>
                      <span>5 simuladores</span> | <span>+500 preguntas</span>
                    </div>
                    <Link
                      href={"/simuladores"}
                      className={`${styles["examen-boton"]} ${styles["grey"]}`}
                    >
                      Proximamente...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["landing-cards-container"]}>
            <div className={styles["landing-cards-titles"]}>
              <div className={styles["landing-cards-logo"]}></div>

              <h2>
                Descubre todo lo que{" "}
                <span className={styles["primary-color"]}>Simulandum</span>{" "}
                puede hacer por ti
              </h2>

              {/* <p>
                Hemos creado una plataforma de simuladores para que te prepares
                de forma efectiva, sin pagar de más. Ya sea que vayas a
                presentar el EXANI III, el EXADIEMS o cualquier otro examen de
                admisión, aquí encontrarás herramientas que simulan con
                precisión el entorno real del examen y te ayudan a mejorar con
                cada intento.
              </p> */}
            </div>

            <div className={styles["landing-cards"]}>
              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/test.png"
                  alt="Simuladores"
                  width={45}
                  height={45}
                />
                <h3>Simuladores realistas</h3>
                <p>
                  Practica con exámenes que simulan fielmente la estructura,
                  dificultad y tiempos del examen real.
                </p>
              </div>

              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/book.png"
                  alt="Variedad de simuladores"
                  width={40}
                  height={40}
                />
                <h3>Variedad</h3>
                <p>
                  Cada examen disponible en Simulandum cuenta con múltiples
                  simuladores distintos.
                </p>
              </div>

              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/coins.png"
                  alt="Créditos flexibles"
                  width={40}
                  height={40}
                />
                <h3>Créditos que se adaptan a ti</h3>
                <p>
                  En Simulandum usas monedas para acceder a simuladores cuando
                  tú lo decidas.
                </p>
              </div>

              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/chart.png"
                  alt="Seguimiento de Progreso"
                  width={40}
                  height={40}
                />
                <h3>Seguimiento de Progreso</h3>
                <p>
                  Monitorea tu avance con reportes personalizados que te
                  mostrarán qué áreas necesitas reforzar.
                </p>
              </div>
              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/light.png"
                  alt="Recordatorios y Consejos"
                  width={40}
                  height={40}
                />
                <h3>Recordatorios y Consejos</h3>
                <p>
                  Recibe notificaciones con recordatorios, consejos y
                  recomendaciones útiles que te ayudarán a estar enfocado.
                </p>
              </div>
              <div className={styles["landing-card"]}>
                <Image
                  src="/landing/speed.png"
                  alt="Exámen Diagnóstico"
                  width={40}
                  height={40}
                />
                <h3>Exámen Diagnóstico</h3>
                <p>
                  Inicia tu preparación con un diagnóstico inicial que te
                  ayudará a identificar tus fortalezas y áreas de oportunidad.
                </p>
              </div>
            </div>
          </div>

          <div className={styles["landing-sections-container"]}>
            <div className={styles["landing-sections-title"]}>
              <h2>
                ¿Por qué elegir{" "}
                <span className={styles["primary-color"]}>Simu</span>
                landum para prepararte para tus examenes?
              </h2>
            </div>

            {/* Sección 1 – Evita sorpresas */}
            <div className={styles["landing-section"]}>
              <div className={styles["landing-section-img"]}>
                <Image
                  src={"/landing/hero.png"}
                  width={400}
                  height={400}
                  alt="Simulandum simuladores"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className={styles["landing-section-texts"]}>
                <h4>Evita sorpresas en el examen real</h4>
                <h3>Practica antes, aprueba con confianza</h3>
                <p>
                  Muchos estudiantes fallan no por falta de conocimientos, sino
                  por no saber a qué se enfrentan. Con Simulandum puedes
                  prepararte con simuladores que replican el formato real del
                  examen. Así, cuando llegue el día, nada te tomará por
                  sorpresa.
                </p>
                <Link href={"/plataforma"}>Ver plataforma</Link>
              </div>
            </div>

            {/* Sección 2 – Flexibilidad y control */}
            <div className={styles["landing-blue"]}>
              <div className={styles["landing-section"]}>
                <div className={styles["landing-section-texts"]}>
                  <h4>Conoce tu desempeño</h4>
                  <h3>
                    Obtén reportes detallados de cada simulador que resuelvas
                  </h3>
                  <p>
                    En Simulandum cada examen que completes genera un reporte
                    claro y preciso. Podrás ver tu puntaje total, aciertos
                    obtenidos y un desglose de cada respuesta marcada. Así
                    identificas tus fortalezas y áreas de mejora.
                  </p>

                  <Link href={"/simuladores"}>Explorar simuladores</Link>
                </div>

                <div className={styles["landing-section-img"]}>
                  <Image
                    src="/landing/hero.png"
                    width={400}
                    height={400}
                    alt="Simuladores flexibles"
                    style={{ width: "100%", height: "auto" }}
                  />
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

          <div className={styles["testimonials-container"]}>
            <h2>Historias de éxito de nuestros estudiantes</h2>
            <div className={styles["testimonials"]}>
              <div className={styles["testimonial-item"]}>
                <div className={styles["testimonial-img"]}>
                  <Image
                    src="/landing/person.jpg"
                    alt="Guilebaldo Vargas Solís"
                    width={80}
                    height={80}
                  />
                </div>
                <div className={styles["testimonial-texts"]}>
                  <div className={styles["testimonial-title"]}>
                    <h4>Guilebaldo Vargas Solís</h4>
                    <p>EXANI III</p>
                  </div>
                  <p className={styles["testimonial-pb"]}>
                    <q>
                      Usando Simulandum, obtuve el mejor puntaje en el EXANI III
                      en el posgrado al que aspiré y fui aceptado.
                    </q>
                  </p>
                </div>
              </div>

              <div className={styles["testimonial-item"]}>
                <div className={styles["testimonial-img"]}>
                  <Image
                    src="/landing/person.jpg"
                    alt="Alexandra Olea"
                    width={80}
                    height={80}
                  />
                </div>
                <div className={styles["testimonial-texts"]}>
                  <div className={styles["testimonial-title"]}>
                    <h4>Alexandra Olea</h4>
                    <p>EXANI III</p>
                  </div>
                  <p className={styles["testimonial-pb"]}>
                    <q>
                      Usé Simulandum desde las etapas iniciales de preparación y
                      logré entrar a un posgrado en Tecnologías de la
                      Información.
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

export default LandingPage;
