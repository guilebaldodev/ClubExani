"use client";
import Image from "next/image";
import styles from "@/app/curso/simulador/simulator.module.css";
import { useEffect, useState } from "react";
import MathQuestion from "@/app/ui/shared/RenderHtml";

type PreviewQuestion = {
  contenidoHTML: string;
  respuestas: {
    html: string;
    explicacion: string;
  }[];

};


    

const Page = () => {

  const [formData, setFormData] = useState<PreviewQuestion>();

  const letters= {
    0:"A",
    1:"B",
    2:"C",
    3:"D",
  }

    console.log(formData)

  useEffect(() => {
    const raw = localStorage.getItem("preview-question");
    if (raw) {
      setFormData(JSON.parse(raw));
    }
  }, []);

    if (!formData) return <p>Cargando vista previa...</p>;


  return (
    <>
      <div className={styles["white-background"]}>
        <div className="admin-question-container">
          <div className="admin-question-title">
            <h2>Vista previa de una pregunta</h2>
          </div>

          <div className={styles["simulator-container"]}>
            <div className={styles["simulator"]}>
              <div className={styles["simulator-titles"]}>
                <div className={styles["simulator-header"]}>
                  <h3>{}</h3>
                  <div>
                    <Image
                      src={"/course/stopwatch.png"}
                      alt="stopwatch icon"
                      height={25}
                      width={30}
                    />
                    04:06:15
                  </div>
                </div>

                <div className={styles["simulator-info"]}>
                  <p>Ejemplo de plantilla</p>
                </div>
              </div>

              <div className={styles["simulator-question"]}>
                <h4>Pregunta de ejemplo</h4>
                <div className={styles["simulator-content"]}>
                  <MathQuestion
                    html={formData.contenidoHTML}
                  ></MathQuestion>
                </div>
              </div>
              <div className={styles["simulator-answers"]}>
                {formData.respuestas.map((letter, index) => (
                  <div className={styles["simulator-answer"]} key={index}>
                    <div className={styles["simulator-answer-option"]}>
                      {letters[index]}
                    </div>
                    <div
                      className={styles["simulator-answer-content"]}
                        >
                        <MathQuestion html={formData.respuestas[index].html}></MathQuestion>
                        </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
