import Header from "../ui/landingPage/LandingHeader";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog_section.module.css";

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
    id: "posgrados-beca-mexico",
    category: "Posgrados",
    title: "Posgrados con beca en México: buscador de programas",
    description:
      "Explora un buscador actualizado de posgrados en México con opciones de beca. Filtra por institución, nivel y área para encontrar el programa ideal para ti.",
    image: "/landing/bg2.webp",
    link: "/blog/posgrados-con-beca-en-mexico",
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
    </>
  );
};

export default Blog;
