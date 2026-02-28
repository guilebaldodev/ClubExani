"use client";

import Image from "next/image";
import dataStyles from "@/app/ui/admin/DataTable.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "@/types/simulador";
import { examenOptions } from "@/consts/options";
import Link from "next/link";
import ConfirmDeleteModal from "@/app/ui/admin/ConfirmModal";
import { Paquete } from "@/types/paquete";
import PackageViewModal from "@/app/ui/admin/PackageViewModal";

const PaquetesPage = () => {

  const [viewPackage, setViewPackage] = useState<Paquete | null>(null);


  const [showConfirm, setShowConfirm] = useState("");
  const [paquetes, setPaquetes] = useState<Paquete[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState<string | null>(null);

  const limit = 10;

  const [filtroExamen, setFiltroExamen] =
    useState<SingleValue<SelectOption>>(null);

  const fetchPaquetes = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        titulo: busqueda,
      });

      if (filtroExamen) queryParams.append("examen", filtroExamen.value);

      const res = await fetch(`/api/paquetes?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al cargar");

      setPaquetes(data.paquetes);
      setTotalPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      toast.error("Error al cargar paquetes");
    }
  };

  const deletePaquete = async () => {
    try {
      const res = await fetch(`/api/paquetes/${showConfirm}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Error al eliminar paquete");
        return false;
      }

      toast.success("Paquete eliminado correctamente");
      return true;
    } catch (error) {
      toast.error("Error del servidor");
      return false;
    }
  };

  useEffect(() => {
    fetchPaquetes();
  }, [busqueda, page, filtroExamen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

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
    <div className="admin-question-container">

      {viewPackage && (
        <PackageViewModal
          PackageItem={viewPackage}
          closeModal={() => setViewPackage(null)}
        />
      )}



      {showConfirm && (
        <ConfirmDeleteModal
          title="¿Eliminar paquete?"
          message="Esta acción no se puede deshacer!!!."
          onConfirm={async () => {
            const success = await deletePaquete();
            if (success) {
              fetchPaquetes();
            }
            setShowConfirm("");
          }}
          onCancel={() => setShowConfirm("")}
        />
      )}

      <div className="admin-question-title">
        <h2>Lista de paquetes</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Paquetes</p>
            <h4>{total}</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                src="/admin/blue-writing.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
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
            <Link href={"/panel-de-control/crear-paquete"}>
              <button>
                <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
                Añadir
              </button>
            </Link>
          </div>
        </div>

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
        </div>

        <div className={dataStyles["admin-table"]}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Examen</th>
                <th className={dataStyles["th-center"]}>Costo</th>
                <th className={dataStyles["th-center"]}>Preguntas</th>
                <th className={dataStyles["th-center"]}>Simuladores</th>
                <th className={dataStyles["th-center"]}>Activo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paquetes.map((p, index) => (
                <tr key={p._id}>
                  <td>{(page - 1) * limit + index + 1}</td>
                  <td>{p.titulo}</td>
                  <td>{p.examen}</td>
                  <td className={dataStyles["td-center"]}>{p.precio}</td>
                  <td className={dataStyles["td-center"]}>{p.totalPreguntas}</td>
                  <td className={dataStyles["td-center"]}>
                    {Array.isArray(p.simuladores) ? p.simuladores.length : 0}
                  </td>
                  <td className={dataStyles["td-center"]}>
                    {p.activo ? "Sí" : "No"}
                  </td>
                  <td className={dataStyles["td-center"]}>
                    <div className={dataStyles["container"]} data-menu-id={p._id}>
                      <Image
                        onClick={() => setMenu(menu === p._id ? null : p._id)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div
                        className={`${dataStyles["menu"]} ${
                          menu === p._id ? "" : dataStyles["none"]
                        }`}
                        data-menu-content
                      >
                        <Link href={`/panel-de-control/paquetes/${p._id}`}>
                          <button>Ver</button>
                        </Link>

                          <button
                            onClick={() => {
                              // console.log(pregunta, "Preguntaa");
                              // setViewQuestion(pregunta);
                              setViewPackage(p)


                            }}
                          >
                            Asignar
                          </button>

                        <button onClick={() => setShowConfirm(p._id)}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              {paquetes.length === 0 && (
                <tr>
                  <td colSpan={8} className={dataStyles["td-center"]}>
                    No hay paquetes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={dataStyles["admin-table-footer"]}>
          <div className={dataStyles["admin-footer-left"]}>
            <p>Registros por página: {limit}</p>
          </div>
          <div className={dataStyles["admin-footer-right"]}>
            <p>
              {(page - 1) * limit + 1} - {Math.min(page * limit, total)} de {total}
            </p>
            <div
              className={`${dataStyles["footer-button"]} ${dataStyles.rotate}`}
              onClick={() => page > 1 && setPage(page - 1)}
            >
              <Image src="/admin/arrow.png" alt="Anterior" width={15} height={15} />
            </div>
            <div
              className={dataStyles["footer-button"]}
              onClick={() => page < totalPages && setPage(page + 1)}
            >
              <Image src="/admin/arrow.png" alt="Siguiente" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaquetesPage;