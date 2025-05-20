'use client'

import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

const examenOptions = [
  { value: "EXANI III", label: "EXANI III" },
  { value: "EXADIEMS", label: "EXADIEMS" },
  { value: "EXADIES", label: "EXADIES" },
];

const tipoOptions = [
  { value: "Completo", label: "Completo" },
  { value: "Diagnóstico", label: "Diagnóstico" },
  { value: "Parcial", label: "Parcial" },
];

const dificultadOptions = [
  { value: "Fácil", label: "Fácil" },
  { value: "Intermedio", label: "Intermedio" },
  { value: "Avanzado", label: "Avanzado" },
  { value: "Experto", label: "Experto" },
  { value: "Mixto", label: "Mixto" },
];

const Simuladores = () => {
  const [simuladores, setSimuladores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState(false);
  const limit = 10;

  const [filtroExamen, setFiltroExamen] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState(null);
  const [filtroDificultad, setFiltroDificultad] = useState(null);

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
    } catch (error: any) {
      toast.error("Error al cargar simuladores");
    }
  };

  useEffect(() => {
    fetchSimuladores();
  }, [busqueda, page, filtroExamen, filtroTipo, filtroDificultad]);

  return (
    <div className="admin-question-container">
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
            <button className={dataStyles['bordered']}>
              <Image src="/admin/filters.png" alt="" width={20} height={20} />
              Filtros
            </button>
            <button>
              <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
              Añadir
            </button>
          </div>

              

        </div>

                    <div style={{ padding:"0px 16px 0px 16px",display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
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
                    <div className={dataStyles['container']}>
                      <Image
                        onClick={() => setMenu(!menu)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className={`${dataStyles['menu']} ${menu ? "" : dataStyles['hidden']}`}></div>
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
