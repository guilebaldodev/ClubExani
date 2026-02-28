"use client";
import { toast } from "react-toastify";
import styles from "./css/confirmModal.module.css";
import { Simulador } from "@/types";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import { useState } from "react";
import { Paquete } from "@/types/paquete";

type Props = {
  packageItem: Paquete;
  closeModal: () => void;
};

const ConfirmPackageModal = ({ packageItem, closeModal }: Props) => {

  const router= useRouter()
  const addSimuladorCanjeadoSumar = useUserStore((state) => state.addSimuladorCanjeadoSumar);
  const updateMonedas = useUserStore((state) => state.updateMonedas);
  const [loading, setloading] = useState(false);



  const handlePurchase = async (
    simulatorId: string,
  ) => {
    try {

      setloading(true)

      const res = await fetch(`/api/paquetes/canjear/${simulatorId}`, {
        method: "POST",
      });

      const data = await res.json();

      setloading(false)


      if (res.ok) {
        toast.success("Paquete canjeado 🎉");
        closeModal();

        updateMonedas(data.nuevoSaldo)

        console.log(data.paquete.simuladores,"----data")


        data.paquete.simuladores.forEach((simulator: Simulador) => {

          console.log("------")
          addSimuladorCanjeadoSumar({
             simuladorId: simulator,
             monedasPagadas:simulator.precio,
             uso_justo:simulator.uso_justo,
             fecha:new Date().toISOString(),
           })


        });
        
        router.push("/plataforma/mis-simuladores")

      } else {
        toast.error(data.error || "Error al canjear");
      }
    } catch (err) {
      console.log(err,"-------")
      toast.error("Error de conexión");
      setloading(false)

    }
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.add_modal}>
        <div className="div_coins">
          <img src="/course/yellow-coins.png" alt="monedas" />
        </div>

        <div className="confirm_modal_info">
          <h3>Comprar por {packageItem.precio} monedas</h3>
          <p>¿Comprar el simulador {packageItem.titulo}?</p>
        </div>

        <div className="buttons">
          <button className="red" onClick={closeModal}>
            Cancelar
          </button>
          <button disabled={loading} onClick={()=>{
            handlePurchase(packageItem._id)
          }}>
   {loading ? (
                    <div className="loading-div">
                    <div className="lds-dual-ring"></div>
                    <p>Comprando</p>
                    </div>
                ) : (
                    <label>
                      Comprar
                  </label>
                )}
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPackageModal;
