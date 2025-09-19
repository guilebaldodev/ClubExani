import { SelectOption } from "@/types/simulador";

export const EXAMENES = [
  "EXANI III",
  "Acredita-Bach",
  "EXHCOBA",
  "ENARM",
  "EGEL Medicina",
  "EGEL Derecho",
  "EGEL Administración",
  "EGEL Enfermería",
  "EGEL Contaduría",
  "EGEL Psicología",
  "EGEL Odontología",
  "EGEL Ingeniería Industrial"
] as const;



export type Examen = (typeof EXAMENES)[number];


export const examenOptions = EXAMENES.map((examen) => ({
  value: examen,
  label: examen,
})) satisfies SelectOption[];


export const tipoOptions: SelectOption[] = [
  { value: "Completo", label: "Completo" },
  { value: "Diagnostico", label: "Diagnostico" },
  { value: "Parcial", label: "Parcial" },
];

export const imageOptions: SelectOption[] = [
  { value: "Pregunta", label: "Pregunta" },
  { value: "Respuesta", label: "Respuesta" },
];



export const ImagenOptions: SelectOption[] = [
  { value: "Pregunta", label: "Pregunta" },
  { value: "Respuesta", label: "Respuesta" },
];



export const AsignadoOptions: SelectOption[] = [
  { value: "Asignada", label: "Asignada" },
  { value: "No asignada", label: "No asignada" },
];

export const OrigenOptions: SelectOption[] = [
  { value: "Examen", label: "Examen" },
  { value: "IA", label: "IA" },
];


export const dificultadOptions: SelectOption[] = [
  { value: "Facil", label: "Facil" },
  { value: "Intermedio", label: "Intermedio" },
  { value: "Avanzado", label: "Dificil" },
  { value: "Experto", label: "Experto" },
  { value: "Mixto", label: "Mixto" },
];

export const PlanOptions: SelectOption[] = [
  { value: "4900,", label: "Basica" },
  { value: "8900", label: "Estandar" },
  { value: "19900", label: "Pro" },
  { value: "34900", label: "Elite" },
];


export const PaidOptions: SelectOption[] = [
  { value: "paid", label: "Paid" },
  { value: "paid", label: "Unpaid" },
];





export type QuestionTemplate = {
  id: string;
  label: string;
  filled: {
    questionHTML: string;
    answerHTML: string;
  };
  empty: {
    questionHTML: string;
    answerHTML: string;
    explanationHTML: string;
  };
};





export const AREAS_POR_EXAMEN = {
  "EXANI III": [
    "Metodología de la investigación",
    "Comprensión lectora",
    "Redacción indirecta",
    "Pensamiento matemático"
  ],
  "Acredita-Bach": [
    "Matemáticas",
    "Ciencias sociales",
    "Humanidades",
    "Ciencias experimentales",
    "Comunicación"
  ],
  "ENARM": [
    "Medicina Interna y derivados",
    "Pediatría",
    "Cirugía y derivados",
    "Ginecología y Obstetricia",
    "Salud Pública",
    "Medicina Familiar",
    "Urgencias"
  ],
  "EGEL Medicina": [
    "Abordaje clínico",
    "Promoción de la salud",
    "Fundamento de las decisiones médicas",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Derecho": [
    "Función pública",
    "Litigio",
    "Justicia alternativa y fe pública",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Administración": [
    "Recursos humanos",
    "Mercadotecnia",
    "Finanzas",
    "Administración estratégica",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Enfermería": [
    "Atención primaria para la salud",
    "Cuidados integrales de enfermería",
    "Investigación y métodos en enfermería",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Contaduría": [
    "Sistema de información financiera",
    "Contabilidad administrativa y gestión financiera",
    "Tributación",
    "Auditoría y gobierno corporativo",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Psicología": [
    "Diagnóstico psicológico",
    "Intervención psicológica",
    "Investigación psicológica",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Ingeniería Industrial": [
    "Estudio del trabajo",
    "Gestión de la cadena de suministro",
    "Proyectos de inversión, estratégicos y operativos",
    "Sistemas operativos de manufactura y servicios",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EGEL Odontología": [
    "Medicina estomatológica",
    "Promoción de la salud y prevención de riesgos",
    "Rehabilitación del sistema estomatognático",
    "Comprensión lectora",
    "Redacción indirecta"
  ],
  "EXHCOBA": [
    "Habilidad verbal",
    "Habilidad cuantitativa",
    "Español",
    "Matemáticas",
    "Ciencias naturales",
    "Ciencias sociales",
    "Matemáticas para el cálculo",
    "Matemáticas para la estadística",
    "Física",
    "Química",
    "Biología",
    "Ciencias Sociales",
    "Humanidades",
    "Lenguaje",
    "Ciencias económico-administrativas"
  ]
};
