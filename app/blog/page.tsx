import Header from "../ui/landingPage/LandingHeader";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog_section.module.css";
import Footer from "../ui/landingPage/Footer";

const blogPosts = [
  {
    id: "exani-iii",
    category: "EXANI-III",
    title: "EXANI-III: guía completa para aspirantes a posgrado",
    description:
      "Conoce qué es el EXANI-III, cómo está estructurado, qué evalúa y cómo prepararte estratégicamente para aumentar tus probabilidades de ingreso a un posgrado.",
    image: "/landing/bg.jpg",
    link: "/blog/exani-iii",
  },
  {
    id: "acredita-bach",
    category: "ACREDITA-BACH",
    title: "Acredita-Bach 2026 NEM: guía completa para acreditar el bachillerato",
    description:
      "Descubre cómo es el nuevo Acredita-Bach 2026 con enfoque NEM, qué áreas evalúa, fechas de aplicación, costos y cómo prepararte con simuladores tipo Ceneval.",
    image: "/landing/bg3.jpg",
    link: "/blog/acredita-bach",
  },
  {
    id: "posgrados-beca-mexico",
    category: "Posgrados",
    title: "Posgrados con beca en México: buscador de programas",
    description:
      "Explora un buscador actualizado de posgrados en México con opciones de beca. Filtra por institución, nivel y área para encontrar el programa ideal para ti.",
    image: "/landing/bg2.webp",
    link: "/blog/posgrados-con-beca-en-mexico",
  },

  {
    id: "acredita-bach-nem-2026-2027",
    category: "ACREDITA-BACH NEM",
    title: "ACREDITA-BACH NEM 2026-2027: guía completa",
    description:
      "Conoce cómo es el ACREDITA-BACH NEM 2026-2027, sus áreas, estructura y cómo prepararte con simuladores.",
    image: "/landing/bg4.jpg",
    link: "/blog/guia-acredita-bach-nem",
  },
  {
    id: "consejos-aprobar-acredita-bach-nem",
    category: "ACREDITA-BACH NEM",
    title: "7 consejos para aprobar el ACREDITA-BACH NEM",
    description:
      "Consejos para prepararte mejor para el ACREDITA-BACH NEM: diagnóstico, práctica por áreas, revisión de errores y simuladores completos.",
    image: "/landing/bg5.jpg",
    link: "/blog/consejos-aprobar-acredita-bach-nem",
  },
];

const Blog = () => {
  return (
    <>
      <Header />

      <div className={styles["blog-page-container"]}>
        <div className={styles["blog-page-titles"]}>
          <h2>Blog</h2>
          <p>
            En el blog de Simulandum encontrarás guías, consejos y análisis sobre
            exámenes de ingreso y egreso, estrategias de estudio y
            recomendaciones prácticas para prepararte mejor y aumentar tus
            probabilidades de aprobar. Contenido claro, útil y directo al punto.
          </p>
        </div>

        <div className={styles["blog-grid"]}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles["blog-card"]}>
              <div className={styles["blog-card-image"]}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles["blog-image"]}
                />
              </div>

              <div className={styles["blog-card-content"]}>
                <span className={styles["blog-category"]}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <Link href={post.link} className={styles["blog-read-more"]}>
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
