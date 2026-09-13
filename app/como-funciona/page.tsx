import type { Metadata } from "next";
import Header from "../ui/landingPage/LandingHeader";
import Footer from "../ui/landingPage/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Coins,
  ClipboardCheck,
  ArrowRight,
  Play,
} from "lucide-react";
import style from "./como-funciona.module.css";

export const metadata: Metadata = {
  title: "Cómo funciona Simulandum | Simuladores para tus exámenes",
  description:
    "Conoce cómo funciona Simulandum: obtén monedas, desbloquea simuladores, practica por áreas y revisa tus resultados.",
  alternates: {
    canonical: "https://www.simulandum.com/como-funciona",
  },
  openGraph: {
    title: "Cómo funciona Simulandum",
    description:
      "Descubre cómo practicar con simuladores, reforzar tus áreas y avanzar en tu preparación.",
    url: "https://www.simulandum.com/como-funciona",
    images: ["/og.png"],
  },
};

const ComoFunciona = () => {
  return (
    <>
      <Header />

      <main className={style["how-page"]}>
        {/* =====================================================
            TITULO
        ====================================================== */}

        <section className={style["how-titles"]}>
          <h2>Cómo funciona</h2>

          <p>
            Prepárate a tu ritmo con simuladores, prácticas por área y
            herramientas para conocer tu progreso.
          </p>
        </section>

        {/* =====================================================
            PASOS
        ====================================================== */}

        <section className={style["steps-section"]}>
          {/* PASO 1 */}

          <div
            className={`${style["step-card"]} ${style["step-card-one"]}`}
          >
            <span className={style["step-number"]}>1</span>

            <h3>Obtén monedas</h3>

            <p>
              Elige el paquete de monedas que más te convenga y agrégalas a tu
              cuenta para utilizarlas dentro de Simulandum.
            </p>
          </div>

          <div className={style["step-arrow"]}>→</div>

          {/* PASO 2 */}

          <div
            className={`${style["step-card"]} ${style["step-card-one"]}`}
          >
            <span className={style["step-number"]}>2</span>

            <h3>Canjea tus monedas</h3>

            <p>
              Utilízalas para desbloquear simuladores completos, paquetes o
              prácticas específicas por área.
            </p>
          </div>

          <div className={style["step-arrow"]}>→</div>

          {/* PASO 3 */}

          <div
            className={`${style["step-card"]} ${style["step-card-one"]}`}
          >
            <span className={style["step-number"]}>3</span>

            <h3>Comienza a practicar</h3>

            <p>
              Resuelve tus simuladores, consulta tus resultados e identifica
              qué áreas necesitas reforzar.
            </p>
          </div>
        </section>

        {/* =====================================================
            INFORMACIÓN EXTRA
        ====================================================== */}

        <section className={style["info-panels"]}>
          <div className={style["info-panel"]}>
            <div className={style["info-icon"]}>
              <Image
                src="/landing/grey-coins.png"
                alt="Monedas de Simulandum"
                width={58}
                height={58}
              />
            </div>

            <div>
              <h3>Tus monedas, tú decides</h3>

              <p>
                No necesitas comprar un simulador específico. Agrega monedas a
                tu cuenta y utilízalas en los simuladores que quieras.
              </p>
            </div>
          </div>

          <div className={style["info-panel"]}>
            <div className={style["info-icon"]}>
              <Image
                src="/landing/blue-gift.png"
                alt="Simuladores gratuitos"
                width={58}
                height={58}
              />
            </div>

            <div>
              <h3>También puedes empezar gratis</h3>

              <p>
                Algunos simuladores de diagnóstico cuestan 0 monedas, así
                puedes conocer Simulandum antes de comprar.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTONES
        ====================================================== */}

        <section className={style["main-cta"]}>
          <Link href="/creditos" className={style["buy-button"]}>
            <Coins size={21} />
            Comprar monedas
          </Link>

          <Link href="/simuladores" className={style["simulators-button"]}>
            <ClipboardCheck size={21} />
            Ver simuladores
          </Link>
        </section>

        {/* =====================================================
            EXAMENES
        ====================================================== */}

        {/* <section className={style["exam-section"]}>
          <div className={style["exam-text"]}>
            <span>Tu preparación, nuestros simuladores</span>

            <h2>Elige tu examen</h2>

            <p>
              Ya sea EXANI III o ACREDITA-BACH NEM, en Simulandum encontrarás
              simuladores completos y prácticas por área para reforzar tu
              preparación.
            </p>
          </div>

          <div className={style["exam-cards"]}>
            <Link href="/simuladores" className={style["exam-card"]}>
              <div className={style["exam-icon"]}>
                <Image
                  src="/landing/graduation.png"
                  alt="EXANI III"
                  width={52}
                  height={52}
                />
              </div>

              <div className={style["exam-card-text"]}>
                <h3>EXANI III</h3>
                <p>Simuladores completos y prácticas por área</p>
              </div>

              <ArrowRight size={21} />
            </Link>

            <Link href="/simuladores" className={style["exam-card"]}>
              <div className={style["exam-icon"]}>
                <Image
                  src="/landing/book.png"
                  alt="ACREDITA-BACH NEM"
                  width={52}
                  height={52}
                />
              </div>

              <div className={style["exam-card-text"]}>
                <h3>ACREDITA-BACH NEM</h3>
                <p>Simuladores completos y prácticas por área</p>
              </div>

              <ArrowRight size={21} />
            </Link>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
};

export default ComoFunciona;