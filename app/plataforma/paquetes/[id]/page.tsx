import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PaquetePageClient from "../PaquetePageClient";
import type { Paquete } from "@/types/paquete";

const SITE_URL = "https://www.simulandum.com";

async function getPaquete(id: string): Promise<Paquete | null> {
  const res = await fetch(`${SITE_URL}/api/paquetes/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) return null;

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const paquete = await getPaquete(id);

  if (!paquete) {
    return {
      title: "Paquete no disponible | Simulandum",
      description: "El paquete no existe o no está disponible.",
    };
  }

  const title = paquete.titulo || "Paquete | Simulandum";
  const description =
    paquete.descripcion_corta ||
    `Paquete con ${paquete.totalPreguntas} preguntas en total.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/paquetes/${paquete._id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/paquetes/${paquete._id}`,
      images: paquete.imagen ? [paquete.imagen] : ["/og.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;


  
  const paquete = await getPaquete(id);
  console.log("hola??",id,paquete)
  if (!paquete) notFound();
  
  
  return <PaquetePageClient paquete={paquete} />;
}