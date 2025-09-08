'use client';

import { useUserStore } from "@/stores/userStore";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function InitUser() {
  const { isSignedIn, user } = useUser();
  const setUser = useUserStore((state) => state.setUser)


  useEffect(() => {

    console.log("monto")
    const init = async()=>{
      if (isSignedIn) {
        console.log("Se inicio")
        const res = await fetch("/api/usuario/init", { method: "POST" });
        const data = await res.json()
      
      
        console.log(data)

      setUser({
        clerkId: data.clerkId,
        email: data.email,
        nombre: data.nombre,
        estado: data.estado,
        edad: data.edad,
        rol: data.rol,
        monedas: data.monedas,
        simuladoresCanjeados: data.simuladoresCanjeados.map((s: any) => ({
          simuladorId: s.simuladorId,
          fecha: s.fecha,
          monedasPagadas: s.monedasPagadas,
          uso_justo: s.uso_justo,
        })),
      });
      
      }else{
      console.log("no entro")

      }

    }

    init()

  }, [isSignedIn,user,setUser]);

  return null;
}
