import styles from "./result.module.css"

export const questionResults = [
  { id: 1, status: "correct", summary: "Suma de fracciones con diferente denominador" },
  { id: 2, status: "incorrect", summary: "Resolver una ecuación lineal con incógnita" },
  { id: 3, status: "unanswered", summary: "Identificar múltiplos de un número" },
  { id: 4, status: "correct", summary: "Calcular área de un triángulo" },
  { id: 5, status: "incorrect", summary: "Problema de regla de tres simple" },
  { id: 6, status: "unanswered", summary: "Número primo o compuesto" },
  { id: 7, status: "correct", summary: "Interpretación de gráfica lineal" },
  { id: 8, status: "incorrect", summary: "Operaciones con potencias" },
  { id: 9, status: "unanswered", summary: "Conversión de fracción a decimal" },
  { id: 10, status: "correct", summary: "Resolución de sistema de ecuaciones" },
  { id: 11, status: "incorrect", summary: "Identificar valor absoluto" },
  { id: 12, status: "unanswered", summary: "Perímetro de un cuadrado" },
  { id: 13, status: "correct", summary: "Simplificación de fracciones" },
  { id: 14, status: "incorrect", summary: "Producto notable: binomio al cuadrado" },
  { id: 15, status: "unanswered", summary: "Porcentaje de una cantidad" },
  { id: 16, status: "correct", summary: "Ángulos complementarios" },
  { id: 17, status: "incorrect", summary: "Expresiones algebraicas equivalentes" },
  { id: 18, status: "unanswered", summary: "Área de un círculo" },
  { id: 19, status: "correct", summary: "Identificar el máximo común divisor (MCD)" },
  { id: 20, status: "incorrect", summary: "Resolver una desigualdad" },
  { id: 21, status: "unanswered", summary: "Volumen de un cubo" },
  { id: 22, status: "correct", summary: "Operaciones con raíces cuadradas" },
  { id: 23, status: "incorrect", summary: "Media aritmética de un conjunto" },
  { id: 24, status: "unanswered", summary: "Identificar números irracionales" },
  { id: 25, status: "correct", summary: "Factorización de un trinomio" },
  { id: 26, status: "incorrect", summary: "Pendiente de una recta" },
  { id: 27, status: "unanswered", summary: "Conversión de unidades de longitud" },
  { id: 28, status: "correct", summary: "Resolver una proporción" },
  { id: 29, status: "incorrect", summary: "Probabilidad simple de un evento" },
  { id: 30, status: "unanswered", summary: "Identificar un polígono regular" },
];


const ResultPage = () => {
  return (
    <>
    <div className={styles["container"]}>
      <div className={styles["results-title"]}>
        <h2>Reporte de Simulación</h2>
        <p>
          Aquí encontrarás un desglose completo de tu desempeño en este examen,
          incluyendo los aciertos obtenidos, el puntaje total y los detalles de
          cada respuesta marcada.
        </p>
      </div>

      <div className={styles["results-header"]}>
        <div className={styles["results-header-title"]}>
          <div className={styles["circle"]}>
            <img src="/simuladores/exani-iii-1.png" alt="" />
          </div>

          <div className={styles["results-header-texts"]}>
            <h3>Simulador EXANI-III #1</h3>
            <p>Ceneval</p>
          </div>
        </div>

        <div className={styles["results-header-right"]}>
          <h3>Aciertos</h3>
          <div>
            <p>50/200</p>
          </div>
        </div>
      </div>

      <div className={styles["results-container"]}>
        <div className={styles["results-data-info"]}>
          <div>
            <img src="/course/calendar-black.png" alt="" />
            <p>15 de agosto de 2025</p>
          </div>
          <div>
            <img src="/course/question.png" alt="" />
            <p>150 preguntas</p>
          </div>
        </div>
      </div>

      <div className={styles["results-question-list"]}>
        {questionResults.map((question) => (
          <div key={question.id} className={styles["question-square"]}>
            {question.id}

            <div
              className={`${styles["question-square-result"]} ${
                question.status === "correct"
                  ? styles["green"]
                  : question.status === "incorrect"
                  ? styles["red"]
                  : styles["grey"]
              }`}
            >
              {question.status === "correct" ? (
                <img src="/course/check-white.png" alt="Correcta" />
              ) : (
                <img src="/course/close-white.png" alt="Incorrecta o vacía" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles["result-squares"]}>
        <div>
          <div className={`${styles["square"]} ${styles["green"]}`}> </div>
          <p>20 Correctas · 70%</p>
        </div>

        <div>
          <div className={`${styles["square"]} ${styles["red"]}`}> </div>
          <p>5 Incorrectas · 15%</p>
        </div>

        <div>
          <div className={`${styles["square"]} ${styles["grey"]}`}> </div>
          <p>5 No contestadas · 15%</p>
        </div>
      </div>

      <div className={styles["questions-container"]}>
        {questionResults.map((question, index) => (
          <div key={question.id} className={styles["question-item"]}>
            <div className={styles["question-item-icons"]}>
              <div>
                <img src="/course/question-black.png" alt="" />
                <p>Pregunta {index + 1}</p>
              </div>

              <div>
                <div
                  className={`${styles["square"]} ${
                    question.status === "correct"
                      ? styles["green"]
                      : question.status === "incorrect"
                      ? styles["red"]
                      : styles["grey"]
                  }`}
                ></div>
                <p>
                  {question.status === "correct"
                    ? "Correcta"
                    : question.status === "incorrect"
                    ? "Incorrecta"
                    : "No contestada"}
                </p>
              </div>
            </div>

            <div className={styles["question-item-text"]}>
              <p>{question.summary}</p>
            </div>

            <div className={styles["question-item-button"]}>
              <button>Revisar</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["question-more"]}>
        <button>Cargar más</button>
      </div>
    </div>
    </>
  );
};

export default ResultPage;
