import { EXAMENES } from "@/consts/options";
import { z } from "zod";

export const imageSchema = z.object({
    descripcion:z.string({
        required_error:"La descripcion es requerida"
    }).min(1,"La descripcion no puede estar vacia"),

    url:z.string({
        required_error:"La url es requerida"
    }),
    examen:z.enum(EXAMENES),
    tipo:z.string({
        required_error:"El tipo es requerido"
    })

})