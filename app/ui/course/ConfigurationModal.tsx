"use client";
import { useState } from "react";
import { X } from "lucide-react"; // ícono elegante de cierre
import { useSimulatorStore } from "@/stores/simulatorStore";

interface ConfigurationModalProps {
  setIsConfiguration: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfigurationModal = ({ setIsConfiguration }: ConfigurationModalProps) => {


  const {
    sound,
    explanation,
    toggleSound,
    toggleExplanation
  } = useSimulatorStore();


  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("configuration-modal-container")) {
      setIsConfiguration(false);
    }
  };

  return (
    <div className="configuration-modal-container" onClick={handleOutsideClick}>
      <div className="configuration-modal">
        <div className="configuration-header">
          <h3>Configuración de tu examen</h3>
          <button
            className="close-button"
            onClick={() => setIsConfiguration(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="configurations-items">
          <div className="configuration-item">
            <div className="config-text">
              <h4>Sonido de aciertos y errores</h4>
              <p>Reproduce efectos de sonido al responder correctamente o fallar.</p>
            </div>

            <div>

            <label className="switch">
              <input
                type="checkbox"
                checked={sound}
                onChange={() => toggleSound()}
                />
              <span className="slider"></span>
            </label>
                </div>
          </div>

          <div className="configuration-item">
            <div className="config-text">
              <h4>Explicaciones al finalizar</h4>
              <p>Muestra las razones de cada pregunta.</p>
            </div>
            <div>

            <label className="switch">
              <input
                type="checkbox"
                checked={explanation}
                onChange={() => toggleExplanation()}
                />
              <span className="slider"></span>
            </label>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationModal;
