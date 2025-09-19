"use client";
import Link from "next/link";
import styles from "./results.module.css";
import { useDashboardStore } from "@/stores/progessStore";
import Image from "next/image";

const ResultsPage = () => {

  const stats = useDashboardStore();

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
                            src="/course/grey-circle.png"
                            width={40}
                            height={40}
                          ></Image>
                        </div>
                        {progress.simulatorId.nombre}
                      </td>
                      <td className={styles["right"]}>{progress.score}/{progress.totalScore}</td>
                      <td className={styles["right"]}>{progress.time}</td>
                      <td className={`${styles["right"]}`}>
                        <Link
                          className={styles["grey"]}
                          href={`/plataforma/resultados/${progress._id}`}
                        >
                          Reporte
                        </Link>
                      </td>
                    </tr>
                  ))}
                <>
                  {[...Array((5-stats.lastProgress.length))].map((_, i) => (
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
      </div>
    </>
  );
};

export default ResultsPage;
