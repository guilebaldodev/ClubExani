'use client'

import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css'
import { useEffect, useState } from "react";
import { Usuarios } from "@/types/usuarios";
import { toast } from "react-toastify";

const UsersPage = () => {


  const [menu, setMenu] = useState<string | null>("");
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  
  
  function getDate(fechaISO: string | Date) {
  const fecha = new Date(fechaISO);
  return fecha.toISOString().split('T')[0];
}

  const fetchUsuarios= async()=>{

    try {
      const queryParams= new URLSearchParams({
        page:page.toString(),
        limit:limit.toString(),
        titulo:busqueda
      })

      const res = await fetch(`/api/usuarios?${queryParams.toString()}`)
      const data = await res.json();

      if(!res.ok) throw new Error(data.error || "Error al crear")

      setUsuarios(data.usuarios)
      setTotalPages(data.pages)
      setTotal(data.total)

    } catch (error) {
      console.log(error)
      toast.error("Error al cargar usuarios")
    }


  }


  useEffect(()=>{
    fetchUsuarios()
  },[busqueda,page])

  return ( <>
       <div className="admin-question-container">
      <div className="admin-question-title">
        <h2>Lista de usuarios</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Usuarios</p>
            <h4>{usuarios.length}</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image className="fill-blue" src="/admin/blue-user.png" alt="" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Usuarios de pago activo</p>
            <h4>0</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-money.png" alt="" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Usuarios nuevos este mes</p>
            <h4>0</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-time.png" alt="" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Recarga preferida</p>
            <h4>Pro</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-best.png" alt="" width={25} height={25} />
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
                onChange={(e)=>{
                  setBusqueda(e.target.value)
                  setPage(1)
                }}
                
                />
            </div>
          </div>

          <div className={dataStyles['admin-table-left']}>
            {/* <button
              onClick={() => {
                // setFilters(true);
              }}
              className={dataStyles['bordered']}
            >
              <Image src="/admin/filters.png" alt="" width={20} height={20} />
              Filtros
            </button> */}
            {/* <button className={dataStyles['add-button']}>
              <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
              Añadir
            </button> */}
          </div>
        </div>

        <div className={dataStyles['admin-table']}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Usuario</th>
                <th className={dataStyles["th-center"]}>Monedas</th>
                <th className={dataStyles["th-center"]}>Registro</th>
                <th className={dataStyles["th-center"]}></th>
              </tr>
            </thead>
            <tbody>
    

              {usuarios.map((user,i)=>(
                <>
                          <tr>
                <td>{i}</td>
                <td>{user.nombre?user.nombre:user._id}</td>
                {/* <td className={`${dataStyles['color-td']} ${dataStyles.grey}`}>
                  <span>Free</span>
                </td> */}
                <td className={dataStyles["td-center"]}>{user.monedas}</td>
                <td className={dataStyles["td-center"]}>{user.createdAt?getDate(user.createdAt):"Sin fecha"}</td>
                <td className={dataStyles["td-center"]}>
                  <div className={dataStyles['container']}>
                    <Image
                      onClick={() => setMenu(menu === user._id ? null : user._id)}
                      src="/admin/3points.png"
                      alt=""
                      width={20}
                      height={20}
                    />

                      <div className={`${dataStyles['menu']} ${menu === user._id ? "" : dataStyles['none']}`}>
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

        <div className={dataStyles['admin-table-footer']}>
            <div className={dataStyles['admin-footer-left']}>
              <p>Preguntas por pagina: {limit}
              </p>
            </div>
            <div className={dataStyles['admin-footer-right']}>
            <p>{(page - 1) * limit + 1} - {Math.min(page * limit, total)} de {total}</p>
              <div className={dataStyles['footer-button'] + " " + dataStyles['rotate']} onClick={() => page > 1 && setPage(page - 1)}>
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>

              <div className={dataStyles['footer-button']} onClick={() => page < totalPages && setPage(page + 1)}>
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>
            </div>
          </div>

      </div>

    </div>
    
    </> );
}
 
export default UsersPage;