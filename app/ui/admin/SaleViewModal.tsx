"use client";
import Image from "next/image";
import styles from "./css/Modal.module.css";
import { Venta } from "@/types/venta";
import { formatCurrency, formatDate, getPlanInfo } from "@/app/utils";

type Props = {
  sale: Venta;
  closeModal: () => void;
};

const ViewSaleModal = ({ sale, closeModal }: Props) => {

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
            <h4>{sale._id}</h4>
          </div>
          <div className={styles.add_modal_x} onClick={closeModal}>
            ❌
          </div>
        </div>

 <div className={styles.modal_info}>
  <div className={styles.modal_circle_container}>
    <div className={styles.modal_circle}>
      <h3>{sale.email?.charAt(0) || "U"}</h3>
    </div>
  </div>

  <div className={styles.modal_info_items}>
    <div className={styles.modal_info_item}>
      <h4>Email: </h4>
      <p>{sale.email || "No definido"}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>UserId</h4>
      <p>{sale.userId}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>Monto: </h4>
      <p>{formatCurrency(sale.amountPaid)}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>Estado: </h4>
      <p>{sale.paymentStatus}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>Método: </h4>
      <p>{sale.paymentMethod}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>Stripe Session: </h4>
      <p>{sale.stripeSessionId}</p>
    </div>
    <div className={styles.modal_info_item}>
      <h4>Fecha: </h4>
      <p>{formatDate(sale.stripeCreatedAt)}</p>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};

export default ViewSaleModal;
