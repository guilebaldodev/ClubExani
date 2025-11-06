import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./css/questionItem.module.css";

interface Question {
  questionId: string;
  wasCorrect: boolean;
  selectedAnswer: number;
  resumen: string;
}

interface QuestionProps {
  question: Question;
  index: number;
}

// Componente principal
const QuestionItemComponent: React.FC<QuestionProps> = ({ question, index }) => {
  return (
    <div key={question.questionId} className={style["question-item"]}>
      <div className={style["question-item-icons"]}>
        <div>
          <Image src="/course/question-black.png" alt="" width={20} height={20} />
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
              ? "No contestada"
              : "Incorrecta"}
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
  );
};

const QuestionItem = React.memo(QuestionItemComponent);

export default QuestionItem;
