"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import style from "./contactForm.module.css";

type FormData = {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  mensaje: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios.";

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresa solo números.";
    }

    if (!formData.mensaje.trim()) newErrors.mensaje = "Este campo es obligatorio.";

    if (!formData.privacy) newErrors.privacy = "Debes aceptar la política de privacidad.";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Formulario enviado con éxito");
      setFormData({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        mensaje: "",
        privacy: false,
      });
    } else {
      alert("Hubo un error al enviar el formulario");
    }

    setLoading(false);
  };

  return (
    <form className={style["contact-form"]} onSubmit={handleSubmit}>
      <div className={style["double-input"]}>
        <div className={style["input-duo"]}>
          <label htmlFor="nombre">Nombre*</label>
          <input type="text" id="nombre" value={formData.nombre} onChange={handleInputChange} />
          {errors.nombre && <p className={style["error-text"]}>{errors.nombre}</p>}
        </div>
        <div className={style["input-duo"]}>
          <label htmlFor="apellidos">Apellidos*</label>
          <input type="text" id="apellidos" value={formData.apellidos} onChange={handleInputChange} />
          {errors.apellidos && <p className={style["error-text"]}>{errors.apellidos}</p>}
        </div>
      </div>

      <div className={style["double-input"]}>
        <div className={style["input-duo"]}>
          <label htmlFor="email">Correo electrónico*</label>
          <input type="text" id="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <p className={style["error-text"]}>{errors.email}</p>}
        </div>
        <div className={style["input-duo"]}>
          <label htmlFor="telefono">Teléfono*</label>
          <input type="text" id="telefono" value={formData.telefono} onChange={handleInputChange} />
          {errors.telefono && <p className={style["error-text"]}>{errors.telefono}</p>}
        </div>
      </div>

      <div className={`${style["input-duo"]} ${style["full-input"]}`}>
        <label htmlFor="mensaje">¿Cómo podemos ayudarte?*</label>
        <textarea id="mensaje" value={formData.mensaje} onChange={handleInputChange}></textarea>
        {errors.mensaje && <p className={style["error-text"]}>{errors.mensaje}</p>}
      </div>

      <div className={style["input-check"]}>
        <input type="checkbox" id="privacy" checked={formData.privacy} onChange={handleInputChange} />
        <label htmlFor="privacy">
          Al hacer click confirmas que has leído y aceptas nuestras Políticas de Privacidad.
        </label>
        {errors.privacy && <p className={style["error-text"]}>{errors.privacy}</p>}
      </div>

      <div className={style["contact-button"]}>
        <button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
      </div>
    </form>
  );
};

export default ContactForm;
