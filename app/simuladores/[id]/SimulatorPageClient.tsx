
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import style from "../../simulador/simulator.module.css";
import { Simulador } from "@/types";
import Header from "@/app/ui/landingPage/LandingHeader";
import Footer from "@/app/ui/landingPage/Footer";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { useUserStore } from "@/stores/userStore";

export default function SimulatorPageClient({
  simulador,
}: {
  simulador: Simulador;
}) {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser();
  const router = useRouter();

  const [comprando, setComprando] = useState(false);
  const { simuladoresCanjeados } = useUserStore();

  const canjeado = simuladoresCanjeados.find(
    (item) =>
      item.simuladorId?._id === id &&
      item.uso_justo > 0
  );

  const esDiagnostico = simulador.tipo === "Diagnostico";

  const handleComprar = async () => {
    if (!user) {
      toast.error("Debes iniciar sesión para comprar este simulador");
      return;
    }

    if (comprando) return;

    try {
      setComprando(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipoProducto: "simulador",
          productoId: simulador._id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo iniciar la compra");
      }

      if (!data.url) {
        throw new Error("Stripe no devolvió una URL de pago");
      }

      window.location.assign(data.url);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al iniciar la compra"
      );
      setComprando(false);
    }
  };

  const handleAccion = () => {
    if (canjeado || esDiagnostico) {
      if (!user && !esDiagnostico) {
        toast.error("Debes iniciar sesión para usar este simulador");
        return;
      }

      router.push(`/plataforma/simular/${id}`);
      return;
    }

    handleComprar();
  };

  return (
    <>
      <Header />

      <div className={style["simulator-page"]}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{simulador.titulo}</h1>
            <p>{simulador.descripcion_corta}</p>

            <div className={style["simulator-title-items"]}>
              <div>
                <div className={style["simulator-title-item"]}>
                  <img
                    src="/course/question-black.png"
                    alt="Preguntas"
                  />
                  <p>{simulador.totalPreguntas} preguntas</p>
                </div>

                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <img
                    src="/landing/simulatorTime.svg"
                    alt="Tiempo"
                  />
                  <p>
                    {formatExamDuration(parseInt(simulador.tiempo))}
                  </p>
                </div>
              </div>
            </div>

            <div className={style["simulator-title-buttons"]}>
              <button
                onClick={handleAccion}
                disabled={comprando}
              >
                {comprando ? (
                  <p>Procesando compra...</p>
                ) : canjeado ? (
                  <p>Simular</p>
                ) : esDiagnostico ? (
                  <p>Obtener gratis</p>
                ) : (
                  <p>
                    Comprar por $
                    {Number(simulador.precio).toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    MXN
                  </p>
                )}
              </button>
            </div>
          </div>

          <div className={style["simulator-img"]}>
            <Image
              src={simulador.imagen}
              alt="Imagen del simulador"
              height={400}
              width={380}
              className={style["your-class"]}
            />
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
                  <img src="/admin/add-icon.png" alt="Paso" />
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
            🚀 Empieza hoy a prepararte con un simulador que se adapta a tu nivel.
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

      <Footer />
    </>
  );
}
