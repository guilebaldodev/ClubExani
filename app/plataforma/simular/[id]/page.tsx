"use client";

import loadingExam from "@/public/animations/loading.json";
import completeExam from "@/public/animations/loading3.json";

import { useUserStore } from "@/stores/userStore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Simulador as SimuladorType } from "@/types";
import { Pregunta as PreguntaType, Respuesta } from "@/types/pregunta";
import { Usuarios } from "@/types/usuarios";
import { toast } from "react-toastify";
import MathQuestion from "@/app/ui/shared/RenderHtml";

import styles from "@/app/plataforma/simulador/simulator.module.css";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSimulatorStore } from "@/stores/simulatorStore";
import FeedbackView from "@/app/ui/course/FeedbackView";
import { useDashboardStore } from "@/stores/progessStore";
import ConfigurationModal from "@/app/ui/course/ConfigurationModal";

import useSound from "use-sound";
import AnswerExplanation from "@/app/ui/course/AnswerExplanation";

interface StartSimulatorResponse {
  simulator: SimuladorType;
  questions: PreguntaType[];
  totalQuestions: number;
  user: Usuarios;
}

const Page = () => {

  const {
    simulator,
    questions,
    sound,
    formatTime,
    currentIndex,
    timeLeft,
    setSimulator,
    selectAnswer,
    nextQuestion,
    score,
    totalScore,
    tick,
    solvedQuestions,
    normalizeSolvedQuestions,
    totalTime,
    explanation,
  } = useSimulatorStore();

  const { stats, setDashboardData, lastProgress } = useDashboardStore();

  const [data, setData] = useState<StartSimulatorResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [isConfigurationModal, setIsConfigurationModal] = useState(false);
  const { updateUsoJusto } = useUserStore();

  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationString, setExplanationString] = useState("");
  const [playWrong] = useSound("/sounds/wrong.wav");
  const [playCorrect] = useSound("/sounds/Win.wav", { volume: 0.7 });

  const router = useRouter();

  const letters = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
  };

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id || loading || data) return;
    setLoading(true);

    const fetchData = async () => {
      const res = await fetch(`/api/simuladores/start/${id}`);
      if (!res.ok) {
        if (res.status === 401) {
          toast.error("No tienes acceso.");
          router.push("/plataforma/mis-simuladores");
          return;
        }

        if (res.status === 403) {
          toast.error("Ya no tienes más intentos en este simulador.");
          router.push("/plataforma/mis-simuladores");
          return;
        }

        if (res.status === 400) {
          toast.error("El ID del simulador no es válido.");
          router.push("/plataforma/mis-simuladores");
          return;
        }

        toast.error("Ha ocurrido un error inesperado.");
        return;
      }

      const json = await res.json();
      setData(json);

      setComplete(false);
      setSimulator(json.simulator, json.questions);

      setLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  useEffect(() => {
    if (data && data.simulator) {
      const sim = data.user.simuladoresCanjeados.find(
        (s) => s.simuladorId === id
      );

      if (sim) {
        updateUsoJusto(sim.simuladorId, sim.uso_justo);
      }
    }
  }, [data]);

  useEffect(() => {
    if (!simulator) return;

    const interval = setInterval(() => {
      tick();

      if (complete) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [simulator, tick, complete]);

  useEffect(() => {
    if (!simulator) return;
    if (timeLeft === 0 && complete === false) {
      handleFinishExam();
    }
  }, [simulator, timeLeft, complete]);

  // utils
  const solved = solvedQuestions.find(
    (q) => q.questionId === questions[currentIndex]._id
  );

  const isDisabled = () => {
    if (solvedQuestions.length == questions.length) return true;
    if (solvedQuestions.length === questions.length - 1) {
      const unanswerd = questions.filter(
        (q) => !solvedQuestions.some((sq) => sq.questionId === q._id)
      );
      if (!unanswerd.length) return false;
      const index = questions.findIndex((q) => q._id === unanswerd[0]._id);
      if (currentIndex === index) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const handleAnswer = async () => {
    if (explanation) {
      const currentQuestion = questions[currentIndex];

      const isCurrentAnswered = solvedQuestions.some(
        (s) => s.questionId === currentQuestion._id
      );
      if (!isCurrentAnswered) {
        nextQuestion();
      } else {
        if (showExplanation) {
          setShowExplanation(false);

          nextQuestion();
        } else {
          console.log(isCurrentAnswered, currentQuestion);
          setShowExplanation(true);

          const current = solvedQuestions.find(
            (s) => s.questionId === currentQuestion._id
          );

          setExplanationString(
            currentQuestion.respuestas[current?.selectedAnswer].explicacion
          );

          // logica de los sonidos
          if (sound) {
            const CurrentAnswered = solvedQuestions.find(
              (s) => s.questionId === currentQuestion._id
            );

            if (CurrentAnswered?.wasCorrect) {
              playCorrect();
            } else {
              playWrong();
            }
          }
        }
      }
    } else {
      nextQuestion();
    }
  };

  const handleFinishExam = async () => {
    setComplete(true);

    try {
      console.log(
        `TotalTime ${totalTime}, Timeleft ${timeLeft}, Time: ${
          totalTime - timeLeft
        }`
      );

      const response = await fetch("/api/progreso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simulatorId: simulator?._id,
          solvedQuestions: normalizeSolvedQuestions(),
          score,
          totalScore,
          time: totalTime - timeLeft,
        }),
      });

      if (!response.ok) toast.error("Error al guardar progreso en reportes");

      const json = await response.json()


      const newProgress = {
        _id: json.progreso._id,
        simulatorId: {
          _id: simulator?._id,
          titulo: simulator?.titulo,
          imagen: simulator?.imagen,
        },
        solvedQuestions:normalizeSolvedQuestions(),
        score,
        totalScore,
        time: totalTime - timeLeft,
        createdAt : new Date()
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

      setTimeout(() => {
        router.push(`/plataforma/resultados-preliminares`);
      }, 2000);

      if (!response.ok) throw new Error("Error al guardar progreso");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <div className={styles["overlay-loader"]}>
          <FeedbackView
            animation={loadingExam}
            message="Armando tu examen perfecto, paciencia, ya casi está listo..."
            className="loading-exam"
          ></FeedbackView>
        </div>
      </>
    );
  }

  if (complete) {
    return (
      <>
        <div className={styles["overlay-loader"]}>
          <FeedbackView
            animation={completeExam}
            message={
              timeLeft > 0
                ? "Simulador finalizado. Procesando tus respuestas con cuidado para mostrarte tus resultados."
                : "El tiempo ha terminado. Estamos guardando tus respuestas y generando tu reporte…"
            }
            className="complete-exam"
          ></FeedbackView>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles["white-background"]}>
        {isConfigurationModal && (
          <ConfigurationModal
            setIsConfiguration={setIsConfigurationModal}
          ></ConfigurationModal>
        )}


        {
          (showExplanation && explanationString) && <AnswerExplanation setIsShow={()=>{
            setShowExplanation(false)
            nextQuestion()
          }} html={explanationString}></AnswerExplanation>
        }

        <div className={styles["simulator-s-container"]}>
          <div className={styles["header"]}>
            <div className={styles["header-titles"]}>
              <div className="header-icon">
                <Image
                  src={"/layout/logo.png"}
                  width={45}
                  height={45}
                  alt="simulandum"
                ></Image>
              </div>
              <h3>
                Simu
                <span>landum</span>
              </h3>
            </div>

            <div className={styles["progress-bar"]}>
              <ProgressBar
                height="10px"
                labelColor="#3261b0"
                labelSize="10px"
                bgColor="#3261b0"
                completed={Math.round(
                  (solvedQuestions.length / questions.length) * 100
                )}
              ></ProgressBar>
            </div>
          </div>

          <div className={styles["simulator-container"]}>
            <div className={styles["simulator"]}>
              <div className={styles["simulator-titles"]}>
                <div className={styles["simulator-header"]}>
                  <h3>{data?.simulator.titulo}</h3>

                  <p>
                    Pregunta {currentIndex + 1} de {questions.length}
                  </p>
                </div>

                <div className={styles["simulator-info"]}>
                  <button
                    onClick={() => {
                      setIsConfigurationModal(true);
                    }}
                  >
                    Configuracion{" "}
                  </button>
                  <div>
                    <Image
                      src={"/course/stopwatch.png"}
                      alt="stopwatch icon"
                      height={25}
                      width={30}
                    />
                    {formatTime()}
                  </div>
                </div>
              </div>

              <div className={styles["simulator-question"]}>
                <div  className={styles["simulator-content"]}>
                  <MathQuestion
                    html={data?.questions[currentIndex].contenidoHTML}
                  ></MathQuestion>
                </div>
              </div>
              <div className={styles["simulator-answers"]}>
                {questions &&
                  questions[currentIndex]?.respuestas.map(
                    (answer: Respuesta, index) => (
                      <div
                        onClick={() => {
                          selectAnswer(
                            questions[currentIndex]._id,
                            index,
                            answer.esCorrecta
                          );
                        }}
                        className={`${styles["simulator-answer"]} ${
                          solved?.selectedAnswer === index
                            ? styles["selected"]
                            : ""
                        }`}
                        key={index}
                      >
                        <div className={`${styles["simulator-answer-option"]}`}>
                          {letters[index]}
                        </div>
                        <div className={styles["simulator-answer-content"]}>
                          <MathQuestion html={answer.html}></MathQuestion>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>

            <div className={styles["simulator-buttons-actions"]}>
              <button onClick={handleFinishExam}>Terminar</button>

              <div>
                {/* <button 
              disabled={currentIndex === 0 }
              onClick={()=>{prevQuestion()}}
              >Anterior</button> */}

                <button disabled={isDisabled()} onClick={handleAnswer}>
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
