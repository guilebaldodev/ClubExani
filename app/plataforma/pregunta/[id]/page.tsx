"use client";

import styles from "@/app/plataforma/simulador/simulator.module.css";
import AnswerExplanation from "@/app/ui/course/AnswerExplanation";
import MathQuestion from "@/app/ui/shared/RenderHtml";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const letters = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
  };

  const route = useRouter();
  const { id } = useParams<{ id: string }>();

  const [parsed, setParsed] = useState<any>(null);
  const [question, setQuestion] = useState<any>(null);
  const [explanation, setExplanation] = useState(false);


  useEffect(() => {
    // esto garantiza que solo se ejecuta en cliente
    const data = localStorage.getItem("lastSimulatorData");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setParsed(parsedData);

        const found = parsedData.questions.find(
          (q: any) => q.questionId === id
        );
        setQuestion(found);
      } catch (err) {
        toast.error("Ya no puedes acceder a estos resultados")
        console.error("Error al parsear localStorage:", err);
      }
    }
  }, [id]);

  if (!parsed || !question) return (

        <div className={styles["not-content-container"]}>
            <Image src="/layout/no-content.png" alt="not found" width={100} height={100}></Image>
            <p>Este contenido no existe o ya no se encuentra disponible</p>
            <Link href={"/plataforma/mis-simuladores"}>Volver atras</Link>
        </div>
    )

    
  

  const explanationString =
    question.answers[question.selectedAnswer]?.explicacion;

  return (
    <>
      <div className={styles["white-background"]}>
        {explanation && explanationString && (
          <AnswerExplanation
            setIsShow={() => setExplanation(false)}
            html={explanationString}
          />
        )}

        <div className={styles["simulator-s-container"]}>
          <div className={styles["header"]}>
            <div className={styles["header-titles"]}>
              <div className="header-icon">
                <Image
                  src={"/layout/logo.png"}
                  width={45}
                  height={45}
                  alt="simulandum"
                />
              </div>
              <h3>
                Simu<span>landum</span>
              </h3>
            </div>
          </div>

          <div className={styles["simulator-container"]}>
            <div className={styles["simulator"]}>
              <div className={styles["simulator-titles"]}>
                <div className={styles["simulator-header"]}>
                  <h3>{parsed?.simulator?.titulo}</h3>
                </div>
              </div>

              <div className={styles["simulator-question"]}>
                <div className={styles["simulator-content"]}>
                  <MathQuestion html={question.contenidoHTML} />
                </div>
              </div>

              <div className={styles["simulator-answers"]}>
                {question.answers.map((answer: any, index: number) => (
                  <div
                    key={index}
                    className={`${styles["simulator-answer"]} ${
                      question.selectedAnswer === index
                        ? styles["selected"]
                        : ""
                    }`}
                  >
                    <div className={styles["simulator-answer-option"]}>
                      {letters[index]}
                    </div>
                    <div className={styles["simulator-answer-content"]}>
                      <MathQuestion html={answer.html} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles["simulator-buttons-actions"]}>
              <button
                onClick={() => {
                  route.push("/plataforma/resultados-preliminares");
                }}
              >
                Regresar
              </button>

              <div>
                <button
                  onClick={() => setExplanation(true)}
                  disabled={question.selectedAnswer === -1}
                >
                  Explicación
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
