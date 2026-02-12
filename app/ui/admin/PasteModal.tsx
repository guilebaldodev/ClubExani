"use client";

import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import styles from "./css/pasteJsonModal.module.css"

type JsonPayload = {
  questionTitle?: string;
  questionHtmlInline?: string;
  summary?: string;
  correctAnswer?: number;

  answer1Html?: string;
  explanation1Html?: string;

  answer2Html?: string;
  explanation2Html?: string;

  answer3Html?: string;
  explanation3Html?: string;

  answer4Html?: string;
  explanation4Html?: string;
};

type Props = {
  isOpen: boolean;
  requiere4: boolean;
  onClose: () => void;
  onApply: (payload: JsonPayload) => void;
};

const PasteJsonModal = ({ isOpen, requiere4, onClose, onApply }: Props) => {
  const [raw, setRaw] = useState("");

  const example = useMemo(() => {
    return JSON.stringify(
      {
        questionTitle: "Pregunta X — Tema",
        questionHtmlInline:
          '<div class="config-text-simple"><p>...</p></div>',
        summary: "EXANI-III #2 - Metodología #X",
        correctAnswer: 1,

        answer1Html: '<div class="text-simple-answer"><p>...</p></div>',
        explanation1Html:
          '<div class="text-simple-explanation"><p>...</p></div>',

        answer2Html: '<div class="text-simple-answer"><p>...</p></div>',
        explanation2Html:
          '<div class="text-simple-explanation"><p>...</p></div>',

        answer3Html: '<div class="text-simple-answer"><p>...</p></div>',
        explanation3Html:
          '<div class="text-simple-explanation"><p>...</p></div>',

        ...(requiere4
          ? {
              answer4Html: '<div class="text-simple-answer"><p>...</p></div>',
              explanation4Html:
                '<div class="text-simple-explanation"><p>...</p></div>',
            }
          : {}),
      },
      null,
      2
    );
  }, [requiere4]);

  if (!isOpen) return null;

  const handleApply = () => {
    let parsed: JsonPayload;

    try {
      parsed = JSON.parse(raw);
    } catch {
      toast.error("JSON inválido");
      return;
    }

    if (!parsed.questionHtmlInline?.trim()) {
      toast.error("Falta questionHtmlInline");
      return;
    }

    if (!parsed.summary?.trim()) {
      toast.error("Falta summary");
      return;
    }

    if (
      typeof parsed.correctAnswer !== "number" ||
      parsed.correctAnswer < 1 ||
      parsed.correctAnswer > (requiere4 ? 4 : 3)
    ) {
      toast.error("correctAnswer debe ser 1-3 (o 1-4 si aplica)");
      return;
    }

    onApply(parsed);
    toast.success("Formulario rellenado");
    onClose();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Pegar JSON</h3>
          <button type="button" onClick={onClose} className={styles.closeBtn}>
            ✕
          </button>
        </div>

        <p className={styles.hint}>
          Pega el JSON y aplica. Solo se usa: questionHtmlInline, summary,
          correctAnswer, answer1..4Html, explanation1..4Html.
        </p>

        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          className={styles.textarea}
          placeholder={example}
          rows={16}
        />

        <div className={styles.footer}>
          <button type="button" onClick={() => setRaw(example)}>
            Pegar ejemplo
          </button>
          <div className={styles.footerRight}>
            <button type="button" onClick={onClose} className={styles.secondary}>
              Cancelar
            </button>
            <button type="button" onClick={handleApply} className={styles.primary}>
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasteJsonModal;
