'use client'
import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css'
import { useState } from "react";

const SubsPage = () => {
    const [filters, setFilters] = useState(false);
    const [menu, setMenu] = useState(false);
    console.log(setMenu)
    console.log(filters,setFilters)
    return ( <div className="admin-question-container">
        <div className="admin-question-title">
          <h2>Lista de subscripciones</h2>
        </div>
  
        <div className="admin-question-cards">
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripciones activas</p>
              <h4>6</h4>
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
              <p>Subscripciones este mes</p>
              <h4>450</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <Image src="/admin/blue-calendar.png" alt="" width={25} height={25} />
              </div>
            </div>
          </div>
  
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripcion más comprada</p>
              <h4>Pro</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <Image src="/admin/blue-best.png" alt="" width={25} height={25} />
              </div>
            </div>
          </div>
  
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripciones totales</p>
              <h4>1050</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <Image src="/admin/blue-money2.png" alt="" width={25} height={25} />
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
                // onClick={() => setFilters(true)}
                className={dataStyles['bordered']}
              >
                <Image src="/admin/filters.png" alt="" width={20} height={20} />
                Filtros
              </button>
              <button>
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
                  <th>Usuario</th>
                  <th>Correo electrónico</th>
                  <th>Método</th>
                  <th>Plan</th>
                  <th className={dataStyles['th-center']}>Pagado</th>
                  <th className={dataStyles['th-center']}>Fecha</th>
                  <th className={dataStyles['th-center']}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>
                  <td>Tarjeta</td>
                  <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
                    <span>Elite</span>
                  </td>
                  <td className={dataStyles['td-center']}>$450</td>
                  <td className={dataStyles['td-center']}>16/10/2024</td>
                  <td className={dataStyles['td-center']}>
                    <div className="container">
                      <Image
                        // onClick={() => setMenu(!menu)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className={`menu ${menu ? '' : 'none'}`}>
                        {/* <a href="#">Eliminar</a>
                        <a href="#">Editar</a>
                        <a href="#">Ver</a>
                        <a href="#">Añadir a examen</a>
                        <a href="#">Añadir a cuestionario</a> */}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>
                  <td>Tarjeta</td>
                  <td className={`${dataStyles['color-td']} ${dataStyles.green}`}>
                    <span>Pro</span>
                  </td>
                  <td className={dataStyles['td-center']}>$450</td>
                  <td className={dataStyles['td-center']}>16/10/2024</td>
                  <td className={dataStyles['td-center']}>
                    <div className="container">
                      <Image
                        // onClick={() => setMenu(!menu)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className={`menu ${menu ? '' : 'none'}`}>
                        {/* <a href="#">Eliminar</a>
                        <a href="#">Editar</a>
                        <a href="#">Ver</a>
                        <a href="#">Añadir a examen</a>
                        <a href="#">Añadir a cuestionario</a> */}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>
                  <td>Tarjeta</td>
                  <td className={`${dataStyles['color-td']} ${dataStyles.blue}`}>
                    <span>Plus</span>
                  </td>
                  <td className={dataStyles['td-center']}>$450</td>
                  <td className={dataStyles['td-center']}>16/10/2024</td>
                  <td className={dataStyles['td-center']}>
                    <div className="container">
                      <Image
                        // onClick={() => setMenu(!menu)}
                        src="/admin/3points.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className={`menu ${menu ? '' : 'none'}`}>
                        {/* <a href="#">Eliminar</a>
                        <a href="#">Editar</a>
                        <a href="#">Ver</a>
                        <a href="#">Añadir a examen</a>
                        <a href="#">Añadir a cuestionario</a> */}
                      </div>
                    </div>
                  </td>
                </tr>
                {/* More table rows */}
              </tbody>
            </table>
  


          </div>

          <div className={dataStyles['admin-table-footer']}>
            <div className={dataStyles['admin-footer-left']}>
              <p>Preguntas por página: 10</p>
            </div>
            <div className={dataStyles['admin-footer-right']}>
              <p>11-20 de 20</p>
              <div className={`${dataStyles['footer-button']} ${dataStyles.rotate}`}>
                <Image src="/admin/arrow.png" alt="Anterior" width={15} height={15} />
              </div>
              <div className={dataStyles['footer-button']}>
                <Image src="/admin/arrow.png" alt="Siguiente" width={15} height={15} />
              </div>
            </div>
          </div>

        </div>
      </div> );
}
 
export default SubsPage;