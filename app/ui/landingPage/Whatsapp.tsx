"use client";

import Image from "next/image";
import styles from "./whatsapp.module.css";

type TransferModalProps = {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
};

const TransferModal = ({
  isOpen,
  onClose,
  packageName,
}: TransferModalProps) => {
  if (!isOpen) return null;

  const message = `Hola, quiero comprar monedas en Simulandum por transferencia bancaria.

Paquete: ${packageName}`;

  const whatsappLink = `https://wa.me/527444245902?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["transfer-modal"]}>
        <button className={styles["modal-close"]} onClick={onClose}>
          ×
        </button>

        <div className={styles["modal-content"]}>
          <div className={styles["modal-texts"]}>
            <h3>Comprar por transferencia</h3>

            <p className={styles["modal-description"]}>
              Solicita nuestros datos bancarios por WhatsApp y realiza tu pago
              por transferencia bancaria (SPEI).
            </p>

            <div className={styles["selected-package"]}>
              <strong>Paquete seleccionado:</strong>
              <span>{packageName}</span>
            </div>

            <div className={styles["steps"]}>
              <p>✅ Haz clic en el botón de WhatsApp</p>
              <p>✅ Te enviaremos nuestros datos bancarios</p>
              <p>✅ Realiza tu transferencia</p>
              <p>✅ Envíanos tu comprobante por WhatsApp</p>
              <p>✅ Acreditamos tus monedas en tu cuenta</p>
            </div>

            <div className={styles["modal-bottom"]}>
              <div>
                <h4>Atención personalizada y segura</h4>
                <p>
                  Respondemos en minutos dentro de nuestro horario de atención.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["whatsapp-button"]}
              >
                <Image
                  src="/landing/whatsapp.png"
                  alt=""
                  width={24}
                  height={24}
                />
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;