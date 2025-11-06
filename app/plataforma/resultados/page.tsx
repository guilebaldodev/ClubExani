"use client";
import Link from "next/link";
import styles from "./results.module.css";
import { useDashboardStore } from "@/stores/progessStore";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const ResultsPage = () => {
  const stats = useDashboardStore();

  const { isSignedIn } = useUser();



  useEffect(()=>{
    localStorage.removeItem("lastSimulatorData");
  },[])

  
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["results-title"]}>
          <h2>Mis Resultados</h2>
          <p>
            En esta sección encontrarás los resultados de tus últimas
            simulaciones realizadas. Al hacer clic en cualquiera de ellos podrás
            acceder al reporte detallado de ese examen en específico.
          </p>
        </div>


{isSignedIn ? (
  <>
    <div className={styles["movil-items"]}>
      {stats.lastProgress.map((progress, i) => (
        <div className={styles["movil-item"]} key={i}>
          <div className={styles["movil-item-titles"]}>
            <div className={styles["movil-item-circle"]}>
              <img src={progress.simulatorId.imagen} alt="simulador" />
            </div>
            <h3>{progress.simulatorId.titulo}</h3>
          </div>

          <div className={styles["movil-item-stats"]}>
            <div className={styles["movil-item-stat"]}>
              <div className={styles["green"]}></div>
              <p>{progress.score} Aciertos</p>
            </div>

            <div className={styles["movil-item-stat"]}>
              <div className={styles["red"]}></div>
              <p>{progress.totalScore - progress.score} Errores</p>
            </div>
          </div>

          <div className={styles["movil-item-time"]}>
            <img src="/course/stopwatch.png" alt="tiempo" />
            <p>{Math.ceil(progress.time / 60)} minutos</p>
          </div>

          <div className={styles["movil-item-buttons"]}>
            <Link href={`/plataforma/resultados/${progress._id}`}>Reporte</Link>
          </div>
        </div>
      ))}

      {[...Array(5 - stats.lastProgress.length)].map((_, i) => (
        <div
          className={`${styles["movil-item"]} ${styles["no-item"]}`}
          key={i}
        >
          <div className={styles["movil-item-titles"]}>
            <div className={styles["movil-item-circle"]}>
              <img src="/course/grey-circle.png" alt="simulador" />
            </div>
            <h3>------------</h3>
          </div>

          <div className={styles["movil-item-stats"]}>
            <div className={styles["movil-item-stat"]}>
              <div className={styles["green"]}></div>
              <p>--- Aciertos</p>
            </div>

            <div className={styles["movil-item-stat"]}>
              <div className={styles["red"]}></div>
              <p>--- Errores</p>
            </div>
          </div>

          <div className={styles["movil-item-time"]}>
            <img src="/course/stopwatch.png" alt="tiempo" />
            <p>--- minutos</p>
          </div>

          <div className={styles["movil-item-buttons"]}>
            <Link className={styles["grey"]} href={`/plataforma/resultados`}>
              Reporte
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
) : (
  <>
    <div className={styles["movil-items"]}>
      {[...Array(5)].map((_, i) => (
        <div
          className={`${styles["movil-item"]} ${styles["no-item"]}`}
          key={i}
        >
          <div className={styles["movil-item-titles"]}>
            <div className={styles["movil-item-circle"]}>
              <img src="/course/grey-circle.png" alt="simulador" />
            </div>
            <h3>------------</h3>
          </div>

          <div className={styles["movil-item-stats"]}>
            <div className={styles["movil-item-stat"]}>
              <div className={styles["green"]}></div>
              <p>--- Aciertos</p>
            </div>

            <div className={styles["movil-item-stat"]}>
              <div className={styles["red"]}></div>
              <p>--- Errores</p>
            </div>
          </div>

          <div className={styles["movil-item-time"]}>
            <img src="/course/stopwatch.png" alt="tiempo" />
            <p>--- minutos</p>
          </div>

          <div className={styles["movil-item-buttons"]}>
            <Link className={styles["grey"]} href={`/plataforma/resultados`}>
              Reporte
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
)}

        {isSignedIn ? (
          <>
            <div className={styles["user-dashboard-historial"]}>
              <table>
                <thead>
                  <tr>
                    <th>Examen</th>
                    <th className={styles["right"]}>Aciertos</th>
                    <th className={styles["right"]}>Duración</th>
                    <th className={styles["right"]}>Reporte de examen</th>
                  </tr>
                </thead>

                <tbody>
                  {stats.lastProgress.map((progress, i) => (
                    <tr key={i}>
                      <td className={styles["td-image"]}>
                        <div className={styles["table-img"]}>
                          <Image
                            alt="grey"
                            src={progress.simulatorId.imagen}
                            width={40}
                            height={40}
                          ></Image>
                        </div>
                        {progress.simulatorId.titulo}
                      </td>
                      <td className={styles["right"]}>
                        {progress.score}/{progress.totalScore}
                      </td>
                      <td className={styles["right"]}>
                        {Math.ceil(progress.time / 60)} min
                      </td>
                      <td className={`${styles["right"]}`}>
                        <Link
                          className={styles[""]}
                          href={`/plataforma/resultados/${progress._id}`}
                        >
                          Reporte
                        </Link>
                      </td>
                    </tr>
                  ))}
                  <>
                    {[...Array(5 - stats.lastProgress.length)].map((_, i) => (
                      <tr key={i}>
                        <td className={styles["td-image"]}>
                          <div className={styles["table-img"]}>
                            <img src="/course/grey-circle.png" alt="" />
                          </div>
                          -------
                        </td>
                        <td className={styles["right"]}>-----</td>
                        <td className={styles["right"]}>-----</td>
                        <td className={`${styles["right"]}`}>
                          <Link
                            className={styles["grey"]}
                            href="/plataforma/resultados"
                          >
                            Reporte
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className={styles["user-dashboard-historial"]}>
              <table>
                <thead>
                  <tr>
                    <th>Examen</th>
                    <th className={styles["right"]}>Aciertos</th>
                    <th className={styles["right"]}>Duración</th>
                    <th className={styles["right"]}>Reporte de examen</th>
                  </tr>
                </thead>

                <tbody>
                  <>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i}>
                        <td className={styles["td-image"]}>
                          <div className={styles["table-img"]}>
                            <img src="/course/grey-circle.png" alt="" />
                          </div>
                          -------
                        </td>
                        <td className={styles["right"]}>-----</td>
                        <td className={styles["right"]}>-----</td>
                        <td className={`${styles["right"]}`}>
                          <Link
                            className={styles["grey"]}
                            href="/plataforma/resultados"
                          >
                            Reporte
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ResultsPage;
