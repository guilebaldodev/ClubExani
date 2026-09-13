"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../blog/blog.module.css";

type Simulator = {
  id: string | number;
  titulo: string;
  imagen: string;
  preguntas: number;
  monedas: number;
  tipo: string;
  estado: string;
};

interface SimulatorCarouselProps {
  simulators: Simulator[];
}

const SimulatorCarousel = ({
  simulators,
}: SimulatorCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 5);

    setCanScrollRight(
      carousel.scrollLeft < maxScroll - 5
    );
  };

  useEffect(() => {
    updateButtons();

    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    return () => {
      carousel.removeEventListener(
        "scroll",
        updateButtons
      );

      window.removeEventListener(
        "resize",
        updateButtons
      );
    };
  }, [simulators]);

  const scroll = (
    direction: "left" | "right"
  ) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card =
      carousel.querySelector<HTMLElement>(
        `.${styles["simulador-card"]}`
      );

    const cardWidth = card?.offsetWidth ?? 250;

    const amount = cardWidth + 20;

    carousel.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,

      behavior: "smooth",
    });
  };

  if (!simulators.length) {
    return null;
  }

  return (
    <div className={styles["carousel-wrapper"]}>
      <button
        type="button"
        className={`${styles["carousel-arrow"]} ${styles["carousel-arrow-left"]}`}
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Ver simulador anterior"
      >
        ‹
      </button>

      <div
        ref={carouselRef}
        className={styles["cards-carousel"]}
      >
        {simulators.map((sim) => (
          <div
            key={sim.id}
            className={styles["simulador-card"]}
          >
            <div>
              <img
                src={sim.imagen}
                alt={sim.titulo}
              />

              <h4>{sim.titulo}</h4>

              <p>
                <strong>
                  {sim.preguntas}
                </strong>{" "}
                preguntas
              </p>

              <p>
                <strong>
                  {sim.monedas}
                </strong>{" "}
                monedas
              </p>
            </div>

            <Link
              href={
                sim.tipo === "paquete"
                  ? `/plataforma/paquetes/${sim.id}`
                  : `/plataforma/simuladores/${sim.id}`
              }
              className={
                sim.estado === "listo"
                  ? styles["boton"]
                  : styles["grey"]
              }
            >
              {sim.estado === "listo"
                ? "Detalles"
                : "Próximamente..."}
            </Link>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles["carousel-arrow"]} ${styles["carousel-arrow-right"]}`}
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Ver siguiente simulador"
      >
        ›
      </button>
    </div>
  );
};

export default SimulatorCarousel;