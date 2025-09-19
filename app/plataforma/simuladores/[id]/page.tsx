"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "./simulator.module.css";
import { Simulador } from "@/types";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";
import ConfirmModal from "@/app/ui/shared/ConfirmModal";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser();
  const [modal, setModal] = useState(false);

  const { simuladoresCanjeados } = useUserStore();

  const [simulador, setSimulador] = useState<Simulador | null>(null);
  useEffect(() => {
    fetch(`/api/simuladores/${id}`)
      .then((res) => res.json())
      .then((data) => setSimulador(data));
  }, [id]);

  const router = useRouter();

  if (!simulador) return <p>Cargando...</p>;

  return (
    <>
      {/* <BuySimulatorModal simulator={simulador} closeModal={()=>{

  }}></BuySimulatorModal> */}

      {modal && (
        <ConfirmModal
          simulator={simulador}
          closeModal={() => setModal(false)}
        />
      )}

      <div className={style["simulator-page"]}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{simulador.titulo}</h1>
            <p>{simulador.descripcion_corta}</p>

            <div className={style["simulator-title-items"]}>
              <div>
                <div className={style["simulator-title-item"]}>
                  <Image
                    src={"/course/question-black.png"}
                    width={30}
                    height={30}
                    alt={"icono de preguntas"}
                  ></Image>
                  <p>{simulador.totalPreguntas} Preguntas</p>
                </div>
                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <Image
                    src={"/landing/simulatorTime.svg"}
                    width={30}
                    height={30}
                    alt={"icono de preguntas"}
                  ></Image>
                  <p>{formatExamDuration(parseInt(simulador.tiempo))}</p>
                </div>
              </div>
            </div>

            <div className={style["simulator-title-buttons"]}>
              <button
                onClick={() => {
                  if (!user) {
                    toast.error(
                      "Debes iniciar sesión para usar este simulador"
                    );
                    return;
                  }

                  if(simuladoresCanjeados.find(item=>item.simuladorId._id == id && item.uso_justo>0)){
                    router.push(`/plataforma/simular/${id}`)
                  }else{
                    setModal(true);
                  }

                }}
              >

                {
                  simuladoresCanjeados.find(item=>item.simuladorId._id == id && item.uso_justo>0)?
                  <>
                    <p>Simular</p>
                  </>
                  :
                  <>

                {simulador.tipo == "Diagnostico" ? (
                  <>
                    <p>Obtener Gratis</p>
                  </>
                ) : (
                  <>
                    <p>Comprar por {simulador.precio}</p>
     
                    <Image
                      src="/landing/landing-white-coins.png"
                      alt="simbolo de monedas"
                      width={30}
                      height={30}
                    ></Image>
                  </>
                )}

                  </>
                }


              </button>

              <button
                onClick={() => {
                  router.push("/plataforma/monedas");
                }}
                className={style["yellow"]}
              >
                <p>Comprar monedas</p>
              </button>
            </div>
          </div>

          <div className={style["simulator-img"]}>
            <Image
              src={simulador.imagen}
              alt="imagen del simulador"
              height={400}
              width={380}
              className={style["your-class"]}
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

        <div
          className={style["description"]}
          dangerouslySetInnerHTML={{ __html: simulador.descripcion }}
        ></div>
      </div>
    </>
  );
}
