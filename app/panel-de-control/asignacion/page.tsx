'use client'

import { useState } from "react";
import Select from "react-select";
import { useEffect } from "react";
const pageOptions = [
  { value: 10, label: "10 por página" },
  { value: 20, label: "20 por página" },
  { value: 30, label: "30 por página" },
  { value: 50, label: "50 por página" },
];

const AsignacionPage = () => {

  const [busqueda, setBusqueda] = useState("");

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const [limit, setLimit] = useState(pageOptions[0]);


const [preguntas, setPreguntas] = useState<any[]>([]);
const [simuladores, setSimuladores] = useState<any[]>([]);

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [total, setTotal] = useState(0);

const [selectedSimulator, setSelectedSimulator] = useState<any>(null);

const [filtroExamen, setFiltroExamen] = useState<any>(null);
const [filtroAsignado, setFiltroAsignado] = useState<any>(null);
const [filtroSimulador, setFiltroSimulador] = useState<any>(null);


const fetchSimuladores = async () => {
  try {

    const res = await fetch("/api/simuladores?page=1&limit=9999");
    const data = await res.json();

    console.log(data,"---------")

    setSimuladores(
      data.simuladores.map((sim: any) => ({
        value: sim._id,
        label: sim.titulo,
      }))
    );

  } catch (error) {
    console.log(error);
  }
};

const fetchPreguntas = async () => {
  try {

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.value.toString(),
      titulo: busqueda,
    });

    if (filtroExamen)
      queryParams.append("examen", filtroExamen.value);

    if (filtroAsignado)
      queryParams.append("asignado", filtroAsignado.value);

    if (filtroSimulador)
      queryParams.append("simulador", filtroSimulador.value);

    const res = await fetch(
      `/api/preguntas?${queryParams.toString()}`
    );

    const data = await res.json();

    setPreguntas(data.preguntas);
    setTotal(data.total);
    setTotalPages(data.pages);

  } catch (error) {
    console.log(error);
  }
};

const handleAssign = async () => {

  if (!selectedSimulator) {
    alert("Selecciona un simulador");
    return;
  }

  if (selectedQuestions.length === 0) {
    alert("Selecciona al menos una pregunta");
    return;
  }

  try {

    const res = await fetch(
      "/api/preguntas/asignar-masivo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          simulatorId: selectedSimulator.value,
          questionIds: selectedQuestions,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    alert(data.mensaje);

    setSelectedQuestions([]);

    await fetchPreguntas();

  } catch (error: any) {

    alert(
      error.message || "Error al asignar preguntas"
    );

  }

};


useEffect(() => {
  fetchSimuladores();
}, []);

useEffect(() => {
  fetchPreguntas();
}, [
  page,
  busqueda,
  filtroExamen,
  filtroAsignado,
  filtroSimulador,
  limit
]);

  return (
    <>
     <>
  <div className="admin-question-container">

    <div className="admin-question-title">
      <h2>Asignación masiva</h2>
    </div>

    <div className="asignacion-layout">

      <div className="asignacion-content">

        <div className="asignacion-filters">

          <input
            type="text"
            placeholder="Buscar pregunta..."
            className="asignacion-search"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setPage(1);
            }}
          />

          <Select
            placeholder="Filtrar por examen"
            options={[]}
            value={filtroExamen}
            onChange={(op) => {
              setFiltroExamen(op);
              setPage(1);
            }}
            isClearable
          />

          <Select
            placeholder="Filtrar por asignada"
            options={[
              { value: "Asignada", label: "Asignada" },
              { value: "Pendiente", label: "Pendiente" }
            ]}
            value={filtroAsignado}
            onChange={(op) => {
              setFiltroAsignado(op);
              setPage(1);
            }}
            isClearable
          />

          <Select
            placeholder="Filtrar por simulador"
            options={simuladores}
            value={filtroSimulador}
            onChange={(op) => {
              setFiltroSimulador(op);
              setPage(1);
            }}
            isClearable
          />

          <button
            className="clear-filters-btn"
            onClick={() => {
              setBusqueda("");
              setFiltroAsignado(null);
              setFiltroExamen(null);
              setFiltroSimulador(null);
              setPage(1);
            }}
          >
            Limpiar filtros
          </button>

        </div>

        <div className="asignacion-toolbar">

          <div className="asignacion-info">
            <span>{total} encontradas</span>
            <span>{selectedQuestions.length} seleccionadas</span>
          </div>

          <div className="asignacion-actions">

            <button
              className="select-all-btn"
              onClick={() => {

                const ids = preguntas.map(
                  (pregunta) => pregunta._id
                );

                const allSelected =
                  ids.every(id =>
                    selectedQuestions.includes(id)
                  );

                if (allSelected) {
                  setSelectedQuestions([]);
                  return;
                }

                setSelectedQuestions(ids);

              }}
            >
              Seleccionar todas
            </button>

            <div className="page-size-select">

              <Select
                value={limit}
                options={pageOptions}
                onChange={(op: any) => {
                  setLimit(op);
                  setPage(1);
                }}
              />

            </div>

          </div>

        </div>
              <div className="asignacion-pagination">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {"<"}
          </button>

          <span>
            Página {page} de {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            {">"}
          </button>

        </div>

        <div className="asignacion-list">

          {preguntas.map((pregunta) => (

            <div
              key={pregunta._id}
              className="question-item"
            >

              <input
                type="checkbox"
                checked={selectedQuestions.includes(
                  pregunta._id
                )}
                onChange={() => {

                  setSelectedQuestions(prev =>
                    prev.includes(pregunta._id)
                      ? prev.filter(
                          id => id !== pregunta._id
                        )
                      : [...prev, pregunta._id]
                  );

                }}
              />

              <div className="question-item-content">

                <h4>
                  {pregunta.resumen}
                </h4>

                <div className="question-item-meta">

                  <span className="tag tag-blue">
                    {pregunta.origen}
                  </span>

                  <span className="tag tag-blue">
                    {pregunta.area}
                  </span>

                  {pregunta.simuladores.length > 0 ? (
                    <span className="tag tag-green">
                      Asignada
                    </span>
                  ) : (
                    <span className="tag tag-red">
                      Pendiente
                    </span>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

  

      </div>

      <div className="asignacion-sidebar">

        <h3>Asignación</h3>

        <div className="sidebar-block">

          <p className="sidebar-label">
            Preguntas seleccionadas
          </p>

          <h2>
            {selectedQuestions.length}
          </h2>

        </div>

        <div className="sidebar-block">

          <label>
            Asignar a simulador
          </label>

          <Select
            placeholder="Selecciona un simulador"
            options={simuladores}
            value={selectedSimulator}
            onChange={setSelectedSimulator}
          />

        </div>

        <div className="sidebar-block">

          <h4>
            Resumen
          </h4>

          <p>
            Preguntas a asignar:
            {" "}
            {selectedQuestions.length}
          </p>

        </div>

        <button
  className="assign-btn"
  onClick={handleAssign}
>
  Asignar preguntas
</button>

      </div>

    </div>

  </div>
</>
    </>
  );
};

export default AsignacionPage;