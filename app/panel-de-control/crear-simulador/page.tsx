"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { simuladorSchema } from "@/schemas/simuladorSchema";
import { z } from "zod";
import {
  tipoOptions,
  dificultadOptions,
  examenOptions,
  Examen,
} from "@/consts/options";
import styles from "../crear-pregunta/add.module.css";
import Select from "react-select";
import { toast } from "react-toastify";
import { SelectOption } from "@/types/simulador"; 

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });


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
      examen: examenOptions[0].value,
      tipo: tipoOptions[0].value,
      dificultad: dificultadOptions[0].value,
      precio: 0,
      tiempo: 60,
      imagen: "",
      descripcion: "",
    },
  });

  const selectedExamen = examenOptions.find(
    (op) => op.value === watch("examen")
  );
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

      if (!res.ok) throw new Error("Error");

      reset({
        titulo: "",
        examen: examenOptions[0].value,
        tipo: tipoOptions[0].value,
        dificultad: dificultadOptions[0].value,
        precio: 0,
        tiempo: 60,
        imagen: "",
      });

      toast.success("Simulador guardado correctamente");
      console.log("Simulador Guardado", result);
    } catch (error) {
      toast.error("Hubo un problema");
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
            </div>

            <div className={styles.add_product_inputs}>
              <div className={styles.input_duo}>
                <label>Título</label>
                <input {...register("titulo")} />
                {errors.titulo && (
                  <p className={styles.error}>{errors.titulo.message}</p>
                )}
              </div>

              <div className={styles.input_duo}>
                <label>Descripción</label>
                <ReactQuill
                  theme="snow"
                  value={watch("descripcion")}
                  onChange={(content) => setValue("descripcion", content)}
                  style={{ height: "120px", marginBottom: "3rem" }}
                />
                {errors.descripcion && (
                  <p className={styles.error}>{errors.descripcion.message}</p>
                )}
              </div>

              <div className={styles.input_duo}>
                <label>Nombre del examen</label>
                <Select
                  options={examenOptions}
                  value={selectedExamen}
                  onChange={(selected: SelectOption | null) => {
                    if (selected) setValue("examen", selected.value as Examen);
                  }}
                  placeholder="Selecciona el examen"
                />
                {errors.examen && (
                  <p className={styles.error}>{errors.examen.message}</p>
                )}
              </div>

              <div className={styles.double_input}>
                <div className={styles.input_duo}>
                  <label>Tipo</label>
                  <Select
                    options={tipoOptions}
                    value={selectedTipo}
                    onChange={(selected: SelectOption | null) => {
                      if (selected) setValue("tipo", selected.value);
                    }}
                    placeholder="Selecciona el tipo"
                  />
                  {errors.tipo && (
                    <p className={styles.error}>{errors.tipo.message}</p>
                  )}
                </div>

                <div className={styles.input_duo}>
                  <label>Dificultad</label>
                  <Select
                    options={dificultadOptions}
                    value={selectedDificultad}
                    onChange={(selected: SelectOption | null) => {
                      if (selected) setValue("dificultad", selected.value);
                    }}
                    placeholder="Selecciona la dificultad"
                  />
                  {errors.dificultad && (
                    <p className={styles.error}>{errors.dificultad.message}</p>
                  )}
                </div>
              </div>

              <div className={styles.double_input}>
                <div className={styles.input_duo}>
                  <label>Precio (monedas)</label>
                  <input
                    type="number"
                    {...register("precio", { valueAsNumber: true })}
                  />
                  {errors.precio && (
                    <p className={styles.error}>{errors.precio.message}</p>
                  )}
                </div>

                <div className={styles.input_duo}>
                  <label>Tiempo (minutos)</label>
                  <input
                    type="number"
                    {...register("tiempo", { valueAsNumber: true })}
                  />
                  {errors.tiempo && (
                    <p className={styles.error}>{errors.tiempo.message}</p>
                  )}
                </div>
              </div>

              <div className={styles.input_duo}>
                <label>URL de imagen</label>
                <input {...register("imagen")} />
                {errors.imagen && (
                  <p className={styles.error}>{errors.imagen.message}</p>
                )}
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
