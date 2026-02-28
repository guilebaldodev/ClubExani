"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paqueteSchema } from "@/schemas/paqueteSchema";
import { z } from "zod";
import { examenOptions, Examen } from "@/consts/options";
import styles from "../crear-pregunta/add.module.css";
import Select from "react-select";
import { toast } from "react-toastify";
import { SelectOption } from "@/types/simulador";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type FormValues = z.infer<typeof paqueteSchema>;

const CrearPaquete = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(paqueteSchema),
    defaultValues: {
      titulo: "",
      examen: examenOptions[0].value,
      precio: 0,
      imagen: "",
      descripcion: "",
      descripcion_corta: "",
      simuladores: [],
      totalPreguntas: 0,
      activo: true,
    },
  });

  const selectedExamen = examenOptions.find(
    (op) => op.value === watch("examen")
  );

  const simuladoresCount = watch("simuladores")?.length ?? 0;

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/paquetes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result?.error || "Error");

      reset({
        titulo: "",
        examen: examenOptions[0].value,
        precio: 0,
        imagen: "",
        descripcion: "",
        descripcion_corta: "",
        simuladores: [],
        totalPreguntas: 0,
        activo: true,
      });

      toast.success("Paquete guardado correctamente");
      console.log("Paquete guardado", result);
    } catch (error) {
      toast.error("Hubo un problema");
      console.log(error);
    }
  };

  return (
    <div className={styles.add_question_container}>
      <div className={styles.add_question_title}>
        <h2>Crear un paquete</h2>
      </div>

      <form
        className={styles.add_product_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.form_container}>
          <div className={styles.complete_form}>
            <div className={styles.add_product_title}>
              <h3>Información del paquete</h3>

              <div className={styles.titles_buttons}>
                <button
                  type="button"
                  onClick={async () => {
                    const isValid = await trigger();
                    if (!isValid) {
                      toast.error(
                        "Por favor completa todos los campos antes de continuar"
                      );
                      return;
                    }

                    toast.success("Todos completos");

                    const formData = getValues();
                    localStorage.setItem(
                      "preview-paquete",
                      JSON.stringify(formData)
                    );

                    window.open(
                      "/panel-de-control/vista-previa-paquete",
                      "_blank"
                    );
                  }}
                  className={styles.bordered}
                >
                  <Image
                    src="/admin/watch.png"
                    alt="Vista previa"
                    width={20}
                    height={20}
                  />
                  Vista previa
                </button>
              </div>
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
                <label>Descripción corta</label>
                <textarea
                  {...register("descripcion_corta")}
                  className={styles.text_area}
                />
                {errors.descripcion_corta && (
                  <p className={styles.error}>
                    {errors.descripcion_corta.message}
                  </p>
                )}
              </div>

              <div className={styles.input_duo}>
                <label>Descripción</label>
                <ReactQuill
                  theme="snow"
                  value={watch("descripcion")}
                  onChange={(content) =>
                    setValue("descripcion", content, { shouldValidate: true })
                  }
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
                    if (selected) {
                      setValue("examen", selected.value as Examen, {
                        shouldValidate: true,
                      });
                    }
                  }}
                  placeholder="Selecciona el examen"
                />
                {errors.examen && (
                  <p className={styles.error}>{errors.examen.message}</p>
                )}
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
                  <label>Activo</label>
                  <Select
                    options={[
                      { value: "true", label: "Sí" },
                      { value: "false", label: "No" },
                    ]}
                    value={
                      watch("activo")
                        ? { value: "true", label: "Sí" }
                        : { value: "false", label: "No" }
                    }
                    onChange={(selected) => {
                      if (!selected) return;
                      setValue("activo", selected.value === "true", {
                        shouldValidate: true,
                      });
                    }}
                    placeholder="Activo"
                  />
                  {errors.activo && (
                    <p className={styles.error}>
                      {String(errors.activo.message)}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.double_input}>
                <div className={styles.input_duo}>
                  <label>Total de preguntas</label>
                  <input
                    type="number"
                    {...register("totalPreguntas", { valueAsNumber: true })}
                  />
                  {errors.totalPreguntas && (
                    <p className={styles.error}>
                      {errors.totalPreguntas.message}
                    </p>
                  )}
                  <p style={{ margin: "6px 0 0", fontSize: 12, opacity: 0.8 }}>
                    Sugerencia: si tus simuladores son de 120 preguntas, usa{" "}
                    <strong>{simuladoresCount} × 120</strong>.
                  </p>
                </div>
              </div>

              <div className={styles.input_duo}>
                <label>URL de imagen</label>
                <input {...register("imagen")} />
                {errors.imagen && (
                  <p className={styles.error}>{errors.imagen.message}</p>
                )}
              </div>

              <div className={styles.input_duo}>
                <label>Simuladores</label>
                <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>
                  Se agregan después desde la vista del paquete.
                </p>
              </div>
            </div>

            <div className={styles.form_buttons}>
              <button
                className={styles.red_button}
                type="button"
                onClick={() => reset()}
              >
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

export default CrearPaquete;