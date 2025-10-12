"use client";

import { useRouter } from "next/navigation";
import styles from "./simulators.module.css";
import { simulators } from "@/consts/simulators";

import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { useUserStore } from "@/stores/userStore";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();

  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const { simuladoresCanjeados } = useUserStore();

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["simulators-title"]}>
          <h2>Mis Simuladores</h2>
          <p>
            Aquí aparecerán los simuladores que hayas adquirido para practicar
            de forma realista y medir tu progreso en cada intento.
            <br />
            Más abajo encontrarás todos los simuladores disponibles para comprar
            y seguir ampliando tu preparación.
          </p>
        </div>

        {isSignedIn ? (
          <>
            {simuladoresCanjeados.length > 0 ? (
              <>
                <div className={styles["simulators-grid"]}>
                  {simuladoresCanjeados.map((sim) => (
                    <>
                      <div
                        key={sim.simuladorId._id}
                        className={styles["simulador-card"]}
                      >
                        <div>
                          <Image
                            alt={sim.simuladorId.titulo}
                            src={sim.simuladorId.imagen}
                            width={500}
                            height={500}
                          ></Image>
                          <h4>{sim.simuladorId.titulo}</h4>
                          <p>
                            <strong>{sim.simuladorId.totalPreguntas}</strong>{" "}
                            preguntas
                          </p>
                          <p>
                            <strong>{sim.simuladorId.tiempo}</strong> minutos
                          </p>
                          <p>
                            <strong>{sim.uso_justo}</strong> Intentos restantes
                          </p>
                        </div>
                        <button
                          className={`${sim.uso_justo>0?"":styles["grey-button"]}`}
                          onClick={() => {

                            if(sim.uso_justo<=0){
                              toast.warn("Vuelve a comprar este simulador para tener mas intentos")
                              return;
                            }

                            router.push(
                              `/plataforma/simular/${sim.simuladorId._id}`
                            );
                          }}
                        >
                          Simular
                        </button>
                        <button
                          className={styles["second-button"]}
                          onClick={() => {
                            router.push(
                              `/plataforma/simuladores/${sim.simuladorId._id}`
                            );
                          }}
                        >
                          Detalles
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className={styles["simulators-div"]}>
                  <Image
                    width={100}
                    height={100}
                    src={"/course/simulator-icon.png"}
                    alt="login"
                  ></Image>
                  <p>
                    No tienes simuladores comprados todavía. En la sección de
                    abajo puedes explorar y elegir uno para comenzar a
                    prepararte.
                  </p>
                  {/* <button onClick={() => openSignIn()}>
                    Iniciar sesión / Registrarse
                  </button> */}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <>
              <div className={styles["login-div"]}>
                <Image
                  width={100}
                  height={100}
                  src={"/course/login.png"}
                  alt="login"
                ></Image>
                <p>
                  Inicia sesión o regístrate para acceder a tus estadísticas y
                  aprovechar todas las funciones de la plataforma.
                </p>
                <button onClick={() => openSignIn()}>
                  Iniciar sesión / Registrarse
                </button>
              </div>
            </>
          </>
        )}

        <div className={styles["groups"]}>
          <h2>Todos los simuladores</h2>
          {simulators.map((grupo) => (
            <section key={grupo.examen} className={styles["group-section"]}>
              <h3>{grupo.examen}</h3>
              <div
                className={`${styles["simulators-grid"]} ${styles["group"]}`}
              >
                {grupo.simulacros.map((sim) => (
                  <div key={sim.id} className={styles["simulador-card"]}>
                    <div>
                      <img src={sim.imagen} alt={sim.titulo} />
                      <h4>{sim.titulo}</h4>
                      <p>
                        <strong>{sim.preguntas}</strong> preguntas
                      </p>
                      <p>
                        <strong>{sim.monedas}</strong> monedas
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (sim.estado !== "listo") return;
                        router.push(`/plataforma/simuladores/${sim.id}`);
                      }}
                      className={
                        sim.estado === "listo"
                          ? styles["button-blue"]
                          : styles["grey"]
                      }
                    >
                      {sim.estado === "listo" ? "Detalles" : "Próximamente..."}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
