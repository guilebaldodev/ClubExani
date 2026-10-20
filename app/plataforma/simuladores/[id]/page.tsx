
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import style from "./simulator.module.css";
import { Simulador } from "@/types";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";
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
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [procesandoCompra, setProcesandoCompra] = useState(false);
  const [error, setError] = useState(false);
  const [simulador, setSimulador] =
    useState<Simulador>(emptySimulator);

  const { simuladoresCanjeados } = useUserStore();

  const tieneIntentos = simuladoresCanjeados.some(
    (item) =>
      item.simuladorId?._id === id &&
      item.uso_justo > 0
  );

  const esDiagnostico = simulador.tipo === "Diagnostico";

  useEffect(() => {
    if (!id) return;

    const fetchSimulador = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const res = await fetch(`/api/simuladores/${id}`);

        if (!res.ok) {
          throw new Error("Error al obtener el simulador");
        }

        const data = await res.json();
        setSimulador(data);
      } catch {
        setError(true);
        toast.error(
          "Ocurrió un problema al cargar el simulador."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimulador();
  }, [id]);

  const comprarSimulador = async () => {
    if (!isLoaded || procesandoCompra) return;

    if (!user) {
      toast.error("Debes iniciar sesión para comprar");
      return;
    }

    try {
      setProcesandoCompra(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipoProducto: "simulador",
          productoId: id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "No se pudo iniciar la compra"
        );
      }

      if (
        typeof data.url !== "string" ||
        !data.url.startsWith("https://checkout.stripe.com/")
      ) {
        throw new Error(
          "Stripe no devolvió una URL de pago válida"
        );
      }

      window.location.assign(data.url);
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al procesar la compra"
      );
      setProcesandoCompra(false);
    }
  };

  const handleSimulador = () => {
    if (procesandoCompra) return;

    if (esDiagnostico) {
      router.push(`/plataforma/simular/${id}`);
      return;
    }

    if (!isLoaded) return;

    if (!user) {
      toast.error(
        "Debes iniciar sesión para usar este simulador"
      );
      return;
    }

    if (tieneIntentos) {
      router.push(`/plataforma/simular/${id}`);
      return;
    }

    comprarSimulador();
  };

  if (isLoading) return <LoaderScreen />;

  if (error) {
    return (
      <ContentNotFound
        link="/plataforma/mis-simuladores"
        message="Ocurrió un problema al cargar el contenido o el contenido no existe"
      />
    );
  }

  return (
    <>
      <div className={style["simulator-page"]}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{simulador.titulo}</h1>
            <p>{simulador.descripcion_corta}</p>

            <div className={style["simulator-title-items"]}>
              <div>
                <div className={style["simulator-title-item"]}>
                  <Image
                    src="/course/question-black.png"
                    width={30}
                    height={30}
                    alt="Icono de preguntas"
                  />
                  <p>{simulador.totalPreguntas} Preguntas</p>
                </div>

                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <Image
                    src="/landing/simulatorTime.svg"
                    width={30}
                    height={30}
                    alt="Icono de reloj"
                  />
                  <p>
                    {formatExamDuration(
                      parseInt(simulador.tiempo)
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className={style["simulator-title-buttons"]}>
              <button
                onClick={handleSimulador}
                disabled={
                  procesandoCompra ||
                  (!esDiagnostico && !isLoaded)
                }
              >
                <p>
                  {procesandoCompra
                    ? "Procesando compra..."
                    : esDiagnostico
                    ? "Obtener Gratis"
                    : tieneIntentos
                    ? "Simular"
                    : `Comprar por ${Number(
                        simulador.precio
                      ).toLocaleString("es-MX", {
                        style: "currency",
                        currency: "MXN",
                      })} MXN`}
                </p>
              </button>
            </div>
          </div>

          <div className={style["simulator-img"]}>
            {simulador.imagen && (
              <Image
                src={simulador.imagen}
                alt="Imagen del simulador"
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
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={style["instructions-item"]}
            >
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
            🚀 Empieza hoy a prepararte con un simulador
            que se adapta a tu nivel.
          </p>
          <p>
            ⏳ El tiempo pasa... ¡empieza a estudiar ahora!
          </p>
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

