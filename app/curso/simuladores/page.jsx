import Image from "next/image";
import styles from "./simulators.module.css";
import Link from "next/link";

const ExamSimulators = () => {
  return (
    <>
        <div className={styles['exam-simulator-container']}>
          <div className={styles['titles']}>
            <h2>Simuladores</h2>
          </div>

          <div className={styles['simulators-container']}>
            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/unam.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Examen
                      <br />
                      Diagnostico
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen diagnostico</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/play-icon.png" 
                        alt="Icono de tiempo" 
                        width={27} 
                        height={27}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/curso/simulador"}>Empezar examen</Link>
              </div>
            </div>

            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/buap.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                        Simulador
                      <br />
                      #1
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen Simulador #1</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src={"/course/time-icon-black.png"}
alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/simulador"}>Empezar examen</Link>
              </div>
            </div>
            
            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/buap.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                        Simulador
                      <br />
                      #1
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen Simulador #1</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/time-icon-black.png" 
                        alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/simulador"}>Empezar examen</Link>
              </div>
            </div>
            
            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/buap.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                        Simulador
                      <br />
                      #1
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen Simulador #1</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/time-icon-black.png" 
                        alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/simulador"}>Empezar examen</Link>
              </div>
            </div>
            
            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/buap.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                        Simulador
                      <br />
                      #1
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen Simulador #1</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/time-icon-black.png" 
                        alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/simulador"}>Empezar examen</Link>
              </div>
            </div>
            
            <div className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src="/course/simulators/buap.jpg" 
                  alt="Simulador UNAM"
                  width={500} 
                  height={300}
                  priority
                />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                        Simulador
                      <br />
                      #1
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles['item-info']}>
                <h4>Examen Simulador #1</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/time-icon-black.png" 
                        alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>4.5 horas</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>120 preguntas</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/simulador"}>Empezar examen</Link>
              </div>
            </div>
            





            
          </div>
        </div>
    </>
  );
};

export default ExamSimulators;
