"use client";
import Image from "next/image";
import styles from "./css/Modal.module.css";
import { Usuarios } from "@/types/usuarios";

type Props = {
  user: Usuarios;
  closeModal: () => void;
};

const ViewUserModal = ({ user, closeModal }: Props) => {

    

  return (
    <div className={styles.modal_container}>
      <div className={styles.add_modal}>
        <div className={styles.add_modal_title}>
          <div>
            <Image
              src="/admin/blue-user.png"
              alt="user"
              width={20}
              height={20}
            ></Image>
            <h4>{user._id}</h4>
          </div>
          <div className={styles.add_modal_x} onClick={closeModal}>
            ❌
          </div>
        </div>

        <div className="modal-info">
          <div className="modal-circle-container">
            <div className="modal-circle">
              <h3>{user.nombre?.charAt(0) || "U"}</h3>
            </div>
          </div>

          <div className="modal-info-items">
            <div className="modal-info-item">
              <h4>Nombre: </h4>
              <p>{user.nombre || "No definido"}</p>
            </div>
            <div className="modal-info-item">
              <h4>Rol: </h4>
              <p>{user.rol || "No definido"}</p>
            </div>
            <div className="modal-info-item">
              <h4>Monedas: </h4>
              <p>{user.monedas || "No definido"}</p>
            </div>
            <div className="modal-info-item">
              <h4>Estado: </h4>
              <p>{user.estado || "No definido"}</p>
            </div>
            <div className="modal-info-item">
              <h4>Edad: </h4>
              <p>{user.edad || "No definido"}</p>
            </div>

            <div className="modal-info-item">
              <h4>Simuladores canjeados: </h4>
              <p>{user.simuladoresCanjeados.length}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserModal;
