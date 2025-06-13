import Image from "next/image";
import styles from "./css/Modal.module.css";
import Select from "react-select";
import {
  Examen,
  examenOptions,
  ImagenOptions,
  imageOptions,
} from "@/consts/options";
import { useState } from "react";
import { SelectOption } from "@/types/shared";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { imageSchema } from "@/schemas/imagenSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UploadModalProps = {
  closeModal: () => void;
};

type FormValues = z.infer<typeof imageSchema>;

const UploadModal = ({ closeModal }: UploadModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: errors,
  } = useForm<FormValues>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      descripcion: "",
      examen: examenOptions[0].value,
      tipo: imageOptions[0].value,
      url: "",
      public_id: "",
    },
  });

  const selectedExamen = examenOptions.find(
    (op) => op.value === watch("examen")
  );
  const selectedTipo = imageOptions.find((op) => op.value === watch("tipo"));

  const [imagen, setImagen] = useState<File | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

      if (!imagen) {
        toast.error("Selecciona una imagen antes de subir");
        return;
      }

      const formData = new FormData();
      formData.append("file", imagen);
      formData.append("upload_preset", "Simulandum");

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data_img = await res.json();
      const url = data_img.secure_url;
      setValue("url", url);
      setValue("public_id",data_img.public_id)

      
      const payload = {
        descripcion: data.descripcion,
        url,
        tipo: data.tipo,
        examen: data.examen,
        public_id:data_img.public_id    
      };
      

      const request = await fetch("/api/imagenes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log(request);

      await navigator.clipboard.writeText(watch("url"));
      toast.success("Subida correcta, link copiado al portapapeles");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error");
    }
  };

  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.add_modal}>
          <div className={styles.add_modal_title}>
            <div>
              <Image
                src="/admin/upload-icon.png"
                alt="category icon"
                width={25}
                height={25}
              />
              <h3>Añadir Imagen</h3>
            </div>
            <Image
              className={styles.add_modal_x}
              onClick={() => {
                closeModal();
              }}
              alt="x icon"
              width={20}
              height={20}
              src="/admin/x.png"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.add_modal_form}
          >
            <div className={styles.upload}>
              <label className={styles.upload_file}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImagen(e.target.files[0]);
                    }
                  }}
                  hidden
                />
                <Image
                  src={"/admin/upload-icon.png"}
                  alt=""
                  width={40}
                  height={40}
                />
                <span>Click aqui para subir una imagen</span>
              </label>

              <div className={styles.upload_items}>
                {imagen && (
                  <div className={styles.upload_item}>
                    <div className={styles.upload_info}>
                      <Image
                        src={URL.createObjectURL(imagen)}
                        height={36}
                        width={36}
                        alt="preview"
                      />
                      <div className={styles.upload_info_texts}>
                        <p className={styles.grey}>{imagen.name}</p>
                        <p>{(imagen.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <Image
                      src={"/admin/x.png"}
                      height={15}
                      width={15}
                      alt="x"
                      onClick={() => setImagen(null)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.input_duo}>
              <label htmlFor="">Descripcion</label>
              <input
                {...register("descripcion")}
                className={styles.link_input}
              />
            </div>
            <div className={styles.double_input}>
              <div className={styles.input_duo}>
                <label htmlFor="">Tipo de imagen</label>
                <div>
                  <Select
                    options={ImagenOptions}
                    placeholder="Selecciona el tipo"
                    value={selectedTipo}
                    onChange={(selected: SelectOption | null) => {
                      if (selected) setValue("tipo", selected.value);
                    }}
                  ></Select>
                </div>
              </div>

              <div className={styles.input_duo}>
                <label htmlFor="">Examen</label>
                <div>
                  <Select
                    options={examenOptions}
                    placeholder="Selecciona el area"
                    value={selectedExamen}
                    onChange={(selected: SelectOption | null) => {
                      if (selected)
                        setValue("examen", selected.value as Examen);
                    }}
                  ></Select>
                </div>
              </div>
            </div>

            <div className={styles.input_duo}>
              <label htmlFor="">Link Generado</label>
              <input
                {...register("url")}
                className={styles.link_input}
                type="text"
              />
            </div>

            <div className={styles.form_buttons}>
              {/* <button className={styles.red_button}>Borrar imagen</button> */}
              <button>Subir imagen</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
