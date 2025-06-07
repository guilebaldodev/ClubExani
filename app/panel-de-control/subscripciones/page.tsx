"use client";
import Image from "next/image";
import dataStyles from "@/app/ui/admin/DataTable.module.css";
import { useEffect, useState } from "react";
import { Venta } from "@/types/venta";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "@/types/shared";
import { toast } from "react-toastify";
import { PaidOptions, PlanOptions } from "@/consts/options";
import { formatCurrency, formatDate, getPlanInfo } from "@/app/utils";

const SubsPage = () => {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState<string | null>(null);
  const limit = 10;

  const [filtroPlan, setFiltroPlan] = useState<SingleValue<SelectOption>>(null);
  const [filtroStatus, setFiltroStatus] =
    useState<SingleValue<SelectOption>>(null);

  const fetchVentas = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        email: busqueda,
      });

      if (filtroPlan) queryParams.append("plan", filtroPlan.value);
      if (filtroStatus) queryParams.append("status", filtroStatus.value);

      const res = await fetch(`/api/ventas?${queryParams.toString()}`);
      const data = await res.json();

      console.log(data);

      if (!res.ok) throw new Error();

      setVentas(data.ventas);
      setTotalPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      toast.error("Error al cargar las preguntas");
    }
  };

  useEffect(() => {
    fetchVentas();
  }, [filtroPlan, filtroStatus, busqueda, page]);

  return (
    <div className="admin-question-container">
      <div className="admin-question-title">
        <h2>Lista de ventas</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Ventas totales</p>
            <h4>0</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                className="fill-blue"
                src="/admin/blue-money.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Ventas este mes</p>
            <h4>0</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                src="/admin/blue-calendar.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Recarga más comprada</p>
            <h4>Pro</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-best.png" alt="" width={25} height={25} />
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
            {/* <button
                // onClick={() => setFilters(true)}
                className={dataStyles['bordered']}
              >
                <Image src="/admin/filters.png" alt="" width={20} height={20} />
                Filtros
              </button> */}
            {/* <button>
                <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
                Añadir
              </button> */}
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
            placeholder="Filtrar por Recarga"
            options={PlanOptions}
            value={filtroPlan}
            onChange={(op) => {
              setFiltroPlan(op);
              setPage(1);
            }}
            isClearable
          />

          <Select
            placeholder="Filtrar por estado"
            options={PaidOptions}
            value={filtroStatus}
            onChange={(op) => {
              setFiltroStatus(op);
              setPage(1);
            }}
            isClearable
          />
        </div>

        <div className={dataStyles["admin-table"]}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Correo electrónico</th>
                <th>Método</th>
                <th>Plan</th>
                <th className={dataStyles["th-center"]}>Pagado</th>
                <th className={dataStyles["th-center"]}>Fecha</th>
                <th className={dataStyles["th-center"]}></th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta, index) => (
                <>
                  <tr>
                    <td>{(page - 1) * limit + index + 1}</td>
                    <td>{venta.email || "Usuario"}</td>
                    <td>{venta.paymentMethod}</td>
                    <td
                      className={`${dataStyles["color-td"]} ${
                        dataStyles[getPlanInfo(venta.amountPaid).color]
                      }`}
                    >
                      <span>{getPlanInfo(venta.amountPaid).name}</span>
                    </td>
                    <td className={dataStyles["td-center"]}>
                      {formatCurrency(venta.amountPaid)}
                    </td>
                    <td className={dataStyles["td-center"]}>
                      {formatDate(venta.stripeCreatedAt)}
                    </td>
                    <td className={dataStyles["td-center"]}>
                      <div className={dataStyles.container}>
                        <Image
                          onClick={() =>
                            setMenu(menu === venta._id ? null : venta._id)
                          }
                          src="/admin/3points.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <div
                          className={`${dataStyles["menu"]} ${
                            menu === venta._id ? "" : dataStyles["none"]
                          }`}
                        >
                          <button>Ver</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
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
              <p>
                {(page - 1) * limit + 1} - {Math.min(page * limit, total)} de{" "}
                {total}
              </p>
            </p>
            <div
              className={`${dataStyles["footer-button"]} ${dataStyles.rotate}`}
              onClick={() => page > 1 && setPage(page - 1)}
            >
              <Image
                src="/admin/arrow.png"
                alt="Anterior"
                width={15}
                height={15}
              />
            </div>
            <div
              className={dataStyles["footer-button"]}
              onClick={() => page < TotalPages && setPage(page + 1)}
            >
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
  );
};

export default SubsPage;
