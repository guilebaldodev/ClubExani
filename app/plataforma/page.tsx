"use client";

import { useUserStore } from "@/stores/userStore";
import style from "./curso.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import { useDashboardStore } from "@/stores/progessStore";

const CourseHome = () => {
  const router = useRouter();

  const { openSignIn } = useClerk();

  const { nombre } = useUserStore();

  const { isSignedIn } = useUser();

  const statsInfo = useDashboardStore();



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
                    {isSignedIn ? (
                      <>
                        <h4 className={style["title-card"]}>
                          ¡Hola de nuevo {nombre}!
                        </h4>
                        <h5>
                          Hoy es{" "}
                          {new Intl.DateTimeFormat("es-MX", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }).format(new Date())}
                        </h5>
                        <p>
                          “El éxito es la suma de pequeños esfuerzos repetidos
                          cada día.”
                        </p>
                        <button
                          onClick={() =>
                            router.push("/plataforma/mis-simuladores")
                          }
                        >
                          Empezar un examen
                        </button>
                      </>
                    ) : (
                      <>
                        <h4 className={style["title-card"]}>
                          ¡Bienvenido a Simulandum!
                        </h4>
                        <h5>
                          Hoy es{" "}
                          {new Intl.DateTimeFormat("es-MX", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }).format(new Date())}
                        </h5>
                        <p>
                          Inicia sesión para acceder a tus estadísticas y
                          aprovechar todas las funciones de la plataforma.
                        </p>

                        <button onClick={() => openSignIn()}>
                          Iniciar sesion
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className={style["user-dashboard-number"]}>
                <p>{isSignedIn ? <>{statsInfo.stats?.average.toFixed(0)}</> : <>0</>}%</p>
                <h4>Tu promedio acumulado</h4>
                <div>
                  <button onClick={()=>{
                    router.push("/plataforma/resultados")
                  }}>Ver historial</button>
                </div>
              </div>
            </div>

            <div className={style["user-dashboard-data"]}>
              <div>
                <h4>
                  {isSignedIn ? (
                    <>{statsInfo.stats?.totalSimulations}</>
                  ) : (
                    <>0</>
                  )}
                </h4>
                <p>Simulaciones</p>
              </div>
              <div>
                <h4>
                  {isSignedIn ? (
                    
<>
  {((statsInfo.stats?.totalTime ?? 0) / 3600) === 0
    ? 0
    : ((statsInfo.stats?.totalTime ?? 0) / 3600).toFixed(1)}
</>
                    
                  ) : (
                    <>0</>
                  )}
                </h4>
                <p>Horas</p>
              </div>

              <div>
                <h4>
                  {isSignedIn ? <>{statsInfo.stats?.totalScore}</> : <>0</>}
                </h4>
                <p>Aciertos</p>
              </div>

              <div>
                <h4>
                  {isSignedIn ? (
                    <>
                      {(statsInfo.stats?.totalPossible ?? 0) -
                        (statsInfo.stats?.totalScore ?? 0)}
                    </>
                  ) : (
                    <>0</>
                  )}
                </h4>
                <p>Errores</p>
              </div>
            </div>

            <div className={style["user-dashboard-historial"]}>
              <h3>Ultimas Simulaciones</h3>

              {isSignedIn ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Examen</th>
                        <th className={style["right"]}>Aciertos</th>
                        <th className={style["right"]}>Duracion</th>
                      </tr>
                    </thead>

                    <tbody>
                      {statsInfo.lastProgress.length > 0 ? (
                        <>
                          {statsInfo.lastProgress.slice(0, 3).map((sim) => (
                            <>
                              <tr>
                                <td>{sim.simulatorId.titulo}</td>
                                <td className={style["right"]}>
                                  {sim.score}/{sim.totalScore}
                                </td>
                                <td className={style["right"]}>
                                  
                                  {Math.round(sim.time / 60)} minutos

                                </td>
                              </tr>
                            </>
                          ))}
                        </>
                      ) : (
                        <>
                          <tr>
                            <td>------</td>
                            <td className={style["right"]}>------</td>
                            <td className={style["right"]}>-----</td>
                          </tr>

                          <tr>
                            <td>------</td>
                            <td className={style["right"]}>------</td>
                            <td className={style["right"]}>-----</td>
                          </tr>


                          <tr>
                            <td>------</td>
                            <td className={style["right"]}>------</td>
                            <td className={style["right"]}>-----</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <div className={style["login-div"]}>
                    <Image
                      width={100}
                      height={100}
                      src={"/course/login.png"}
                      alt="login"
                    ></Image>
                    <p>
                      Inicia sesión o regístrate para acceder a tus estadísticas
                      y aprovechar todas las funciones de la plataforma.
                    </p>
                    <button onClick={() => openSignIn()}>
                      Iniciar sesión / Registrarse
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className={style["dashboard-section"]}>
              <h3>Herramientas</h3>

              <div className={style["tools-container"]}>
                <div
                  onClick={() => router.push("/plataforma/mis-simuladores")}
                  className={style["tool-card"]}
                >
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

                <div
                  onClick={() => router.push("/plataforma/resultados")}
                  className={style["tool-card"]}
                >
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

                <div
                  onClick={() => router.push("/plataforma/monedas")}
                  className={style["tool-card"]}
                >
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
