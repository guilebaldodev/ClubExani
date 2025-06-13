import { QuestionTemplate } from "./options";

export const QUESTION_TEMPLATES: QuestionTemplate[] = [
  {
    id: "text-only",
    label: "Text only",
    filled: {
      questionHTML: `<div class="config-text-simple">
          <p>What is the capital of France?</p>
        </div>
      `,
      answerHTML: `
        <div class="config-text-simple-answer">
          <p>Paris</p>
        </div>
      `,
    },
    empty: {
      questionHTML: `
        <div class="config-text-simple">
          <p>Your question here...</p>
        </div>
      `,
      answerHTML: `
        <div class="config-text-simple-answer">
          <p>Your answer here...</p>
        </div>
      `,
    },
  },
  {
  id: "text-with-image",
  label: "Texto con imagen y respuestas con imagen",
  filled: {
    questionHTML: `
      <div class="config-text-with-image">
        <p>Observa el gráfico y responde:</p>
        <div>
        <img src="/simuladores/simulatorExample.png" alt="gráfico de ejemplo" />
        </div>
        <p>¿Qué tendencia representa mejor el comportamiento observado?</p>
      </div>
    `,
    answerHTML: `
      <div class="config-image-answer">
        <img src="/simuladores/answerExample.png" alt="Respuesta A" />
      </div>
    `,
  },
  empty: {
    questionHTML: `
      <div class="config-text-with-image">
        <p>Introduce aquí el enunciado...</p>
        <img src="/uploads/your-image.png" alt="Descripción de la imagen" />
        <p>Introduce aquí la pregunta final...</p>
      </div>
    `,
    answerHTML: `
      <div class="config-image-answer">
        <img src="/uploads/your-answer-image.png" alt="Imagen de respuesta" />
      </div>
    `,
  },
}

];
