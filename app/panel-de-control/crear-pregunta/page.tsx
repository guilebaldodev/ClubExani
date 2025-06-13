"use client";
import { z } from "zod";
import Image from "next/image";
import styles from "./add.module.css";
import Select from "react-select";
import { useState } from "react";
import UploadModal from "@/app/ui/admin/UploadModal";
import { preguntaSchema } from "@/schemas/preguntaSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AREAS_POR_EXAMEN,
  examenOptions,
  OrigenOptions,
} from "@/consts/options";
import { SelectOption } from "@/types/shared";
import { toast } from "react-toastify";
import Link from "next/link";
import { QUESTION_TEMPLATES } from "@/consts/questions_templates";

type FormValues = z.infer<typeof preguntaSchema>;

const AddQuestion = () => {
  const [modal, setModal] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
    null
  );

  const EXAMENES_CON_4 = ["EXHCOBA", "ENARM", "Acredita-Bach"];

  const { register, reset, handleSubmit, setValue, watch, trigger, getValues } =
    useForm<FormValues>({
      resolver: zodResolver(preguntaSchema),
      defaultValues: {
        contenidoHTML: "",
        examen: examenOptions[0].value,
        area: "",
        origen: OrigenOptions[0].value,
        respuestaCorrecta: "0",
        respuestas: [
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
        ],
      },
    });

  const examenSeleccionado = watch("examen");

  const areasParaEsteExamen = AREAS_POR_EXAMEN[examenSeleccionado] || [];

  const areaOptions: SelectOption[] = areasParaEsteExamen.map((area) => ({
    label: area,
    value: area,
  }));

  const areaSeleccionada =
    areaOptions.find((op) => op.value === watch("area")) || null;

  const respuestas = watch("respuestas") as [
    { html: string; explicacion: string; esCorrecta: boolean },
    { html: string; explicacion: string; esCorrecta: boolean },
    { html: string; explicacion: string; esCorrecta: boolean },
    { html: string; explicacion: string; esCorrecta: boolean }
  ];
  const requiere4 = EXAMENES_CON_4.includes(examenSeleccionado);

  const AnswerOptions = respuestas
    .filter((_, index) => requiere4 || index < 3)
    .map((_, index) => ({
      value: index.toString(),
      label: `Respuesta ${index + 1}`,
    }));

  const onSubmit = async (data: FormValues) => {
    try {
      const respuestasFiltradas = requiere4
        ? data.respuestas
        : data.respuestas.slice(0, 3);

      const cleanText = (html: string) => html.trim();

      const payload = {
        ...data,
        contenidoHTML: cleanText(data.contenidoHTML),
        respuestas: respuestasFiltradas.map((r) => ({
          html: cleanText(r.html),
          explicacion: cleanText(r.explicacion),
          esCorrecta: r.esCorrecta,
        })),
      };

      console.log(payload,"paaaayload")



      const res = await fetch("/api/preguntas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      reset({
        contenidoHTML: "",
        examen: examenOptions[0].value,
        area: "",
        origen: OrigenOptions[0].value,
        respuestaCorrecta: "0",
        respuestas: [
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
          { html: "", explicacion: "", esCorrecta: false },
        ],
      });

      console.log(result);

      toast.success("Pregunta generada correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un errro");
    }
  };

  return (
    <>
      {modal && (
        <>
          <UploadModal
            closeModal={() => {
              setModal(false);
            }}
          ></UploadModal>
        </>
      )}

      <div className={styles.add_question_container}>
        <div className={styles.add_question_title}>
          <h2>Crear una pregunta</h2>

          <div style={{ maxWidth: "300px", marginTop: "1rem" }}>
            <Select
              placeholder="Selecciona una plantilla"
              options={QUESTION_TEMPLATES.map((t) => ({
                value: t.id,
                label: t.label,
              }))}
              isClearable
              onChange={(option) => {
                const id = option?.value || null;
                setSelectedTemplateId(id);

                if (id) {
                  const template = QUESTION_TEMPLATES.find((t) => t.id === id);
                  if (template) {
                    setValue("contenidoHTML", template.empty.questionHTML);
                    for (let i = 0; i <= 3; i++) {
                      setValue(
                        `respuestas.${i}.html` as any,
                        template.empty.answerHTML
                      );
                      setValue(`respuestas.${i}.explicacion` as any, "");
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.add_product_form}
        >
          <div className={styles.form_container}>
            <div className={styles.left_form}>
              <div className={styles.add_product_title}>
                <h3>Añadir una pregunta</h3>

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

                      const form = getValues();

                      const respuestasFiltradas = requiere4
                        ? form.respuestas
                        : form.respuestas.slice(0, 3);

                      const formData = {
                        ...form,
                        respuestas: respuestasFiltradas,
                      };

                      localStorage.setItem(
                        "preview-question",
                        JSON.stringify(formData)
                      );

                      window.open(
                        "/panel-de-control/vista-previa-pregunta",
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

                  <Link href={"/panel-de-control/configuraciones"}>
                    <Image
                      src="/admin/configuraciones.png"
                      alt="Configuraciones"
                      width={20}
                      height={20}
                    />
                    Configuraciones
                  </Link>
                </div>
              </div>

              <div className={styles.add_product_inputs}>
                <div className={styles.input_duo}>
                  <label htmlFor="contenidoHTML">
                    Código HTML de la pregunta
                  </label>
                  <textarea
                    rows={10}
                    {...register("contenidoHTML")}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      fontFamily: "monospace",
                      fontSize: "14px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      backgroundColor: "#f9f9f9",
                    }}
                  />
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Examen</label>
                    <Select
                      placeholder="Selecciona el examen"
                      value={examenOptions.find(
                        (op) => op.value === examenSeleccionado
                      )}
                      options={examenOptions}
                      onChange={(selected) => {
                        if (selected) setValue("examen", selected.value);
                      }}
                    ></Select>
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Area</label>
                    <Select
                      placeholder="Selecciona el area"
                      options={areaOptions}
                      value={areaSeleccionada}
                      isDisabled={areaOptions.length === 0}
                      onChange={(selected) => {
                        if (selected) setValue("area", selected.value);
                      }}
                    ></Select>
                  </div>
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Origen de la pregunta</label>
                    <Select
                      placeholder="Selecciona el origen"
                      value={OrigenOptions.find(
                        (op) => op.value === watch("origen")
                      )}
                      options={OrigenOptions}
                      onChange={(selected: SelectOption | null) => {
                        if (selected) setValue("origen", selected.value);
                      }}
                    ></Select>
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Respuesta correcta</label>
                    <Select
                      placeholder="Selecciona la respuesta"
                      options={AnswerOptions}
                      value={AnswerOptions.find(
                        (op) => op.value === watch("respuestaCorrecta")
                      )}
                      onChange={(selected) => {
                        if (selected)
                          setValue(
                            "respuestaCorrecta",
                            selected.value as "0" | "1" | "2" | "3"
                          );
                      }}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>

            <>
              <div className={styles.right_form}>
                <div className={styles.right_form_titles}>
                  <h3>Respuestas</h3>
                  <p>Añade uno a uno las respuestas correspondientes</p>
                </div>
                <div className={styles.form_img_answer}>
                  <h4>Respuesta 1</h4>
                  <textarea
                    {...register(`respuestas.${0}.html`)}
                    className={styles.text_area}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />
                  <h4>Explicacion 1</h4>
                  <textarea
                    className={styles.text_area}
                    {...register(`respuestas.${0}.explicacion`)}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />
                </div>

                <div className={styles.form_img_answer}>
                  <h4>Respuesta 2</h4>
                  <textarea
                    {...register(`respuestas.${1}.html`)}
                    className={styles.text_area}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />
                  <h4>Explicacion 2</h4>
                  <textarea
                    className={styles.text_area}
                    {...register(`respuestas.${1}.explicacion`)}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />{" "}
                </div>

                <div className={styles.form_img_answer}>
                  <h4>Respuesta 3</h4>
                  <textarea
                    {...register(`respuestas.${2}.html`)}
                    className={styles.text_area}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />
                  <h4>Explicacion 3</h4>
                  <textarea
                    className={styles.text_area}
                    {...register(`respuestas.${2}.explicacion`)}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />{" "}
                </div>

                <div className={styles.form_img_answer}>
                  <h4>Respuesta 4</h4>
                  <textarea
                    disabled={requiere4 ? false : true}
                    {...register(`respuestas.${3}.html`)}
                    required={requiere4 ? true : false}
                    className={styles.text_area}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />
                  <h4>Explicacion 4</h4>
                  <textarea
                    disabled={requiere4 ? false : true}
                    required={requiere4 ? true : false}
                    {...register(`respuestas.${3}.explicacion`)}
                    className={styles.text_area}
                    placeholder={`<p>¿Cuál es el valor de x?</p>\n<img src="/uploads/x.png" />`}
                  />{" "}
                </div>

                <div className={styles.form_buttons}>
                  {/* <button className={styles.red_button}>Cancelar</button> */}
                  <button type="submit">Crear</button>
                </div>
              </div>
            </>

            {/* <>
                <div className={styles.right_form}>
                  <div className={styles.right_form_titles}>
                    <h3>Respuestas</h3>
                    <p>Añade uno a uno las respuestas correspondientes</p>
                  </div>
                  <div className={styles.form_img_answer}>
                    <h4>Respuesta 1</h4>

                    <div className={styles.upload}>
                      <div className={styles.upload_file}>
                        <Image
                          src={"/admin/upload-icon.png"}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <span>Click aqui para subir una imagen</span>
                      </div>

                      <div className={styles.upload_items}>
                        <div className={styles.upload_item}>
                          <div className={styles.upload_info}>
                            <Image
                              src={"/products/bulls/product-3.webp"}
                              height={36}
                              width={36}
                              alt=""
                            />
                            <div className={styles.upload_info_texts}>
                              <p className={styles.grey}>imagen.png</p>
                              <p>97.KB</p>
                            </div>
                          </div>
                          <Image
                            src={"/admin/x.png"}
                            height={15}
                            width={15}
                            alt="x"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.form_img_answer}>
                    <h4>Respuesta 2</h4>

                    <div className={styles.upload}>
                      <div className={styles.upload_file}>
                        <Image
                          src={"/admin/upload-icon.png"}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <span>Click aqui para subir una imagen</span>
                      </div>

                      <div className={styles.upload_items}>
                        <div className={styles.upload_item}>
                          <div className={styles.upload_info}>
                            <Image
                              src={"/products/bulls/product-3.webp"}
                              height={36}
                              width={36}
                              alt=""
                            />
                            <div className={styles.upload_info_texts}>
                              <p className={styles.grey}>imagen.png</p>
                              <p>97.KB</p>
                            </div>
                          </div>
                          <Image
                            src={"/admin/x.png"}
                            height={15}
                            width={15}
                            alt="x"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.form_img_answer}>
                    <h4>Respuesta 3</h4>

                    <div className={styles.upload}>
                      <div className={styles.upload_file}>
                        <Image
                          src={"/admin/upload-icon.png"}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <span>Click aqui para subir una imagen</span>
                      </div>

                      <div className={styles.upload_items}>
                        <div className={styles.upload_item}>
                          <div className={styles.upload_info}>
                            <Image
                              src={"/products/bulls/product-3.webp"}
                              height={36}
                              width={36}
                              alt=""
                            />
                            <div className={styles.upload_info_texts}>
                              <p className={styles.grey}>imagen.png</p>
                              <p>97.KB</p>
                            </div>
                          </div>
                          <Image
                            src={"/admin/x.png"}
                            height={15}
                            width={15}
                            alt="x"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.form_buttons}>
                    <button className={styles.red_button}>Cancelar</button>
                    <button>Crear</button>
                  </div>
                </div>
              </> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddQuestion;
