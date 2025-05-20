// 'use client'

// import Link from 'next/link'
// // import { useRouter } from 'next/navigation'
// import styles from '../quizzesPage.module.css'
// import Image from 'next/image';

// const quizzesData = {
//   'metodologia-de-la-investigacion': {
//     title: "Metodología de la Investigación",
//     image: "/course/methodology-icon.png",
//     color:"#0881D1",
//     quizzes: [
//       { "title": "Paradigmas de investigación", "status": "Completado" },
//       { "title": "Niveles de medición", "status": "Completado" },
//       { "title": "Enfoques de una investigación", "status": "Completado" },
//       { "title": "Tipos de validez", "status": "Por completar" },
//       { "title": "Método de investigación", "status": "Por completar" },
//       { "title": "Muestreo probabilístico", "status": "Por completar" },
//       { "title": "Muestreo no probabilístico", "status": "Por completar" },
//       { "title": "Tipos de conocimiento", "status": "Por completar" },
//       { "title": "Tipos de fuente de información", "status": "Por completar" },
//       { "title": "Tipos de investigación", "status": "Por completar" },
//       { "title": "Técnicas de recolección de datos", "status": "Por completar" },
//       { "title": "Tipos de diseño de investigación", "status": "Por completar" },
//       { "title": "Alcance de una investigación", "status": "Por completar" },
//       { "title": "Estrategias de codificación", "status": "Por completar" },
//       { "title": "Tipos de variable", "status": "Por completar" },
//       { "title": "Tipos de hipótesis", "status": "Por completar" }
//     ],
//   },
//   'comprension-lectora': {
//     title: "Comprensión de Lectura",
//     image: "/course/books-icon.png",
//     color:"#F3B942",
//     quizzes: [
//       { title: "Tipos de Textos", status: "Completado" },
//       { title: "Estrategias de Lectura", status: "Por completar" },
//       { title: "Comprensión Crítica", status: "Por completar" },
//     ],
//   },
//   'redaccion-indirecta': {
//     title: "Redacción Indirecta",
//     image: "/course/writing-icon.png",
//     color:"#1ABC9C",
//     quizzes: [
//       { title: "Estructura del Texto", status: "Completado" },
//       { title: "Técnicas de Redacción", status: "Completado" },
//       { title: "Revisión y Edición", status: "Por completar" },
//     ],
//   },
//   'pensamiento-matematico': {
//     title: "Pensamiento Matemático",
//     image: "/course/mathematics-icon.png",
//     color:"#EE4266",
//     quizzes: [
//       { title: "Álgebra Básica", status: "Completado" },
//       { title: "Geometría", status: "Por completar" },
//       { title: "Estadística", status: "Por completar" },
//     ],
//   },
// };

// const QuizzesPage = ({ params }: { params: { tema: string } }) => {



//     const tema = quizzesData[params.tema];
// //   const router = useRouter();

// console.log(params)


//   if (!tema) return <>No encontrado</>;

//   return (
//       <div className={styles['quizzes-page-container']}>
//         <div className={styles['quizzes-page-nav']}>
//           <Link href="/curso/cuestionarios/metodologia-de-la-investigacion" className={params.tema === 'metodologia-de-la-investigacion' ? styles['quizzes-nav-selected'] : ''}>
//             Metodología
//           </Link>
//           <Link href="/curso/cuestionarios/pensamiento-matematico" className={params.tema === 'pensamiento-matematico' ? styles['quizzes-nav-selected'] : ''}>
//             Pensamiento Matemático
//           </Link>
//           <Link href="/curso/cuestionarios/redaccion-indirecta" className={params.tema === 'redaccion-indirecta' ? styles['quizzes-nav-selected'] : ''}>
//             Redacción Indirecta
//           </Link>
//           <Link href="/curso/cuestionarios/comprension-lectora" className={params.tema === 'comprension-lectora' ? styles['quizzes-nav-selected'] : ''}>
//             Comprensión lectora
//           </Link>
//         </div>
//         <div className={styles['quizzes-page-titles']}>
//           <div className={styles['circle-div']} style={{ backgroundColor: tema.color }}>
//             {/* <img src={tema.image} alt={tema.title} /> */}
//             <Image src={tema.image} alt={tema.title} width={70} height={70}></Image>
//           </div>
//           <h2>{tema.title}</h2>
//         </div>

//         <div className={styles['quizzes-container']}>
//           <h3>Cuestionarios</h3>
//           {tema.quizzes.map((quiz, index) => (
//             <div key={index} className={styles['quiz-item']}>
//               <div className={styles['quiz-item-info']}>
//                 <h3>{quiz.title}</h3>
//                 <div className={styles['quiz-item-duo']}>
//                   {/* <img src="/icons/quizzes/check-circle-icon.png" alt="" /> */}
//                   <Image src={'/course/check-circle-icon.png'} alt={'Icono de check'} width={70} height={70}></Image>

//                   <p>{quiz.status}</p>
//                 </div>
//               </div>
//               <div className={styles['quiz-item-button']}>
//                 <div className={styles['circle-div']} style={{ backgroundColor: tema.color }}>
//                   {/* <img src="/icons/quizzes/play-icon.png" alt="" /> */}
//                   <Image src={"/course/play-icon.png"} alt='play icon' width={25} height={25}></Image>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//   );
// };

// export default QuizzesPage;
