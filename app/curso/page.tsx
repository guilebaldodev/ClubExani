// import ProgressBar from "@ramonak/react-progress-bar";
import style from './curso.module.css'
import Image from "next/image";
import Link from "next/link";
import ProgressBarItem from '../ui/course/ProgressBar';


const CourseHome = () => {
    return ( 
    <>
           <div className={style['user-dashboard-container']}>
      <div className={style['dashborad-banner']}></div>

      <div className={style['dashboard-titles']}>
        <h2>
          ¡El primer paso hacia tu posgrado empieza con{" "}
          <span className={style['primary-color']}>Club</span>EXANI!
        </h2>
        <p>
          Las herramientas que ofrecemos te ayudarán a consolidar tus
          conocimientos y avanzar hacia tu posgrado.
        </p>
      </div>

      <div className={style['user-dashboard-columns']}>
        <div className={style['user-dashboard-info']}>
          <div className={style['user-dashboard-section']}>
            <div className={style['diagnostic-exam-card']}>
              <div className={style['diagnostic-titles']}>
                <div className={style['diagnostic-img']}>
                  <Image src="/course/rating-svg.svg" alt="" width={55} height={56.5} />
                </div>
                <p>Examen diagnóstico #1</p>
              </div>

              <div className={style['diagnostic-info']}>
                <div className={style['diagnostic-duo']}>
                  <Image src="/course/time-icon.png" alt="Tiempo" width={20} height={20} />
                  <p>20 minutos</p>
                </div>
                <div className={style['diagnostic-duo']}>
                  <Image src="/course/question-icon.png" alt="Preguntas" width={20} height={20} />
                  <p>40 preguntas</p>
                </div>
              </div>
              <div className={style['diagnostic-button']}>
                <button>Empezar</button>
              </div>
            </div>
          </div>

          <div className={style['user-dashboard-section']}>
            <h3>Materias</h3>
            <div className={style['user-dashboards-cards']}>
              <div className={style['user-dashboard-card']}>
                <div className={style['dashboard-card-text']}>
                  <p className={style['title-card']}>Pensamiento Matemático</p>
                  <p className={style['subtitle']}>18 Lecciones</p>
                </div>

                <div className={style['dashboard-img-container']}>
                  <div className={style['dashboard-img']}>
                    <Image src="/course/mathematics-icon.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className={style['user-dashboard-card']}>
                <div className={style['dashboard-card-text']}>
                  <p className={style['title-card']}>Metodología de la investigación</p>
                  <p style={{ color: "#0056D2" }} className={style['subtitle']}>
                    22 Lecciones
                  </p>
                </div>

                <div className={style['dashboard-img-container']}>
                  <div
                    style={{ backgroundColor: "#0056D2" }}
                    className={style['dashboard-img']}
                  >
                    <Image src="/course/methodology-icon.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className={style['user-dashboard-card']}>
                <div className={style['dashboard-card-text']}>
                  <p className={style['title-card']}>Redacción indirecta</p>
                  <p style={{ color: "#1ABC9C" }} className={style['subtitle']}>
                    23 Lecciones
                  </p>
                </div>

                <div className={style['dashboard-img-container']}>
                  <div
                    style={{ backgroundColor: "#1ABC9C" }}
                    className={style['dashboard-img']}
                  >
                    <Image src="/course/writing-icon.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className={style['user-dashboard-card']}>
                <div className={style['dashboard-card-text']}>
                  <p className={style['title-card']}>Comprensión lectora</p>
                  <p style={{ color: "#F3B942" }} className={style['subtitle']}>
                    15 Lecciones
                  </p>
                </div>

                <div className={style['dashboard-img-container']}>
                  <div
                    style={{ backgroundColor: "#F3B942" }}
                    className={style['dashboard-img']}
                  >
                    <Image src="/course/books-icon.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style['dashboard-section']}>
            <h3>Herramientas</h3>

            <div className={style['tools-container']}>
              <div className={style['tool-card']}>
                <div className={style['tool-container']}>
                  <div className={`${style['tool-img']} ${style['circle-div']}`}>
                    <Image src="/course/writing-icon.svg" alt="" width={20} height={20} />
                  </div>
                  <div className={style['tool-info']}>
                    <p>Simuladores</p>
                  </div>
                </div>
                <div className={style['tool-forward']}>
                  <Image src="/course/forward-icon.png" alt="Forward" width={20} height={20} />
                </div>
              </div>

              <div className={style['tool-card']}>
                <div className={style['tool-container']}>
                  <div className={`${style['tool-img']} ${style['circle-div']}`}>
                    <Image src="/course/test-icon-white.png" alt="" width={20} height={20} />
                  </div>
                  <div className={style['tool-info']}>
                    <p>Cuestionarios</p>
                  </div>
                </div>
                <div className={style['tool-forward']}>
                  <Image src="/course/forward-icon.png" alt="Forward" width={20} height={20} />
                </div>
              </div>

              <div className={style['tool-card']}>
                <div className={style['tool-container']}>
                  <div className={`${style['tool-img']} ${style['circle-div']}`}>
                    <Image src="/course/open-book-white.png" alt="" width={20} height={20} />
                  </div>
                  <div className={style['tool-info']}>
                    <p>Lecciones</p>
                  </div>
                </div>
                <div className={style['tool-forward']}>
                  <Image src="/course/forward-icon.png" alt="Forward" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style['user-dashboard-progress']}>
          <h3>Tu progreso</h3>
          <div className={style['progress-more']}>
            <Link href="/progreso">Ver más</Link>
          </div>

          <div className={style['dashboard-progress-items']}>
            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Simuladores</p>
                <p>8/10</p>
              </div>

            <ProgressBarItem color='blue' porcentage={80}></ProgressBarItem>

            </div>
            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Cuestionarios</p>
                <p>7/7</p>
              </div>
                <ProgressBarItem porcentage={60} color='blue'></ProgressBarItem>
            </div>

            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Metodología</p>
                <p>7/22</p>
              </div>
              <ProgressBarItem porcentage={30} color='blue'></ProgressBarItem>

            </div>
            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Redacción</p>
                <p>7/140</p>
              </div>
              <ProgressBarItem porcentage={60} color='blue'></ProgressBarItem>
              
            </div>

            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Compresión</p>
                <p>15/20</p>
              </div>
              <ProgressBarItem porcentage={60} color='blue'></ProgressBarItem>
            
            </div>

            <div className={style['progress-item']}>
              <div className={style['progress-item-titles']}>
                <p>Pensamiento</p>
                <p>14/15</p>
              </div>
              <ProgressBarItem porcentage={60} color='blue'></ProgressBarItem>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </> );
}
 
export default CourseHome;