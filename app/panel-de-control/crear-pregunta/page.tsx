"use client";
import Image from "next/image";
import styles from "./add.module.css";
import Select from "react-select";
import QuillComponent from "@/app/ui/admin/QuillComponent";
import {
  AnswerOptions,
  AreasOptions,
  QuestionOriginOptions,
  QuestionTypeOptions,
  SubjectsOptions,
  UserOptions,
} from "@/consts/options";
import { useState } from "react";
import UploadModal from "@/app/ui/admin/UploadModal";

const AddQuestion = () => {

  const [modal, setModal] = useState(false);


  return (
    <>

      {modal && 
      <>
        <UploadModal closeModal={()=>{
          setModal(false)
        }}></UploadModal>
      </>}

      <div className={styles.add_question_container}>
        <div className={styles.add_question_title}>
          <h2>Crear una pregunta</h2>
        </div>

        <form className={styles.add_product_form}>
          <div className={styles.form_container}>
            <div className={styles.left_form}>
              <div className={styles.add_product_title}>
                <h3>Añadir una pregunta</h3>

                <div className={styles.titles_buttons}>
            <button className={styles.bordered}>
              <Image src="/admin/watch.png" alt="Vista previa" width={20} height={20} />
              Vista previa
            </button>
            <button onClick={(e)=>{
              e.preventDefault()
              console.log("Hola click")
              setModal(true)
            }}>
              <Image src="/admin/upload-file.png" alt="Añadir" width={20} height={20} />
              Subir imagen
            </button>
          </div>

              </div>

              <div className={styles.add_product_inputs}>
                <div className={styles.input_duo}>
                  <label htmlFor="">Pregunta</label>
                  <QuillComponent></QuillComponent>
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Area</label>
                    <Select
                      placeholder="Selecciona el area"
                      options={AreasOptions}
                    ></Select>
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Tema</label>
                    <Select
                      placeholder="Selecciona el tema"
                      options={SubjectsOptions}
                    ></Select>
                  </div>
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Autor</label>
                    <Select
                      placeholder="Selecciona el autor"
                      options={UserOptions}
                    ></Select>
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Tipo de pregunta</label>
                    <Select
                      placeholder="Selecciona tipo"
                      options={QuestionTypeOptions}
                    ></Select>
                  </div>
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Origen de la pregunta</label>
                    <Select
                      placeholder="Selecciona el origen"
                      options={QuestionOriginOptions}
                    ></Select>
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Respuesta correcta</label>
                    <Select
                      placeholder="Selecciona la respuesta"
                      options={AnswerOptions}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={styles.right_form}>
              <div className={styles.right_form_titles}>
                <h3>Respuestas</h3>
                <p>
                    Añade uno a uno las respuestas correspondientes
                </p>
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
            </div> */}

            {/* Text answers */}

                <div className={styles.right_form}>
                <div className={styles.right_form_titles}>
                    <h3>Respuestas</h3>
                    <p>Añade uno a uno las respuestas correspondientes</p>
                </div>
                <div className={styles.form_img_answer}>
                    <h4>Respuesta 1</h4>
                    <QuillComponent placeholder="Ingresa la respuesta 1"></QuillComponent>

                    <h4>Explicacion 1</h4>

                    <QuillComponent placeholder="Ingresa la explicacion 1"></QuillComponent>
                </div>

                <div className={styles.form_img_answer}>
                    <h4>Respuesta 2</h4>

                    <QuillComponent placeholder="Ingresa la respuesta 2"></QuillComponent>

                    <h4>Explicacion 2</h4>

                    <QuillComponent placeholder="Ingresa la explicacion 2"></QuillComponent>
                </div>

                <div className={styles.form_img_answer}>
                    <h4>Respuesta 3</h4>
                    <QuillComponent placeholder="Ingresa la respuesta 3"></QuillComponent>

                    <h4>Explicacion 3</h4>

                    <QuillComponent placeholder="Ingresa la explicacion 3"></QuillComponent>
                </div>

                <div className={styles.form_buttons}>
                    <button className={styles.red_button}>Cancelar</button>
                    <button>Crear</button>
                </div>
                </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddQuestion;
