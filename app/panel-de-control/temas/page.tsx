'use client'

import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css'
import { useState } from "react";

const UsersPage = () => {
    const [filters, setFilters] = useState(false);
    const [menu, setMenu] = useState(false);
    console.log(setMenu)
    console.log(filters,setFilters)
    return ( <>
       <div className="admin-question-container">
      <div className="admin-question-title">
        <h2>Lista de temas</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Temas</p>
            <h4>6</h4>
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
            <h4>450</h4>
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
            <h4>18</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image src="/admin/blue-time.png" alt="" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Plan preferido por los usuarios</p>
            <h4>Plus</h4>
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
              <input placeholder="Buscar..." type="text" />
            </div>
          </div>

          <div className={dataStyles['admin-table-left']}>
            <button
              onClick={() => {
                // setFilters(true);
              }}
              className={dataStyles['bordered']}
            >
              <Image src="/admin/filters.png" alt="" width={20} height={20} />
              Filtros
            </button>
            <button className={dataStyles['add-button']}>
              <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
              Añadir
            </button>
          </div>
        </div>

        <div className={dataStyles['admin-table']}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tema</th>
                <th>Area del tema</th>
                <th className={dataStyles["th-center"]}>Preguntas</th>
                <th className={dataStyles["th-center"]}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Paradigmas de investigacion</td>
                <td>Metodologia de investigacion</td>
                {/* <td className={`${dataStyles['color-td']} ${dataStyles.grey}`}>
                  <span>Free</span>
                </td> */}
                <td className={dataStyles["td-center"]}>32</td>
                <td className={dataStyles["td-center"]}>
                  <div className={dataStyles['container']}>
                    <Image
                      onClick={() => {
                        // setMenu(!menu);
                      }}
                      src="/admin/3points.png"
                      alt=""
                      width={20}
                      height={20}
                    />

                    <div className={`${dataStyles['menu']} ${menu ? "" : dataStyles['none']}`}>

                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className={dataStyles['admin-table-footer']}>
            <div className={dataStyles['admin-footer-left']}>
              <p>Temas por pagina: 10</p>
            </div>
            <div className={dataStyles['admin-footer-right']}>
              <p>11-20 de 20</p>
              <div className={dataStyles['footer-button'] + " " + dataStyles['rotate']}>
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>

              <div className={dataStyles['footer-button']}>
                <Image src="/admin/arrow.png" alt="" width={13} height={13} />
              </div>
            </div>
          </div>

      </div>

    </div>
    
    </> );
}
 
export default UsersPage;