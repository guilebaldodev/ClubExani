"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import style from "./simulator.module.css";
import { Simulador } from "@/types";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";
import ConfirmModal from "@/app/ui/shared/ConfirmModal";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { useUserStore } from "@/stores/userStore";
import LoaderScreen from "@/app/ui/shared/LoaderScreen";
import ContentNotFound from "@/app/ui/shared/ContentNotFound";

const emptySimulator: Simulador = {
  _id: "",
  titulo: "",
  descripcion_corta: "",
  descripcion: "",
  examen: "",
  dificultad: "",
  imagen: "",
  tiempo: "0",
  totalPreguntas: 0,
  contador: 0,
  uso_justo: 0,
  precio: 0,
  tipo: "",
};

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser();
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { simuladoresCanjeados } = useUserStore();
  const [simulador, setSimulador] = useState<Simulador>(emptySimulator);

  useEffect(() => {
    const fetchSimulador = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const res = await fetch(`/api/simuladores/${id}`);
        if (!res.ok) throw new Error("Error al obtener el simulador");

        const data = await res.json();
        setSimulador(data);
      } catch {
        setError(true);
        toast.error("Ocurrió un problema al cargar el simulador.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimulador();
  }, [id]);

  if (isLoading) return <LoaderScreen />;

  if (error) return <ContentNotFound link="/plataforma/mis-simuladores" message="Ocurrió un problema al cargar el contenido o el contenido no existe"></ContentNotFound>

  return (
    <>
      {modal && (
        <ConfirmModal
          simulator={simulador}
          closeModal={() => setModal(false)}
        />
      )}

      <div className={style["simulator-page"]}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{simulador.titulo || "Cargando..."}</h1>
            <p>{simulador.descripcion_corta || "Preparando el simulador..."}</p>

            <div className={style["simulator-title-items"]}>
              <div>
                <div className={style["simulator-title-item"]}>
                  <Image
                    src={"/course/question-black.png"}
                    width={30}
                    height={30}
                    alt={"icono de preguntas"}
                  />
                  <p>{simulador.totalPreguntas} Preguntas</p>
                </div>
                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <Image
                    src={"/landing/simulatorTime.svg"}
                    width={30}
                    height={30}
                    alt={"icono de reloj"}
                  />
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

                  const canjeado = simuladoresCanjeados.find(
                    (item) => item.simuladorId._id === id && item.uso_justo > 0
                  );

                  if (canjeado) {
                    router.push(`/plataforma/simular/${id}`);
                  } else {
                    setModal(true);
                  }
                }}
              >
                {simuladoresCanjeados.find(
                  (item) => item.simuladorId._id === id && item.uso_justo > 0
                ) ? (
                  <p>Simular</p>
                ) : simulador.tipo === "Diagnostico" ? (
                  <p>Obtener Gratis</p>
                ) : (
                  <>
                    <p>Comprar por {simulador.precio}</p>
                    <Image
                      src="/landing/landing-white-coins.png"
                      alt="simbolo de monedas"
                      width={30}
                      height={30}
                    />
                  </>
                )}
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
            {simulador.imagen && (
              <Image
                src={simulador.imagen}
                alt="imagen del simulador"
                height={400}
                width={380}
                className={style["your-class"]}
              />
            )}
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
                  "Inicia el simulador correspondiente al examen seleccionado. Las preguntas han sido cuidadosamente seleccionadas para esta versión."}
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
        <h2>Descripción del simulador</h2>
        <div
          className={style["description"]}
          dangerouslySetInnerHTML={{
            __html: simulador.descripcion || "",
          }}
        />
      </div>
    </>
  );
}
