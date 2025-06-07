"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import styles from "./css/Modal.module.css";
import { Pregunta } from "@/types/pregunta";
import { SelectOption } from "@/types/shared";
import { Simulador } from "@/types";
import Select from "react-select";

type Props = {
  question: Pregunta;
  closeModal: () => void;
};

const ViewQuestionModal = ({ question, closeModal }: Props) => {
  const [simulatorId, setSimulatorId] = useState("");

  const [simulators, setSimulators] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchSimulators = async () => {
      try {
        const res = await fetch("/api/simuladores?page=1&limit=9999");
        const data = await res.json();
        const options = data.simuladores.map((sim: Simulador) => ({
          value: sim._id,
          label: sim.titulo,
        }));
        setSimulators(options);
      } catch (err) {
        console.error("Error al cargar simuladores", err);
      }
    };

    fetchSimulators();
  }, []);

  const associateSimulator = async () => {
    try {
      if (!simulatorId) return alert("Ingresa un id");

      const res = await fetch(`/api/preguntas/${question._id}/asociar`, {
        method: "POST",
        body: JSON.stringify({ simulatorId }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) throw new Error();

      toast.success("Pregunta asociada");
      setSimulatorId("");
    } catch (err) {
      toast.error("Error al asociar pregunta");
    }
  };

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
            <h4>{question._id}</h4>
          </div>
          <div className={styles.add_modal_x} onClick={closeModal}>
            ❌
          </div>
        </div>

        <div className={styles.modal_img}>
          {/* <Image src={imagen.url} alt={imagen.descripcion} width={100} height={100}></Image> */}
        </div>

        <div className={styles.add_modal_form}>
          <h5>Examenes asociados:</h5>
          <ul style={{ marginBottom: "1rem", paddingLeft: "1.2rem" }}>
            {question.simuladores.length > 0 ? (
              question.simuladores.map((id) => {
                const simulador = simulators.find((s) => s.value === id);
                return <li key={id}>{simulador?.label || id}</li>;
              })
            ) : (
              <li>No hay exámenes asociados</li>
            )}
          </ul>

          <div className={styles.input_duo}>
            <label>Asociar nuevo examen (por ID)</label>
            <Select
              placeholder="Selecciona un simulador"
              options={simulators}
              value={simulators.find((s) => s.value === simulatorId) || null}
              onChange={(op) => setSimulatorId(op?.value || "")}
              isClearable
            />
          </div>

          <div className={styles.form_buttons}>
            <button onClick={associateSimulator}>Asociar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuestionModal;
