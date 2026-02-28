"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import style from "../../../simulador/simulator.module.css";
import Image from "next/image";
import { SignedIn, useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { useUserStore } from "@/stores/userStore";
import type { Paquete } from "@/types/paquete";
import ConfirmPackageModal from "@/app/ui/shared/ConfirmPackageModal";
import LoaderScreen from "@/app/ui/shared/LoaderScreen";
import ContentNotFound from "@/app/ui/shared/ContentNotFound";

export default function PaquetePage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser();
  const router = useRouter();
  const { monedas } = useUserStore();

  const [modal, setModal] = useState(false);
  const [paquete, setPaquete] = useState<Paquete | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(`/api/paquetes/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });

        if (res.status === 404) {
          setPaquete(null);
          return;
        }

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const data = (await res.json()) as Paquete;
        setPaquete(data);
      } catch (error) {
        console.log(error);
        setError(true);
        toast.error("No se pudo cargar el paquete");
        setPaquete(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <LoaderScreen />;

  if (error)
    return (
      <ContentNotFound
        link="/plataforma/mis-simuladores"
        message="Ocurrió un problema al cargar el contenido o el contenido no existe"
      />
    );

  return (
    <>
      <div className={`${style["simulator-page"]} ${style["mt"]}`}>
        <div className={style["simulator-header"]}>
          <div className={style["simulator-info-title"]}>
            {modal && (
              <ConfirmPackageModal
                packageItem={paquete}
                closeModal={() => setModal(false)}
              />
            )}

            <>
              <h1>{paquete?.titulo}</h1>
              <p>{paquete?.descripcion_corta}</p>

              <div className={style["simulator-title-items"]}>
                <div
                  className={`${style["simulator-title-item2"]} ${style["title-item-p2"]}`}
                >
                  <img src="/course/question-black.png" alt="Preguntas" />
                  <p>{paquete?.totalPreguntas} preguntas en total</p>
                </div>
              </div>

              <SignedIn>
                <div className={style["div-coins"]}>
                  <Image
                    src="/layout/yellow-coins.png"
                    alt="Monedas"
                    width={25}
                    height={25}
                  />
                  <p>Cuentas con {monedas} monedas</p>
                </div>
              </SignedIn>

              <div className={style["simulator-title-buttons"]}>
                <button
                  onClick={() => {
                    if (!user) {
                      toast.error(
                        "Debes iniciar sesión para comprar este paquete"
                      );
                      return;
                    }
                    setModal(true);
                  }}
                >
                  <>
                    <p>Comprar por {paquete?.precio}</p>
                    <Image
                      src="/landing/landing-white-coins.png"
                      alt="Símbolo de monedas"
                      width={30}
                      height={30}
                    />
                  </>
                </button>

                <button
                  onClick={() => router.push("/plataforma/monedas")}
                  className={style["yellow"]}
                >
                  <p>Comprar monedas</p>
                </button>
              </div>
            </>
          </div>

          <div className={style["simulator-img"]}>
            {paquete?.imagen ? (
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

        {!paquete ? (
          <div className={style["description"]}>
            <p>No hay descripción disponible.</p>
          </div>
        ) : (
          <div
            className={style["description"]}
            dangerouslySetInnerHTML={{ __html: paquete.descripcion }}
          />
        )}
      </div>
    </>
  );
}