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
  const {
    simulator,
    score,
    totalScore,
    normalizeSolvedQuestions,
    reset,
  } = useSimulatorStore();

  const [localSimulator, setLocalSimulator] = useState<any>(null);
  const [localQuestions, setLocalQuestions] = useState<any[]>([]);
  const [localScore, setLocalScore] = useState<number>(0);
  const [localTotalScore, setLocalTotalScore] = useState<number>(0);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (simulator) {


      const normalized = normalizeSolvedQuestions();
      const dataToSave = {
        simulator,
        score,
        totalScore,
        questions: normalized,
      };
      localStorage.setItem("lastSimulatorData", JSON.stringify(dataToSave));
      setLocalSimulator(simulator);
      setLocalQuestions(normalized);
      setLocalScore(score);
      setLocalTotalScore(totalScore);



    } else {
      const stored = localStorage.getItem("lastSimulatorData");
      if (stored) {
        const parsed = JSON.parse(stored);
        setLocalSimulator(parsed.simulator);
        setLocalQuestions(parsed.questions || []);
        setLocalScore(parsed.score || 0);
        setLocalTotalScore(parsed.totalScore || 0);
      }
    }

    return () => {
      reset();
    };
  }, [simulator, score, totalScore, normalizeSolvedQuestions, reset]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);

      const handlePopState = (e: PopStateEvent) => {
        e.preventDefault();
        window.history.pushState(null, "", window.location.href);
      };

      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);

      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  if (!localSimulator) {
    return <p>No hay información disponible del examen.</p>;
  }

  const date = new Date();
  const formattedDate = date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const cleanDate = formattedDate.replace(",", "");

  const shareMessage = `¡Acabo de completar el simulador "${localSimulator?.titulo}" con ${localScore}/${localTotalScore}! 🎯`;

  const questions = localQuestions;

  return (
    <>
      <div className={style["results-container"]}>
        <div className={style["results-left"]}>
          <div className={style["result-left-header"]}>
            <h4>Resultados</h4>
            <h3>{localSimulator?.titulo}</h3>

            <div className={style["progress-bar"]}>
              <CircularProgressbar
                value={(localScore / localTotalScore) * 100}
                text={`${localScore}`}
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
                    url="https://www.simulandum.com/plataforma"
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
                <h3>{localSimulator?.titulo}</h3>
                <p>{localSimulator?.examen}</p>
              </div>
            </div>

            <div className={style["results-header-right"]}>
              <h3>Aciertos</h3>
              <div>
                <p>
                  {localScore}/{localTotalScore}
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
                <p>{localTotalScore} preguntas</p>
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
            <strong>resumen general de tus simulaciones</strong> en la sección
            de resultados, pero{" "}
            <strong>no el desglose pregunta por pregunta</strong>.
          </p>

          <div className={style["results-buttons"]}>
            <Link href={"/plataforma/mis-simuladores"} className={style["border"]}>
              Ir a simuladores
            </Link>
            <Link href={"/plataforma/resultados"}>Ver todos los reportes</Link>
          </div>
        </div>
      </div>

      <div className={style["questions-container"]}>
        {questions.map((question, index) => (
          <div key={question.questionId} className={style["question-item"]}>
            <div className={style["question-item-icons"]}>
              <div>
                <img src="/course/question-black.png" alt="" />
                <p>Pregunta {index + 1}</p>
              </div>

              <div>
                <div
                  className={`${style["square"]} ${
                    question.wasCorrect === true
                      ? style["green"]
                      : question.selectedAnswer === -1
                      ? style["grey"]
                      : style["red"]
                  }`}
                ></div>
                <p>
                  {question.wasCorrect === true
                    ? "Correcta"
                    : question.selectedAnswer === -1
                    ? 
                    "No contestada"
                    : 
                    "Incorrecta"
                  }
                </p>
              </div>
            </div>

            <div className={style["question-item-text"]}>
              <p>{question.resumen}</p>
            </div>

            <div className={style["question-item-button"]}>
              <Link href={`/plataforma/pregunta/${question.questionId}`}>Revisar</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
