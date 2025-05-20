"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { simuladorSchema } from "@/schemas/simuladorSchema";
import { z } from "zod";
import { tipoOptions, dificultadOptions } from "@/app/utils/consts";
import styles from "../crear-pregunta/add.module.css";
import Select from "react-select";
import { toast } from "react-toastify";

type FormValues = z.infer<typeof simuladorSchema>;

const AddSimulador = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(simuladorSchema),
    defaultValues: {
      titulo: "",
      examen: "",
      tipo: tipoOptions[0].value,
      dificultad: dificultadOptions[0].value,
      precio: 0,
      tiempo: 60,
      imagen: "",
    },
  });

  const selectedTipo = tipoOptions.find((op) => op.value === watch("tipo"));
  const selectedDificultad = dificultadOptions.find(
    (op) => op.value === watch("dificultad")
  );

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/simuladores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      console.log("resykkk",result,"ss")

      if (!res.ok) {
        toast.error("Hubo un problema")

        console.log("Error", result);
      }

    reset({
      titulo: "",
      examen: "",
      tipo: tipoOptions[0].value,
      dificultad: dificultadOptions[0].value,
      precio: 0,
      tiempo: 60,
      imagen: "",
    });

      toast.success("Simulador guardado correctamente")
      console.log("Simulador Guardado", result);
    } catch (error) {
      toast.error("Hubo un problema")
      console.log(error);
    }
  };

  return (
    <div className={styles.add_question_container}>
      <div className={styles.add_question_title}>
        <h2>Crear un simulador</h2>
      </div>

      <form
        className={styles.add_product_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.form_container}>
          <div className={styles.complete_form}>
            <div className={styles.add_product_title}>
              <h3>Información del simulador</h3>
              <div className={styles.titles_buttons}></div>
            </div>

            <div className={styles.add_product_inputs}>
              <div className={styles.input_duo}>
                <label>Título</label>
                <input {...register("titulo")} />
                <div className={styles.error}>
                  {errors.titulo && <p>{errors.titulo.message}</p>}
                </div>
              </div>

              <div className={styles.input_duo}>
                <label>Nombre del examen</label>
                <input {...register("examen")} />
                <div className={styles.error}>
                  {errors.examen && <p>{errors.examen.message}</p>}
                </div>
              </div>

              <div className={styles.double_input}>
                <div className={styles.input_duo}>
                  <label>Tipo</label>
                  <Select
                    options={tipoOptions}
                    value={selectedTipo}
                    onChange={(selected) => setValue("tipo", selected!.value)}
                    placeholder="Selecciona el tipo"
                  />
                  <div className={styles.error}>
                    {errors.tipo && <p>{errors.tipo.message}</p>}
                  </div>
                </div>

                <div className={styles.input_duo}>
                  <label>Dificultad</label>
                  <Select
                    options={dificultadOptions}
                    value={selectedDificultad}
                    onChange={(selected) =>
                      setValue("dificultad", selected!.value)
                    }
                    placeholder="Selecciona la dificultad"
                  />
                  <div className={styles.error}>
                    {errors.dificultad && <p>{errors.dificultad.message}</p>}
                  </div>
                </div>
              </div>

              <div className={styles.double_input}>
                <div className={styles.input_duo}>
                  <label>Precio (monedas)</label>
                  <input
                    type="number"
                    {...register("precio", { valueAsNumber: true })}
                  />
                  <div className={styles.error}>
                    {errors.precio && <p>{errors.precio.message}</p>}
                  </div>
                </div>

                <div className={styles.input_duo}>
                  <label>Tiempo (minutos)</label>
                  <input
                    type="number"
                    {...register("tiempo", { valueAsNumber: true })}
                  />
                  <div className={styles.error}>
                    {errors.tiempo && <p>{errors.tiempo.message}</p>}
                  </div>
                </div>
              </div>

              <div className={styles.input_duo}>
                <label>URL de imagen</label>
                <input {...register("imagen")} />
                <div className={styles.error}>
                  {errors.imagen && <p>{errors.imagen.message}</p>}
                </div>
              </div>
            </div>

            <div className={styles.form_buttons}>
              <button className={styles.red_button} type="button">
                Cancelar
              </button>
              <button type="submit">Crear</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSimulador;
