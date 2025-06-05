"use client";

import Image from "next/image";
import dataStyles from "@/app/ui/admin/DataTable.module.css";
import { useEffect, useState } from "react";
import { Imagen } from "@/types/imagen";
import { SelectOption } from "@/types/shared";
import Select, { SingleValue } from "react-select";
import {
  AsignadoOptions,
  examenOptions,
  ImagenOptions,
} from "@/consts/options";
import { toast } from "react-toastify";
import UploadModal from "@/app/ui/admin/UploadModal";
import ViewModal from "@/app/ui/admin/ImageViewModal";

const UsersPage = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [viewImagen, setViewImagen] = useState<Imagen | null>(null);

  const [imagenes, setImagenes] = useState<Imagen[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const [filtroExamen, setFiltroExamen] =
    useState<SingleValue<SelectOption>>(null);
  const [filtroTipo, setFiltroTipo] = useState<SingleValue<SelectOption>>(null);
  const [filtroAsignada, setFiltroAsignada] =
    useState<SingleValue<SelectOption>>(null);

  const fetchPreguntas = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        descripcion: busqueda,
      });

      if (filtroAsignada) queryParams.append("asignada", filtroAsignada.value);
      if (filtroExamen) queryParams.append("examen", filtroExamen.value);
      if (filtroTipo) queryParams.append("tipo", filtroTipo.value);

      const res = await fetch(`/api/imagenes?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error();

      setImagenes(data.imagenes);
      setTotalPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
      toast.error("Error al cargar imágenes");
    }
  };

  useEffect(() => {
    fetchPreguntas();
  }, [busqueda, page, filtroAsignada, filtroExamen, filtroTipo]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Solo cerrar si el clic no fue dentro de un menú ni en el icono de abrirlo
      if (
        !target.closest("[data-menu-content]") &&
        !target.closest("[data-menu-id]")
      ) {
        setMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {modal && <UploadModal closeModal={() => setModal(false)} />}

      {viewImagen && (
        <ViewModal
          imagen={viewImagen}
          closeModal={() => setViewImagen(null)}
        />
      )}

      <div className="admin-question-container">
        <div className="admin-question-title">
          <h2>Lista de Imágenes</h2>
        </div>

        <div className="admin-question-cards">
          {/* Tarjetas (puedes ajustar contadores reales si los tienes) */}
          <div className="admin-question-card">
            <div className="question-text">
              <p>Imágenes</p>
              <h4>{total}</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <Image
                  className="fill-blue"
                  src="/admin/blue-user.png"
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
          {/* Más tarjetas... */}
        </div>

        <div className={dataStyles["admin-table-container"]}>
          <div className={dataStyles["admin-table-header"]}>
            <div className={dataStyles["admin-table-right"]}>
              <div className={dataStyles["input-container"]}>
                <Image src="/admin/search.svg" alt="" width={25} height={25} />
                <input
                  placeholder="Buscar..."
                  type="text"
                  value={busqueda}
                  onChange={(e) => {
                    setBusqueda(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
            </div>

            <div className={dataStyles["admin-table-left"]}>
              <button
                onClick={() => setModal(true)}
                className={dataStyles["add-button"]}
              >
                <Image
                  src="/admin/add-icon.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Añadir
              </button>
            </div>
          </div>

          {/* Filtros */}
          <div
            style={{
              padding: "0px 16px",
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            <Select
              placeholder="Filtrar por examen"
              options={examenOptions}
              value={filtroExamen}
              onChange={(op) => {
                setFiltroExamen(op);
                setPage(1);
              }}
              isClearable
              styles={{ container: (base) => ({ ...base, minWidth: 180 }) }}
            />
            <Select
              placeholder="Tipo"
              options={ImagenOptions}
              value={filtroTipo}
              onChange={(op) => {
                setFiltroTipo(op);
                setPage(1);
              }}
              isClearable
              styles={{ container: (base) => ({ ...base, minWidth: 140 }) }}
            />
            <Select
              placeholder="Asignada"
              options={AsignadoOptions}
              value={filtroAsignada}
              onChange={(op) => {
                setFiltroAsignada(op);
                setPage(1);
              }}
              isClearable
              styles={{ container: (base) => ({ ...base, minWidth: 150 }) }}
            />
          </div>

          {/* Tabla */}
          <div className={dataStyles["admin-table"]}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Descripción</th>
                  <th>Url</th>
                  <th>Examen</th>
                  <th>Asignada</th>
                  <th className={dataStyles["th-center"]}>Preguntas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {imagenes.map((imagen, index) => (
                  <tr key={index}>
                    <td>{(page - 1) * limit + index + 1}</td>
                    <td>
                      <div className={`${dataStyles["td-image"]}`}>
                        <Image
                          src={imagen.url}
                          width={30}
                          height={30}
                          alt={imagen.descripcion}
                        />
                        <p>{imagen.descripcion}</p>
                      </div>
                    </td>
                    <td>{imagen.url}</td>
                    <td>{imagen.examen}</td>
                    <td
                      className={`${dataStyles["color-td"]} ${
                        imagen.preguntas.length > 0
                          ? dataStyles.green
                          : dataStyles.red
                      }`}
                    >
                      <span>
                        {imagen.preguntas.length > 0
                          ? "Asignada"
                          : "Pendiente"}
                      </span>
                    </td>
                    <td className={dataStyles["td-center"]}>
                      {imagen.preguntas.length}
                    </td>
                    <td className={dataStyles["td-center"]}>
                      <div
                        className={dataStyles["container"]}
                        data-menu-id={imagen._id}
                      >
                        <Image
                          onClick={(e) => {
                            e.stopPropagation();
                            setMenu(menu === imagen._id ? null : imagen._id);
                          }}
                          src="/admin/3points.png"
                          alt=""
                          width={20}
                          height={20}
                        />

                        <div
                          className={`${dataStyles["menu"]} ${
                            menu === imagen._id ? "" : dataStyles["none"]
                          }`}
                          data-menu-content
                        >
                          <button onClick={() => setViewImagen(imagen)}>
                            Ver
                          </button>
                          <button>Editar</button>
                          <button>Eliminar</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <div className={dataStyles["admin-table-footer"]}>
            <div className={dataStyles["admin-footer-left"]}>
              <p>Imágenes por página: {limit}</p>
            </div>
            <div className={dataStyles["admin-footer-right"]}>
              <p>
                {(page - 1) * limit + 1} - {Math.min(page * limit, total)} de{" "}
                {total}
              </p>
              <div
                className={`${dataStyles["footer-button"]} ${dataStyles["rotate"]}`}
                onClick={() => page > 1 && setPage(page - 1)}
              >
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>
              <div
                className={dataStyles["footer-button"]}
                onClick={() => page < totalPages && setPage(page + 1)}
              >
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
