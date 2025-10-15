"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import { useSimulatorStore } from "@/stores/simulatorStore";
import style from "./resultados.module.css";
import { useEffect, useState } from "react";
import { useDashboardStore } from "@/stores/progessStore";
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
    totalTime,
    timeLeft,
  } = useSimulatorStore();

  const { stats, setDashboardData, lastProgress } = useDashboardStore();

  const [currentUrl, setCurrentUrl] = useState("");

  const questions = normalizeSolvedQuestions();

  const date = new Date();
  const formattedDate = date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const cleanDate = formattedDate.replace(",", "");

  // 🧠 Esto solo se ejecuta en el cliente
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

  useEffect(() => {
    if (!simulator) return;

    const newProgress = {
      _id: crypto.randomUUID(),
      simulatorId: {
        _id: simulator._id,
        titulo: simulator.titulo,
        imagen: simulator.imagen,
      },
      score,
      totalScore,
      time: totalTime,
    };

    const newStats = {
      totalSimulations: (stats?.totalSimulations ?? 0) + 1,
      totalScore: (stats?.totalScore ?? 0) + score,
      totalPossible: (stats?.totalPossible ?? 0) + totalScore,
      totalTime: (stats?.totalTime ?? 0) + (totalTime - timeLeft),
      average:
        (((stats?.totalScore ?? 0) + score) /
          ((stats?.totalPossible ?? 0) + totalScore)) *
        100,
    };

    setDashboardData({
      stats: newStats,
      lastProgress: [newProgress, ...(lastProgress ?? [])].slice(0, 5),
    });
  }, [simulator]);

  const shareMessage = `¡Acabo de completar el simulador "${simulator?.titulo}" con ${score}/${totalScore}! 🎯`;

  return (
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
                  url={currentUrl}
                  quote={shareMessage}
                  hashtag="#Simuladum"
                >
                  <FacebookIcon size={50} round />
                </FacebookShareButton>

                <WhatsappShareButton url={currentUrl} title={shareMessage}>
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
          Este es un resumen preliminar de tu desempeño en el simulador. Aquí
          podrás visualizar tu puntaje obtenido, el porcentaje de aciertos y una
          visión general de cómo te fue en esta sesión antes de acceder al
          reporte completo.
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
              {index}
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

        <p className={style["report-p"]}>
          Puedes consultar un reporte más completo de tu desempeño en la sección
          de Resultados, donde encontrarás un análisis detallado de cada
          simulador que has realizado.
        </p>

        <div className={style["results-buttons"]}>
          <Link href={"/plataforma/mis-simuladores"} className={style["border"]}>
            Ir a simuladores
          </Link>
          <Link href={"/plataforma/resultados"}>Ver reportes completos</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
