'use client'

import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select, { SingleValue } from "react-select";
import { SelectOption, Simulador } from "@/types/simulador";
import { dificultadOptions, examenOptions, tipoOptions } from "@/consts/options";
import Link from "next/link";
import ConfirmDeleteModal from "@/app/ui/admin/ConfirmModal";


const Simuladores = () => {

  const [showConfirm, setShowConfirm] = useState("");


  const [simuladores, setSimuladores] = useState<Simulador[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState<string| null>(null);
  const limit = 10;

  const [filtroExamen, setFiltroExamen] = useState<SingleValue<SelectOption>>(null);
  const [filtroTipo, setFiltroTipo] = useState<SingleValue<SelectOption>>(null);
  const [filtroDificultad, setFiltroDificultad] = useState<SingleValue<SelectOption>>(null);

  const fetchSimuladores = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        titulo: busqueda,
      });

      if (filtroExamen) queryParams.append("examen", filtroExamen.value);
      if (filtroTipo) queryParams.append("tipo", filtroTipo.value);
      if (filtroDificultad) queryParams.append("dificultad", filtroDificultad.value);

      const res = await fetch(`/api/simuladores?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al cargar");

      setSimuladores(data.simuladores);
      setTotalPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      toast.error("Error al cargar simuladores");
    }
  };

  const deleteSimulator = async () => {
    try {
      const res = await fetch(`/api/simuladores/${showConfirm}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Error al eliminar simulador");
        return false;
      }

      toast.success("Simulador eliminada correctamente");
      return true;
    } catch (error) {
      toast.error("Error del servidor");
      return false;
    }
  };



  useEffect(() => {
    fetchSimuladores();
  }, [busqueda, page, filtroExamen, filtroTipo, filtroDificultad]);

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

   {showConfirm && (
        <ConfirmDeleteModal
          title="¿Eliminar simulador?"
          message="Esta acción no se puede deshacer!!!."
          onConfirm={async () => {
            const success = await deleteSimulator();
            if (success) {
              fetchSimuladores(); 
            }
            setShowConfirm("");
          }}
          onCancel={() => setShowConfirm("")}
        />
      )}



      <div className="admin-question-title">
        <h2>Lista de simuladores</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Simuladores</p>
            <h4>{total}</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-writing.svg" alt="" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>

      <div className={dataStyles['admin-table-container']}>
        <div className={dataStyles['admin-table-header']}>
          <div className={dataStyles['admin-table-right']}>
            <div className={dataStyles['input-container']}>
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

          <div className={dataStyles['admin-table-left']}>
            {/* <button className={dataStyles['bordered']}>
              <Image src="/admin/filters.png" alt="" width={20} height={20} />
              Filtros
            </button> */}
            <Link href={"/panel-de-control/crear-simulador"}>
            <button>
              <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
              Añadir
            </button>
            </Link>
          </div>
        </div>

        <div style={{ padding: "0px 16px", display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
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
            options={tipoOptions}
            value={filtroTipo}
            onChange={(op) => {
              setFiltroTipo(op);
              setPage(1);
            }}
            isClearable
            styles={{ container: (base) => ({ ...base, minWidth: 140 }) }}
          />
          <Select
            placeholder="Dificultad"
            options={dificultadOptions}
            value={filtroDificultad}
            onChange={(op) => {
              setFiltroDificultad(op);
              setPage(1);
            }}
            isClearable
            styles={{ container: (base) => ({ ...base, minWidth: 150 }) }}
          />
        </div>

        <div className={dataStyles['admin-table']}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Examen</th>
                <th>Tipo</th>
                <th className={dataStyles['th-center']}>Costo</th>
                <th className={dataStyles['th-center']}>Preguntas</th>
                <th className={dataStyles['th-center']}>Contador</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {simuladores.map((s, index) => (
                <tr key={s._id}>
                  <td>{(page - 1) * limit + index + 1}</td>
                  <td>{s.titulo}</td>
                  <td>{s.examen}</td>
                  <td>{s.tipo}</td>
                  <td className={dataStyles['td-center']}>{s.precio}</td>
                  <td className={dataStyles['td-center']}>{s.totalPreguntas}</td>
                  <td className={dataStyles['td-center']}>{s.contador}</td>
                  <td className={dataStyles['td-center']}>
                    <div className={dataStyles['container']}
                    data-menu-id={s._id}
                    >
                      <Image
                        onClick={() => setMenu(menu === s._id ? null : s._id)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className={`${dataStyles['menu']} ${menu === s._id ? "" : dataStyles['none']}`}
                      data-menu-content
                      >
                          <button>Ver</button>
                          <button onClick={()=>setShowConfirm(s._id)}>Eliminar</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={dataStyles['admin-table-footer']}>
          <div className={dataStyles['admin-footer-left']}>
            <p>Preguntas por página: {limit}</p>
          </div>
          <div className={dataStyles['admin-footer-right']}>
            <p>{(page - 1) * limit + 1} - {Math.min(page * limit, total)} de {total}</p>
            <div className={`${dataStyles['footer-button']} ${dataStyles.rotate}`} onClick={() => page > 1 && setPage(page - 1)}>
              <Image src="/admin/arrow.png" alt="Anterior" width={15} height={15} />
            </div>
            <div className={dataStyles['footer-button']} onClick={() => page < totalPages && setPage(page + 1)}>
              <Image src="/admin/arrow.png" alt="Siguiente" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simuladores;
