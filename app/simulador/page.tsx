import Image from "next/image";
import Footer from "../ui/landingPage/Footer";
import style from "./simulator.module.css"
import Header from "../ui/landingPage/LandingHeader";


const page = () => {
  return (
    <>

    <Header></Header>
    <div className={style["simulator-page"]}>
  <div className={style["simulator-header"]}>
    <div className={style["simulator-info-title"]}>
      <h1>EXANI-III SIMULADOR #1</h1>
      <p>
        Simulador de práctica para el EXANI-III con preguntas realistas,
        cronómetro activo y resultados al instante. Ideal para evaluar tu
        nivel y prepararte de forma efectiva.
      </p>

      <div className={style["simulator-title-items"]}>
        <div>
          <div className={style["simulator-title-item"]}>
            <img src="/landing/simulatorTime.svg" alt="sss" />
            <p>120 preguntas</p>
          </div>

          <div className={`${style["simulator-title-item"]} ${style["title-item-p"]}`}>
            <img src="/landing/simulatorTime.svg" alt="sss" />
            <p>4.5 Horas</p>
          </div>
        </div>
      </div>

      <div className={style["simulator-title-buttons"]}>
        <button>
          <p>Comprar por 30</p>
          <img
            src="/landing/landing-white-coins.png"
            alt="simbolo de monedas"
          />
        </button>

        <button className={style["yellow"]}>
          <p>Comprar monedas</p>
        </button>
      </div>
    </div>

    <div className={style["simulator-img"]}>

          <Image
  
            src="https://res.cloudinary.com/dzemmj6m1/image/upload/v1749533377/exani-iii-1_tfdfw4.png"
            alt="Menu Icon"
            width={400}
            height={400}
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
    <p>🚀 Empieza hoy a prepararte con un simulador que se adapta a tu nivel.</p>
    <p>⏳ El tiempo pasa... ¡empieza a estudiar ahora!</p>
  </div>
</div>

<div className={style["description-container"]}>
  <h2>Descripcion del simulador</h2>
  <div className={style["description"]}>
    <p>
      Este simulador está diseñado para que pongas a prueba tus conocimientos de forma completa y realista, proporcionándote una práctica precisa para el EXANI-III.
    </p>
    <ul>
      <li>Preguntas seleccionadas de acuerdo al temario oficial del examen.</li>
      <li>Experiencia similar a la del examen real.</li>
      <li>Reporte detallado de respuestas y explicaciones.</li>
    </ul>
    <p>
      Prepárate de manera efectiva y aumenta tu confianza con cada intento.
    </p>
    <p>
      Este simulador está diseñado para que pongas a prueba tus conocimientos de forma completa y realista, proporcionándote una práctica precisa para el EXANI-III.
    </p>
  </div>
</div>


      <Footer></Footer>
    </>
  );
};

export default page;
