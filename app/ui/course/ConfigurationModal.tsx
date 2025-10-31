"use client";
import { X } from "lucide-react";
import { useSimulatorStore } from "@/stores/simulatorStore";
import style from "./Configuration.module.css";

interface ConfigurationModalProps {
  setIsConfiguration: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfigurationModal = ({ setIsConfiguration }: ConfigurationModalProps) => {
  const { sound, explanation, toggleSound, toggleExplanation } = useSimulatorStore();

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains(style["configuration-modal-container"])) {
      setIsConfiguration(false);
    }
  };

  return (
    <div className={style["configuration-modal-container"]} onClick={handleOutsideClick}>
      <div className={style["configuration-modal"]}>
        <div className={style["configuration-header"]}>
          <h3>Configuración de tu examen</h3>
          <button
            className={style["close-button"]}
            onClick={() => setIsConfiguration(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className={style["configurations-items"]}>
          <div className={style["configuration-item"]}>
            <div className={style["config-text"]}>
              <h4>Explicaciones al finalizar</h4>
              <p>
                Muestra una explicación al final para entender por qué tus respuestas fueron
                correctas o incorrectas.
              </p>
            </div>

            <div>
              <label className={style["switch"]}>
                <input
                  type="checkbox"
                  checked={explanation}
                  onChange={() => toggleExplanation()}
                />
                <span className={style["slider"]}></span>
              </label>
            </div>
          </div>

          <div className={style["configuration-item"]}>
            <div className={style["config-text"]}>
              <h4>Sonido de aciertos y errores</h4>
              <p>
                Reproduce efectos de sonido al responder, solo cuando las explicaciones están
                activadas.
              </p>
            </div>

            <div>
              <label className={style["switch"]}>
                <input
                  type="checkbox"
                  checked={sound}
                  onChange={() => toggleSound()}
                />
                <span className={style["slider"]}></span>
              </label>
            </div>
          </div>
        </div>

        <div className={style["configuration-button"]}>
          <button onClick={() => setIsConfiguration(false)}>Hecho</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationModal;
