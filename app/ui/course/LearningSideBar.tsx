'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "./LearningSideBar.module.css";
import { useParams } from "next/navigation";

const LearningSideBar = ( ) => {
  
    const {tema}=useParams()

    console.log(tema,"tema")
    const lessonName=tema

    return (
    <>
      <div className={styles["learning-side-container"]}>
        <h3>Temario de Metodología</h3>

        <Link
          href="/lecciones/paradigmas-de-investigacion"
          className={`${styles["learning-side-item"]} ${
            lessonName === "paradigmas-de-investigacion"
              ? styles["item-side-selected"]
              : ""
          }`}
        >
          <p>Paradigmas de investigación</p>
          <Image
            src="/course/done-blue-icon.png"
            alt="Icono de completado"
            width={24}
            height={24}
          />
        </Link>

        <Link
          href="/lecciones/niveles-de-medicion"
          className={`${styles["learning-side-item"]} ${
            lessonName === "niveles-de-medicion"
              ? styles["item-side-selected"]
              : ""
          }`}
        >
          <p>Niveles de medición</p>
          <Image
            src="/course/done-blue-icon.png"
            alt="Icono de completado"
            width={24}
            height={24}
          />
        </Link>

        <div className={styles["learning-side-item"]}>
          <p>Enfoques de una investigación</p>
          <Image
            src="/course/done-blue-icon.png"
            alt="Icono de completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de validez</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Método de investigación</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        {/* Agrega los demás elementos de la misma forma */}
        <div className={styles["learning-side-item"]}>
          <p>Muestreo probabilístico</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Muestreo no probabilístico</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de conocimiento</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de fuente de información</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de investigación</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Técnicas de recolección de datos</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de diseño de investigación</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Alcance de una investigación</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Estrategias de codificación</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de variable</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>

        <div className={styles["learning-side-item"]}>
          <p>Tipos de hipótesis</p>
          <Image
            src="/course/done-grey-icon.png"
            alt="Icono no completado"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
};

export default LearningSideBar;
