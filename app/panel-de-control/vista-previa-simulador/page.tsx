"use client"
import Footer from "@/app/ui/landingPage/Footer";
import style from "../../simulador/simulator.module.css";
import { useEffect, useState } from "react";
import { Simulador } from "@/types";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";


const Page = () => {

  const [formData, setFormData] = useState<Simulador>();

  console.log(formData)

  useEffect(() => {
    const raw = localStorage.getItem("preview-simulator");
    if (raw) {
      setFormData(JSON.parse(raw));
    }
  }, []);

      if (!formData) return <p>Cargando vista previa...</p>;


  return (
    <>
      <div className={style["simulator-page"]}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{formData.titulo}</h1>
            <p>
              {formData.descripcion_corta}
            </p>

            <div className={style["simulator-title-items"]}>
              <div>
                <div className={style["simulator-title-item"]}>
                  <img src="/landing/simulatorTime.svg" alt="sss" />
                  <p>120 preguntas</p>
                </div>

                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <img src="/landing/simulatorTime.svg" alt="sss" />
                  <p>{formatExamDuration(parseInt(formData.tiempo))}</p>
                </div>
              </div>
            </div>

            <div className={style["simulator-title-buttons"]}>
              

              <button>


              {formData.tipo=="Diagnostico"?
              <>
              <p>
                Simular gratis
              </p>
              </>:
              <>
                <p>Comprar por {formData.precio}</p>
                <img
                  src="/landing/landing-white-coins.png"
                  alt="simbolo de monedas"
                />
              </>}

              </button>

              <button className={style["yellow"]}>
                <p>Comprar monedas</p>
              </button>
            </div>
          </div>

          <div className={style["simulator-img"]}>
            <Image src={formData.imagen} alt="imagen del simulador" height={400} width={380}
            
              className={style['your-class']}

            ></Image>
          </div>
        </div>
      </div>

      <div className={style["instructions-container"]}>
        <h2>Instrucciones del simulador</h2>
        <div className={style["instructions"]}>
          {[1, 2, 3, 4].map((step, idx) => (
            <div key={idx} className={style["instructions-item"]}>
              <div className={style["instructions-item-title"]}>
                <div className={style["circle"]}>
                  <img src="/admin/add-icon.png" alt="" />
                </div>
                <p>{`Paso ${step}`}</p>
              </div>
              <p>
                {step === 1 &&
                  "Inicia el simulador correspondiente al examen seleccionado. Las preguntas han sido cuidadosamente seleccionadas para esta versión"}
                {step === 2 &&
                  "Responde cada pregunta eligiendo una de las opciones disponibles según tu criterio."}
                {step === 3 &&
                  "Tómate el tiempo necesario para pensar bien tus respuestas. La calidad es más importante que la rapidez."}
                {step === 4 &&
                  "Al concluir la simulación, se generará un reporte con tu puntaje, respuestas correctas y explicaciones detalladas."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={style["separation"]}>
        <div>
          <p>
            🚀 Empieza hoy a prepararte con un simulador que se adapta a tu
            nivel.
          </p>
          <p>⏳ El tiempo pasa... ¡empieza a estudiar ahora!</p>
        </div>
      </div>

      <div className={style["description-container"]}>
        <h2>Descripcion del simulador</h2>

          <div className={style["description"]}  dangerouslySetInnerHTML={{__html:formData.descripcion}}></div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Page;
