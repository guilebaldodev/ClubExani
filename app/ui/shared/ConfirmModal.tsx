"use client";
import { toast } from "react-toastify";
import styles from "./css/confirmModal.module.css";
import { Simulador } from "@/types";

type Props = {
  simulator: Simulador;
  closeModal: () => void;
};

const ConfirmModal = ({ simulator, closeModal }: Props) => {



  const handlePurchase = async (
    simulatorId: string,
  ) => {
    try {
      const res = await fetch(`/api/simuladores/canjear/${simulatorId}`, {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Simulador canjeado 🎉");
        closeModal();
        // Aquí podrías refrescar datos o monedas si lo necesitas
      } else {
        toast.error(data.error || "Error al canjear");
      }
    } catch (err) {
      toast.error("Error de conexión");
    }
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.add_modal}>
        <div className="div_coins">
          <img src="/course/yellow-coins.png" alt="monedas" />
        </div>

        <div className="confirm_modal_info">
          <h3>Comprar por {simulator.precio} monedas</h3>
          <p>¿Comprar el simulador {simulator.titulo}?</p>
        </div>

        <div className="buttons">
          <button className="red" onClick={closeModal}>
            Cancelar
          </button>
          <button onClick={()=>{
            handlePurchase(simulator._id)
          }}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
