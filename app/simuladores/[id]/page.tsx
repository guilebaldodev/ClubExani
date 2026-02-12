import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SimulatorPageClient from "./SimulatorPageClient";
import { Simulador } from "@/types";

const SITE_URL = "https://www.simulandum.com";

async function getSimulador(id: string): Promise<Simulador | null> {
  const res = await fetch(`${SITE_URL}/api/simuladores/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const simulador = await getSimulador(id);

  if (!simulador) {
    return {
      title: "Simulador no disponible | Simulandum",
      description: "El simulador no existe o no está disponible.",
    };
  }

  const title = simulador.titulo || "Simulador | Simulandum";
  const description =
    simulador.descripcion_corta ||
    `Simulador para ${simulador.examen} con ${simulador.totalPreguntas} preguntas.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/simuladores/${simulador._id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/simuladores/${simulador._id}`,
      images: simulador.imagen ? [simulador.imagen] : ["/og.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const simulador = await getSimulador(id);

  if (!simulador) notFound();

  return <SimulatorPageClient simulador={simulador} />;
}
