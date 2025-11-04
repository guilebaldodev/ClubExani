"use client";

import style from "@/app/plataforma/resultados-preliminares/resultados.module.css";
import { useDashboardStore } from "@/stores/progessStore";
import Link from "next/link";
import { useParams } from "next/navigation";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const ResultPage = () => {
  const { id } = useParams<{ id: string }>();

  const { lastProgress } = useDashboardStore();

  const simulator = lastProgress.find((s) => s._id === id);

  console.log(simulator);

  const cleanDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate.replace(",", "");
  };

  const shareMessage = `¡Complete el simulador "${simulator?.simulatorId.titulo}" con ${simulator?.score}/${simulator?.totalScore}! 🎯`;

  return (
    <>
      {/* <div className={styles["container"]}>
      <div className={styles["results-title"]}>
        <h2>Reporte de Simulación</h2>
        <p>
          Aquí encontrarás un desglose completo de tu desempeño en este examen,
          incluyendo los aciertos obtenidos y  el puntaje total.
          </p>
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

    </div> */}

      <div className={style["results-container"]}>
        <div className={style["results-left"]}>
          <div className={style["result-left-header"]}>
            <h4>Resultados</h4>
            <h3>{simulator?.simulatorId.titulo}</h3>

            <div className={style["progress-bar"]}>
              <CircularProgressbar
                value={(simulator?.score / simulator?.totalScore) * 100}
                text={`${simulator?.score}`}
                strokeWidth={6}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#ffffff",
                  trailColor: "#c3d4e28e",
                  textSize: "25px",
                  pathTransitionDuration: 1.2,
                })}
              />
            </div>
          </div>

          <div className={style["result-left-footer"]}>
            <p>Comparte tu puntuación</p>

            <div className={style["shared-icons"]}>
              <FacebookShareButton
                url="https://www.simulandum.com/plataforma"
                hashtag="#Simulandum"
                title={shareMessage}
              >
                <FacebookIcon size={50} round />
              </FacebookShareButton>

              <WhatsappShareButton
                url={"https://www.simulandum.com/plataforma"}
                title={shareMessage}
              >
                <WhatsappIcon size={50} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>

        <div className={style["results-right"]}>
          <h3>Tu puntuación explicada</h3>

          <p>
            En esta sección encontrarás el{" "}
            <strong>resumen general de tus simulaciones</strong>, donde podrás
            ver tus puntajes obtenidos, el porcentaje de aciertos y las fechas
            en que realizaste cada examen. Esta vista te permite{" "}
            <strong>evaluar tu avance global</strong> y comparar tu desempeño en
            los distintos simuladores disponibles.
          </p>

          <div className={style["results-header"]}>
            <div className={style["results-header-title"]}>
              <div className={style["results-header-texts"]}>
                <h3>{simulator?.simulatorId.titulo}</h3>
                <p></p>
              </div>
            </div>

            <div className={style["results-header-right"]}>
              <h3>Aciertos</h3>
              <div>
                <p>
                  {simulator?.score}/{simulator?.totalScore}
                </p>
              </div>
            </div>
          </div>

          <div className={style["results-container-info"]}>
            <div className={style["results-data-info"]}>
              <div>
                <img src="/course/calendar-black.png" alt="calendar" />
                <p>{cleanDate(simulator?.createdAt)}</p>
              </div>
              <div>
                <img src="/course/question.png" alt="question" />
                <p>{simulator?.totalScore} preguntas</p>
              </div>
            </div>
          </div>

          <div className={style["results-question-list"]}>
            {simulator &&
              simulator?.solvedQuestions?.map((question, index) => (
                <div
                  key={question.questionId}
                  className={style["question-square"]}
                >
                  {index + 1}
                  <div
                    className={`${style["question-square-result"]} ${
                      question.selectedAnswer === -1
                        ? style["grey"]
                        : question.wasCorrect === true
                        ? style["green"]
                        : style["red"]
                    }`}
                  >
                    {question.wasCorrect === true ? (
                      <img src="/course/check-white.png" alt="Correcta" />
                    ) : (
                      <img
                        src="/course/close-white.png"
                        alt="Incorrecta o vacía"
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>

          <p>
            Recuerda que <strong>el detalle individual de las preguntas</strong>{" "}
            solo se muestra inmediatamente al finalizar una simulación. Esto
            garantiza la <strong>protección del contenido</strong> y un mejor{" "}
            <strong>rendimiento del sistema</strong>, manteniendo tus resultados
            generales siempre accesibles sin comprometer la integridad del
            material evaluativo.
          </p>

          <div className={style["results-buttons"]}>
            <Link
              href={"/plataforma/mis-simuladores"}
              className={style["border"]}
            >
              Ir a simuladores
            </Link>
            {/* <Link href={"/plataforma/resultados"}>Ver todos los reportes</Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
