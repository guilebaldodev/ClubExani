"use client";
import styles from "./css/ConfirmModal.module.css";

type ConfirmDeleteModalProps = {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDeleteModal({
  title = "¿Estás seguro?",
  message = "Esta acción no se puede deshacer.",
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>⚠️</div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onConfirm} className={styles.confirm}>
            Sí, eliminar
          </button>
          <button onClick={onCancel} className={styles.cancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
