"use client"

import style from "./curso.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const CourseHome = () => {
  const router =useRouter()
  return (
    <>
      <div className={style["user-dashboard-container"]}>
        <div className={style["dashborad-banner"]}></div>

        <div className={style["dashboard-titles"]}>
          <h2>
            ¡Tu camino al éxito académico comienza con{" "}
            <span className={style["primary-color"]}>Simulandum</span>!
          </h2>
          <p>
            Accede a simuladores realistas, repasa con propósito y mejora tu
            desempeño en cada intento. Prepárate de forma inteligente para
            cualquier examen.
          </p>
        </div>

        <div className={style["user-dashboard-columns"]}>
          <div className={style["user-dashboard-info"]}>
          <h3>Tu informacion</h3>

            <div className={style["user-dashboard-section"]}>
              <div className={style["user-dashboards-cards"]}>
                <div className={style["user-dashboard-card"]}>
                  <div className={style["dashboard-img-container"]}>
                    <div className={style["dashboard-img"]}>
                      <Image
                        src="/course/calendar-icon.png"
                        alt=""
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>

                  <div className={style["dashboard-card-text"]}>
                    <h4 className={style["title-card"]}>
                      ¡Hola de nuevo!
                    </h4>
                    <h5>Hoy es 25 de agosto de 2025</h5>

                    <p>
                        “El éxito es la suma de pequeños esfuerzos repetidos cada día.”
                    </p>

                    <button>Empezar un examen</button>

                  </div>
                </div>


              </div>

              <div className={style["user-dashboard-number"]}>

                  <p>50%</p>
                  <h4>Tu promedio acumulado</h4>
                  <div>
                    <button>Ver historial</button>
                  </div>

              </div>

            </div>

              <div className={style["user-dashboard-data"]}>
              
                <div>
                  <h4>25</h4>
                  <p>Simulaciones</p>
                </div>

                                <div>
                  <h4>160</h4>
                  <p>Horas</p>
                </div>

                                <div>
                  <h4>3500</h4>
                  <p>Aciertos</p>
                </div>

                                <div>
                  <h4>4500</h4>
                  <p>Errores</p>
                </div>

              </div>


              <div className={style["user-dashboard-historial"]}>
                <h3>Ultimas Simulaciones</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Examen</th>
                      <th className={style["right"]}>Aciertos</th>
                      <th className={style["right"]}>Duracion</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        EXANI-III Dianóstico
                      </td>
                      <td className={style["right"]}>95/120</td>
                      <td className={style["right"]}>120 minutos</td>
                    </tr>

                                        <tr>
                      <td>
                        EXANI-III Dianóstico
                      </td>
                      <td className={style["right"]}>95/120</td>
                      <td className={style["right"]}>120 minutos</td>
                    </tr>

                                        <tr>
                      <td>
                        EXANI-III Dianóstico
                      </td>
                      <td className={style["right"]}>95/120</td>
                      <td className={style["right"]}>120 minutos</td>
                    </tr>




                    
                  </tbody>

                </table>

              </div>



            <div className={style["dashboard-section"]}>
              <h3>Herramientas</h3>

              <div className={style["tools-container"]}>
                <div onClick={()=>router.push("/plataforma/mis-simuladores")} className={style["tool-card"]}>
                  <div className={style["tool-container"]}>
                    <div
                      className={`${style["tool-img"]} ${style["circle-div"]}`}
                    >
                      <Image
                        src="/course/writing-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={style["tool-info"]}>
                      <p>Mis Simuladores</p>
                    </div>
                  </div>
                  <div className={style["tool-forward"]}>
                    <Image
                      src="/course/forward-icon.png"
                      alt="Forward"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                <div onClick={()=>router.push("/plataforma/resultados")} className={style["tool-card"]}>
                  <div className={style["tool-container"]}>
                    <div
                      className={`${style["tool-img"]} ${style["circle-div"]}`}
                    >
                      <Image
                        src="/course/test-icon-white.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={style["tool-info"]}>
                      <p>Resultados</p>
                    </div>
                  </div>
                  <div className={style["tool-forward"]}>
                    <Image
                      src="/course/forward-icon.png"
                      alt="Forward"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                <div onClick={()=>router.push("/plataforma/monedas")} className={style["tool-card"]}>
                  <div className={style["tool-container"]}>
                    <div
                      className={`${style["tool-img"]} ${style["circle-div"]}`}
                    >
                      <Image
                        src="/course/white-coin.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={style["tool-info"]}>
                      <p>Comprar Monedas</p>
                    </div>
                  </div>
                  <div className={style["tool-forward"]}>
                    <Image
                      src="/course/forward-icon.png"
                      alt="Forward"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHome;
