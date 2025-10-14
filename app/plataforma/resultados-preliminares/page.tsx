"use client";

import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { questionResults } from "../resultados/[id]/page";
import Link from "next/link";
import { useSimulatorStore } from "@/stores/simulatorStore";

const Page = () => {

  const {
    simulator,
    formatTime,
    timeLeft,
    score,
    totalScore,
    normalizeSolvedQuestions
  } = useSimulatorStore();

  const questions= normalizeSolvedQuestions()

  const date = new Date()

const formattedDate = date.toLocaleDateString("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

const cleanDate = formattedDate.replace(",", "")

  return (
    <>
      <div className="results-container">
        <div className="results-left">
          <div className="result-left-header">
            <h4>Resultados</h4>
            <h3>{simulator?.titulo}</h3>

            <div className="progress-bar">
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

          <div className="result-left-footer">

                <p>
                    Comparte tu puntuación
                </p>

                <div className="shared-icons">
                    <div className="shared-icon">
                        <Image src="/course/facebook-icon.png" width={20} height={20}  alt="facebook"></Image>
                    </div>

                    <div className="shared-icon">
                        <Image src="/course/whatsapp-icon.png" width={20} height={20}  alt="facebook"></Image>
                    </div>

                </div>

                                

          </div>
        </div>


        <div className="results-right">
                <h3>Tu puntacion explicada</h3>

                <p>Este es un resumen preliminar de tu desempeño en el simulador. Aquí podrás visualizar tu puntaje obtenido, el porcentaje de aciertos y una visión general de cómo te fue en esta sesión antes de acceder al reporte completo.</p>
        

      <div className="results-header">
        <div className="results-header-title">
       
          <div className="results-header-texts">
            <h3>{simulator?.titulo}</h3>
            <p>{simulator?.examen}</p>
          </div>
        </div>

        <div className="results-header-right">
          <h3>Aciertos</h3>
          <div>
            <p>{score}/{totalScore}</p>
          </div>
        </div>
      </div>

      <div className={"results-container-info"}>
        <div className={"results-data-info"}>
          <div>
            <img src="/course/calendar-black.png" alt="" />
            <p>{cleanDate}</p>
          </div>
          <div>
            <img src="/course/question.png" alt="" />
            <p>{totalScore} preguntas</p>
          </div>
        </div>
      </div>

      <div className={"results-question-list"}>
        {questions.map((question,index) => (
          <div key={question.questionId} className={"question-square"}>
            {index}

            <div
              className={`question-square-result ${
                // question.wasCorrect === true
                //   ? "green"
                //   : question.wasCorrect === false
                //   ? "red"
                //   : "grey"

                question.selectedAnswer === -1 
                ? "grey"
                : question.wasCorrect === true? "green" : "red"

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

        <p className="report-p">Puedes consultar un reporte más completo de tu desempeño en la sección de Resultados, donde encontrarás un análisis detallado de cada simulador que has realizado.</p>

      <div className="results-buttons">
        <Link href={"/plataforma/mis-simuladores"} className="border">Ir a simuladores</Link>
        <Link href={"/plataforma/resultados"} >Ver reportes completos</Link>
      </div>
    

                
        </div>

      </div>
    </>
  );
};

export default Page;
