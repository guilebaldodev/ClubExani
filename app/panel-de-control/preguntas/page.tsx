"use client";

import Image from "next/image";
import styles from "./questions.module.css";
import dataStyles from "@/app/ui/admin/DataTable.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pregunta } from "@/types/pregunta";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "@/types/shared";
import { toast } from "react-toastify";
import {
  AsignadoOptions,
  examenOptions,
  OrigenOptions,
} from "@/consts/options";
import ViewQuestionModal from "@/app/ui/admin/QuestionViewModal";

const QuestionsPage = () => {

  const [viewQuestion, setViewQuestion] = useState<Pregunta | null>(null);


  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState<string | null>(null);
  const limit = 10;

  const [filtroAsignado, setFiltroAsignado] =
    useState<SingleValue<SelectOption>>(null);
  const [filtroOrigen, setFiltroOrigen] =
    useState<SingleValue<SelectOption>>(null);
  const [filtroSimulador, setSimulador] =
    useState<SingleValue<SelectOption>>(null);
  const [filtroExamen, setFiltroExamen] =
    useState<SingleValue<SelectOption>>(null);

  const fetchPreguntas = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        titulo: busqueda,
      });

      if (filtroAsignado) queryParams.append("asignado", filtroAsignado.value);
      if (filtroSimulador)
        queryParams.append("simulador", filtroSimulador.value);
      if (filtroOrigen) queryParams.append("origen", filtroOrigen.value);
      if (filtroExamen) queryParams.append("examen", filtroExamen.value);

      const res = await fetch(`/api/preguntas?${queryParams.toString()}`);
      const data = await res.json();

      console.log(data)


      if (!res.ok) throw new Error();

      setPreguntas(data.preguntas);
      setTotalPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      toast.error("Error al cargar las preguntas");
    }
  };

  useEffect(()=>{
    fetchPreguntas()
  },[busqueda,page,filtroAsignado,filtroExamen,filtroOrigen,filtroSimulador])




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
    <>

      {viewQuestion && (
          <ViewQuestionModal question={viewQuestion} closeModal={()=>setViewQuestion(null)}/>
      )}


      <div className={styles["admin-question-container"]}>
        <div className={styles["admin-question-title"]}>
          <h2>Lista de preguntas</h2>
        </div>

        <div className={styles["admin-question-cards"]}>
          <div className={styles["admin-question-card"]}>
            <div className={styles["question-text"]}>
              <p>Total de preguntas</p>
              <h4>0</h4>
            </div>
            <div className={styles["admin-question-img"]}>
              <div className={styles["question-img"]}>
                <Image
                  src="/admin/blue-question.png"
                  alt="Total preguntas"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          <div className={styles["admin-question-card"]}>
            <div className={styles["question-text"]}>
              <p>Preguntas este mes</p>
              <h4>0</h4>
            </div>
            <div className={styles["admin-question-img"]}>
              <div className={styles["question-img"]}>
                <Image
                  src="/admin/blue-calendar.png"
                  alt="Preguntas este mes"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          <div className={styles["admin-question-card"]}>
            <div className={styles["question-text"]}>
              <p>Preguntas asignadas</p>
              <h4>0</h4>
            </div>
            <div className={styles["admin-question-img"]}>
              <div className={styles["question-img"]}>
                <Image
                  src="/admin/blue-pointer.png"
                  alt="Preguntas asignadas"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          <div className={styles["admin-question-card"]}>
            <div className={styles["question-text"]}>
              <p>Categorías</p>
              <h4>0</h4>
            </div>
            <div className={styles["admin-question-img"]}>
              <div className={styles["question-img"]}>
                <Image
                  src="/admin/blue-category.png"
                  alt="Categorías"
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
                <Image
                  src="/admin/search.svg"
                  alt="Buscar"
                  width={25}
                  height={25}
                />
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
              {/* <button className={dataStyles.bordered}>
              <Image src="/admin/filters.png" alt="Filtros" width={20} height={20} />
              Filtros
            </button> */}
              <Link href={"/panel-de-control/crear-pregunta"}>
                <button>
                  <Image
                    src="/admin/add-icon.png"
                    alt="Añadir"
                    width={20}
                    height={20}
                  />
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
            />

            <Select
              placeholder="Filtrar por asignada"
              options={AsignadoOptions}
              value={filtroAsignado}
              onChange={(op) => {
                setFiltroAsignado(op);
                setPage(1);
              }}
              isClearable
            ></Select>

            <Select
              placeholder="Filtrar por origen"
              options={OrigenOptions}
              value={filtroOrigen}
              onChange={(op) => {
                setFiltroOrigen(op);
                setPage(1);
              }}
              isClearable
            ></Select>
            {/* 
                <Select 
                placeholder="Filtrar por simulador"
                options={}
                value={filtroAsignado}
                          onChange={(op) =>{
                  setFiltroOrigen(op)
                  setPage(1)
                }}
                isClearable
                ></Select> */}
          </div>

          <div className={dataStyles["admin-table"]}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Pregunta</th>
                  <th>Origen</th>
                  <th>Examen</th>
                  <th>Asignado</th>
                  <th className={dataStyles["th-center"]}></th>
                </tr>
              </thead>
              <tbody>
   
                {preguntas.map((pregunta, index) => (
                    <tr key={pregunta._id}>
                      <td>{(page - 1) * limit + index + 1}</td>
                      <td>Contenido</td>
                      <td>{pregunta.origen}</td>
                      <td>{pregunta.examen}</td>

                      {pregunta.simuladores.length > 0 ? (
                        <td
                          className={`${dataStyles["color-td"]} ${dataStyles.green}`}
                        >
                          <span>Asignada</span>
                        </td>
                      ) : (
                        <td
                          className={`${dataStyles["color-td"]} ${dataStyles.red}`}
                        >
                          <span>Pendiente</span>
                        </td>
                      )}

                      <td className={dataStyles["td-center"]}>
                        <div className={dataStyles.container}>
                          <Image
                            onClick={(e) =>{ 
                              e.stopPropagation();
                              setMenu(
                                menu === pregunta._id ? null : pregunta._id
                              )
                            }}
                            src="/admin/3points.png"
                            alt="Más opciones"
                            width={20}
                            height={20}
                          />
                          <div
                            className={`${dataStyles["menu"]} ${
                              menu === pregunta._id ? "" : dataStyles["none"]
                            }`}
                              data-menu-content

                          >
                            <button 

                            onClick={() => {
                              console.log(pregunta,"Preguntaa")
                              setViewQuestion(pregunta)
                              }}>Asignar</button>
                            <button>Eliminar</button>
                            <button>Editar</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={dataStyles["admin-table-footer"]}>
            <div className={dataStyles["admin-footer-left"]}>
              <p>Preguntas por página: {limit}</p>
            </div>
            <div className={dataStyles["admin-footer-right"]}>
                          <p>
                            {(page - 1) * limit + 1} - {Math.min(page * limit, total)} de {total}

                          </p>

              <div
                className={`${dataStyles["footer-button"]} ${dataStyles.rotate}`} onClick={()=> page > 1 && setPage(page - 1)}
              >
                <Image
                  src="/admin/arrow.png"
                  alt="Anterior"
                  width={15}
                  height={15}
                />
              </div>
            <div className={dataStyles['footer-button']} onClick={() => page < TotalPages && setPage(page + 1)}>
                <Image
                  src="/admin/arrow.png"
                  alt="Siguiente"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
