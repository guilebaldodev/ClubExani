"use client";

import { useUserStore } from "@/stores/userStore";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function InitUser() {
  const { isSignedIn, isLoaded, user } = useUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const init = async () => {
      if (isLoaded && isSignedIn) {
        const res = await fetch("/api/usuario/init", { method: "POST",
          credentials:"include"
        });


        if (!res.ok) {
          console.error("Fallo init user:", res.status);
          return;
        }

        const data = await res.json();

        console.log(data, "dataa");

        setUser({
          clerkId: data.clerkId,
          email: data.email,
          nombre: data.nombre,
          estado: data.estado,
          edad: data.edad,
          rol: data.rol,
          monedas: data.monedas,
          simuladoresCanjeados: data.simuladoresCanjeados
        });
      }
    };

    init();
  }, [isLoaded, isSignedIn, user, setUser]);

  return null;
}
