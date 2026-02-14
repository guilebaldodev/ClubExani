import type { Metadata } from "next";
import Footer from "@/app/ui/landingPage/Footer";
import Header from "@/app/ui/landingPage/LandingHeader";
import styles from "../blog.module.css";
import Image from "next/image";
import Link from "next/link";
import ProgramFinder from "./ProgramFinder";

export const metadata: Metadata = {
  title: "Posgrados con beca en México (SNP) | Simulandum",
  description:
    "Buscador de posgrados con reconocimiento en el Sistema Nacional de Posgrados (SNP): filtra por institución y nivel. Prepárate para el EXANI III con Simulandum.",
  alternates: {
    canonical: "https://www.simulandum.com/blog/posgrados-con-beca",
  },
  openGraph: {
    title: "Posgrados con beca en México (SNP) | Simulandum",
    description:
      "Encuentra maestrías, doctorados y especialidades con reconocimiento SNP 2025. Practica EXANI III con Simulandum.",
    url: "https://www.simulandum.com/blog/posgrados-con-beca",
    images: ["/og.png"],
  },
};

const Page = () => {
  return (
    <>
      <Header />

      <div className={`${styles["blog-header"]} ${styles["blog-header2"]}`}>
        <div className={styles["overlay"]}>
          <div className={styles["blog-header-texts"]}>
            <h3>SNP</h3>
            <h2>Buscador de posgrados con beca en México</h2>

            <div className={styles["brands"]}>
              <div className={styles["brand"]}>
                <Image
                  width={50}
                  height={50}
                  src="/layout/logo.png"
                  alt="Simulandum logo"
                />
                <span>Simulandum</span>
              </div>

              <div className={styles["brand"]}>
                <Image
                  width={44}
                  height={44}
                  src="/layout/ceneval.png"
                  alt="Ceneval logo"
                />
                <span>EXANI III</span>
              </div>
            </div>

       

      
          </div>
        </div>
      </div>

      <div className={styles["blog-container2"]}>
       
     

        <h2 id="buscador">Buscador SNP</h2>
<p>
  Filtra por institución y nivel. También puedes buscar por palabras
  (ejemplo: “Ciencia de Datos”, “Robótica”, “Derecho”).<br /><br />
    Nota: El listado corresponde a programas con reconocimiento en el
    <strong> Sistema Nacional de Posgrados (SNP) 2025</strong> y pueden
    participar en la convocatoria de becas nacionales.
</p>


        <ProgramFinder />

        <h2>Cómo usar este buscador (rápido)</h2>
        <ul>
          <li>
            Si ya tienes una universidad en mente, filtra por{" "}
            <strong>institución</strong>.
          </li>
          <li>
            Si te interesa el grado, filtra por{" "}
            <strong>maestría / doctorado / especialidad</strong>.
          </li>
          <li>
            Si no sabes dónde aplicar, busca por tema (por ejemplo:{" "}
            <strong>“computación”</strong>).
          </li>
        </ul>

        <h2>Último empujón</h2>
        <p>
          Elegir posgrado es solo la mitad. La otra mitad es llegar preparado al
          proceso de admisión. Si te piden EXANI III,{" "}
          <Link href="/simuladores" className={styles["link"]}>
            aquí puedes practicar con Simulandum
          </Link>
          .
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Page;
