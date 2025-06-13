"use client";
import { Imagen } from "@/types/imagen";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import styles from "./css/Modal.module.css";
import ConfirmDeleteModal from "./ConfirmModal";

type Props = {
  imagen: Imagen;
  closeModal: () => void;
};

const ViewModal = ({ imagen, closeModal }: Props) => {
  const [preguntaId, setPreguntaId] = useState("");
    const [showConfirm, setShowConfirm] = useState("");


  const asociarPregunta = async () => {
    try {

      if(!preguntaId)return alert("Ingresa un id")

      const res = await fetch(`/api/imagenes/${imagen._id}/asociar`, {
        method: "POST",
        body: JSON.stringify({ preguntaId }),
        headers: { "Content-Type": "application/json" },
      });

      const data= await res.json()

      console.log(data)

      if (!res.ok) throw new Error();

      toast.success("Pregunta asociada");
      setPreguntaId("");
      closeModal()
    } catch (err) {
      toast.error("Error al asociar pregunta");
    }
  };

  const deleteAssociation = async (preguntaId: string) => {


    try {
      const res = await fetch(`/api/imagenes/${imagen._id}/asociar`, {
        method: "DELETE",
        body: JSON.stringify({ preguntaId}),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Error al eliminar asociacion");
        return false;
      }
      
      closeModal()
      toast.success("asociacion eliminada correctamente");
      return true;
    } catch (error) {
      toast.error("Error del servidor");
      return false;
    }
  };


  return (
    <div className={styles.modal_container}>

      {showConfirm && (
        <ConfirmDeleteModal
          title="¿Eliminar asociacion?"
          message="Esta acción no se puede revertir."
          onConfirm={async () => {
            await deleteAssociation(showConfirm);
            setShowConfirm("");
          }}
          onCancel={() => setShowConfirm("")}
        />
      )}


      <div className={styles.add_modal}>
        <div className={styles.add_modal_title}>
          <div>
            <Image src="/admin/blue-user.png" alt="user" width={20} height={20}></Image>
            <h4>{imagen.descripcion}</h4>
          </div>
          <div className={styles.add_modal_x} onClick={closeModal}>
            ❌
          </div>
        </div>

        <div className={styles.modal_img}>
          <Image src={imagen.url} alt={imagen.descripcion} width={100} height={100}></Image>
        </div>

        <div className={styles.add_modal_form}>
          <h5>Preguntas asociadas:</h5>
          <ul style={{ marginBottom: "1rem", paddingLeft: "1.2rem" }}>
            {imagen.preguntas.length > 0 ? (
              imagen.preguntas.map((id) => <li className={styles.modal_li} key={id}>
                <p>
                  {id}
                </p>
                  <Image onClick={()=>{
                      setShowConfirm(id)
                  }} src={"/admin/x.png"} width={30} height={30} alt="x"></Image>
                </li>)
            ) : (
              <li>No hay preguntas asociadas</li>
            )}
          </ul>

          <div className={styles.input_duo}>
            <label>Asociar nueva pregunta (por ID)</label>
            <input
              type="text"
              value={preguntaId}
              onChange={(e) => setPreguntaId(e.target.value)}
              placeholder="Ej. 664a3ef..."
            />
          </div>

          <div className={styles.form_buttons}>
            <button onClick={asociarPregunta}>Asociar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
