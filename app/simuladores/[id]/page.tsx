"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "../../simulador/simulator.module.css";
import { Simulador } from "@/types";
import Header from "@/app/ui/landingPage/LandingHeader";
import Footer from "@/app/ui/landingPage/Footer";
import { formatExamDuration } from "@/app/utils";
import Image from "next/image";
import ConfirmModal from "@/app/ui/shared/ConfirmModal";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import { SignedIn } from '@clerk/nextjs';
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
  const {monedas} =useUserStore()
  const router= useRouter()
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(false);
  
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

  if (error) return <ContentNotFound link="/simuladores" message="Ocurrió un problema al cargar el contenido o el contenido no existe"></ContentNotFound>

  return (
    <>
      <Header></Header>

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
                  <img src="/landing/simulatorTime.svg" alt="sss" />
                  <p>1200 preguntas</p>
                </div>

                <div
                  className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}
                >
                  <img src="/landing/simulatorTime.svg" alt="sss" />
                  <p>{formatExamDuration(parseInt(simulador.tiempo))}</p>
                </div>
              </div>
            </div>

              <SignedIn>
              <div className={style["div-coins"]}>
                <Image
                  src={"/layout/yellow-coins.png"}
                  alt="coins"
                  width={25}
                  height={25}
                ></Image>
                <p>Cuentas con {monedas} monedas</p>
              </div>
              </SignedIn>


            <div className={style["simulator-title-buttons"]}>
              <button
                onClick={() => {

                  if (!user) {
                    toast.error(
                      "Debes iniciar sesión para usar este simulador"
                    );
                    return;
                  }
                  if(simulador.tipo==="Diagnostico"){
                    console.log("Diagnostico")
                    router.push(`/usuario/simulador/${simulador._id}`)
                    return
                  }


                  setModal(true);
                }}
              >
                {simulador.tipo == "Diagnostico" ? (
                  <>
                    <p>Simular gratis</p>
                  </>
                ) : (
                  <>
                    <p>Comprar por {simulador.precio}</p>
                    <img
                      src="/landing/landing-white-coins.png"
                      alt="simbolo de monedas"
                    />
                  </>
                )}
              </button>

              <button onClick={()=>{
                router.push("/creditos")
              }} className={style["yellow"]}>
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
      <Footer></Footer>
    </>
  );
}
