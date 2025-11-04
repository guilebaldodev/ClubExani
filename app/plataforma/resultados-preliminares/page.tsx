"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import { useSimulatorStore } from "@/stores/simulatorStore";
import style from "./resultados.module.css";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Page = () => {
  const { simulator, score, totalScore, normalizeSolvedQuestions, reset } =
    useSimulatorStore();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const [currentUrl, setCurrentUrl] = useState("");

  const questions = normalizeSolvedQuestions();

  const date = new Date();
  const formattedDate = date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const cleanDate = formattedDate.replace(",", "");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const shareMessage = `¡Acabo de completar el simulador "${simulator?.titulo}" con ${score}/${totalScore}! 🎯`;

  return (
    <>
    <div className={style["results-container"]}>
      <div className={style["results-left"]}>
        <div className={style["result-left-header"]}>
          <h4>Resultados</h4>
          <h3>{simulator?.titulo}</h3>

          <div className={style["progress-bar"]}>
            <CircularProgressbar
              value={(score / totalScore) * 100}
              text={`${score}`}
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
            {currentUrl && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>

      <div className={style["results-right"]}>
        <h3>Tu puntuación explicada</h3>

        <p>
          Este es un reporte completo de tu desempeño en el simulador. Aquí
          puedes revisar tu puntaje, el porcentaje de aciertos y el resultado
          individual de cada pregunta que resolviste durante esta sesión.
        </p>

        <div className={style["results-header"]}>
          <div className={style["results-header-title"]}>
            <div className={style["results-header-texts"]}>
              <h3>{simulator?.titulo}</h3>
              <p>{simulator?.examen}</p>
            </div>
          </div>

          <div className={style["results-header-right"]}>
            <h3>Aciertos</h3>
            <div>
              <p>
                {score}/{totalScore}
              </p>
            </div>
          </div>
        </div>

        <div className={style["results-container-info"]}>
          <div className={style["results-data-info"]}>
            <div>
              <img src="/course/calendar-black.png" alt="calendar" />
              <p>{cleanDate}</p>
            </div>
            <div>
              <img src="/course/question.png" alt="question" />
              <p>{totalScore} preguntas</p>
            </div>
          </div>
        </div>

        <div className={style["results-question-list"]}>
          {questions.map((question, index) => (
            <div key={question.questionId} className={style["question-square"]}>
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
                  <img src="/course/close-white.png" alt="Incorrecta o vacía" />
                )}
              </div>
            </div>
          ))}
        </div>
        <p>
          Debajo se muestra el{" "}
          <strong>detalle individual de cada pregunta</strong> de este
          simulador, con sus aciertos e intentos.
          <strong>
            {" "}
            Esta información solo estará disponible en este momento, justo al
            terminar tu examen
          </strong>
          , como parte del análisis inmediato de desempeño.
          <br />
          <br />
          Podrás consultar en cualquier momento el{" "}
          <strong>resumen general de tus simulaciones</strong> en la sección de
          resultados, pero <strong>no el desglose pregunta por pregunta</strong>
          . Esto se hace para proteger el contenido de los reactivos y mantener
          un óptimo rendimiento en la plataforma.
        </p>

        <div className={style["results-buttons"]}>
          <Link
            href={"/plataforma/mis-simuladores"}
            className={style["border"]}
          >
            Ir a simuladores
          </Link>
          <Link href={"/plataforma/resultados"}>Ver todos los reportes</Link>
        </div>
      </div>
    </div>
    
          {/* <div className={style["questions-container"]}>
        {questionResults.map((question, index) => (
          <div key={question.id} className={style["question-item"]}>
            <div className={style["question-item-icons"]}>
              <div>
                <img src="/course/question-black.png" alt="" />
                <p>Pregunta {index + 1}</p>
              </div>

              <div>
                <div
                  className={`${style["square"]} ${
                    question.status === "correct"
                      ? style["green"]
                      : question.status === "incorrect"
                      ? style["red"]
                      : style["grey"]
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

            <div className={style["question-item-text"]}>
              <p>{question.summary}</p>
            </div>

            <div className={style["question-item-button"]}>
              <a href="/plataforma/revision">Revisar</a>
            </div>
          </div>
        ))}
      </div>

      <div className={style["question-more"]}>
        <button>Cargar más</button>
      </div> */}
    
    
    </>
  );
};

export default Page;
