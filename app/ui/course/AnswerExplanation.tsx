import { X } from "lucide-react";
import MathQuestion from "../shared/RenderHtml";
import style from "./AnswerExplanation.module.css";

type AnswerExplanationProps = {
  html: string;
  setIsShow: () => void;
};

const AnswerExplanation = ({ html, setIsShow }: AnswerExplanationProps) => {
  return (
    <div className={style["answer-explanation-container"]}>
      <button
        className={style["close-button"]}
        onClick={() => setIsShow()}
      >
        <X size={20} />
      </button>
      <MathQuestion html={html} />
    </div>
  );
};

export default AnswerExplanation;
