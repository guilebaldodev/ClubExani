"use client";

import { useUserStore } from "@/stores/userStore";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function InitUser() {
  const { isSignedIn, user } = useUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const init = async () => {
      if (isSignedIn) {
        const res = await fetch("/api/usuario/init", { method: "POST" });
        const data = await res.json();
        
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
      } else {
        console.log("no entro");
      }
    };

    init();
  }, [isSignedIn, user, setUser]);

  return null;
}
