import styles from "./results.module.css"

const ResultsPage = () => {
  return (
    <>
<div className={styles["container"]}>
  <div className={styles["results-title"]}>
    <h2>Mis Resultados</h2>
    <p>
      En esta sección encontrarás los resultados de tus últimas simulaciones
      realizadas. Al hacer clic en cualquiera de ellos podrás acceder al reporte
      detallado de ese examen en específico.
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
        <tr>
          <td className={styles["td-image"]}>
            <div className={styles["table-img"]}>
              <img src="/simuladores/exani-iii-1.png" alt="" />
            </div>
            EXANI-III Diagnóstico
          </td>
          <td className={styles["right"]}>95/120</td>
          <td className={styles["right"]}>120 minutos</td>
          <td className={styles["right"]}>
            <button>Ver Reporte</button>
          </td>
        </tr>

        <tr>
          <td className={styles["td-image"]}>
            <div className={styles["table-img"]}>
              <img src="/simuladores/exani-iii-1.png" alt="" />
            </div>
            EXANI-III Diagnóstico
          </td>
          <td className={styles["right"]}>95/120</td>
          <td className={styles["right"]}>120 minutos</td>
          <td className={styles["right"]}>
            <button>Ver Reporte</button>
          </td>
        </tr>

        <tr>
          <td className={styles["td-image"]}>
            <div className={styles["table-img"]}>
              <img src="/simuladores/exani-iii-1.png" alt="" />
            </div>
            EXANI-III Diagnóstico
          </td>
          <td className={styles["right"]}>95/120</td>
          <td className={styles["right"]}>120 minutos</td>
          <td className={styles["right"]}>
            <button>Ver Reporte</button>
          </td>
        </tr>

        <tr>
          <td className={styles["td-image"]}>
            <div className={styles["table-img"]}>
              <img src="/simuladores/exani-iii-1.png" alt="" />
            </div>
            EXANI-III Diagnóstico
          </td>
          <td className={styles["right"]}>95/120</td>
          <td className={styles["right"]}>120 minutos</td>
          <td className={styles["right"]}>
            <button>Ver Reporte</button>
          </td>
        </tr>

        <tr>
          <td className={styles["td-image"]}>
            <div className={styles["table-img"]}>
              <img src="/simuladores/exani-iii-1.png" alt="" />
            </div>
            EXANI-III Diagnóstico
          </td>
          <td className={styles["right"]}>95/120</td>
          <td className={styles["right"]}>120 minutos</td>
          <td className={styles["right"]}>
            <button>Ver Reporte</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </>
  );
};

export default ResultsPage;
