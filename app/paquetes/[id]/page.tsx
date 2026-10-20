
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "../../simulador/simulator.module.css";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import type { Paquete } from "@/types/paquete";
import LoaderScreen from "@/app/ui/shared/LoaderScreen";
import ContentNotFound from "@/app/ui/shared/ContentNotFound";
import Header from "@/app/ui/landingPage/LandingHeader";
import Footer from "@/app/ui/landingPage/Footer";

export default function PaquetePage() {
  const { id } = useParams<{ id: string }>();
  const { user, isLoaded } = useUser();

  const [paquete, setPaquete] = useState<Paquete | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [procesandoCompra, setProcesandoCompra] = useState(false);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(`/api/paquetes/${id}`, {
          method: "GET",
          cache: "no-store",
        });

        if (res.status === 404) {
          setPaquete(null);
          return;
        }

        if (!res.ok) {
          throw new Error("Error al obtener el paquete");
        }

        const data = (await res.json()) as Paquete;
        setPaquete(data);
      } catch (err) {
        console.error("Error al cargar paquete:", err);
        setError(true);
        setPaquete(null);
        toast.error("No se pudo cargar el paquete");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const comprarPaquete = async () => {
    if (!isLoaded || procesandoCompra || !paquete) return;

    if (!user) {
      toast.error("Debes iniciar sesión para comprar este paquete");
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
          tipoProducto: "paquete",
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

  if (loading) return <LoaderScreen />;

  if (error || !paquete) {
    return (
      <ContentNotFound
        link="/simuladores"
        message="Ocurrió un problema al cargar el contenido o el contenido no existe"
      />
    );
  }

  const precioFormateado = Number(paquete.precio).toLocaleString(
    "es-MX",
    {
      style: "currency",
      currency: "MXN",
    }
  );

  return (
    <>
      <Header />

      <div className={`${style["simulator-page"]} ${style["mt"]}`}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            <h1>{paquete.titulo}</h1>
            <p>{paquete.descripcion_corta}</p>

            <div className={style["simulator-title-items"]}>
              <div
                className={`${style["simulator-title-item2"]} ${style["title-item-p2"]}`}
              >
                <img
                  src="/course/question-black.png"
                  alt="Preguntas"
                />
                <p>{paquete.totalPreguntas} preguntas en total</p>
              </div>
            </div>

            <div className={style["simulator-title-buttons"]}>
              <button
                onClick={comprarPaquete}
                disabled={
                  !isLoaded ||
                  procesandoCompra
                }
              >
                <p>
                  {procesandoCompra
                    ? "Procesando compra..."
                    : `Comprar por ${precioFormateado} MXN`}
                </p>
              </button>
            </div>
          </div>

          <div className={style["simulator-img"]}>
            {paquete.imagen ? (
              <Image
                src={paquete.imagen}
                alt="Imagen del paquete"
                height={400}
                width={380}
                className={style["your-class"]}
              />
            ) : (
              <div style={{ height: 400, width: 380 }} />
            )}
          </div>
        </div>
      </div>

      <div className={style["separation"]}>
        <div>
          <p>🚀 Ahorra comprando el paquete completo.</p>
          <p>⏳ No te esperes: empieza hoy.</p>
        </div>
      </div>

      <div className={style["description-container"]}>
        <h2>Descripción del paquete</h2>

        <div
          className={style["description"]}
          dangerouslySetInnerHTML={{
            __html: paquete.descripcion || "",
          }}
        />
      </div>

      <Footer />
    </>
  );
}
