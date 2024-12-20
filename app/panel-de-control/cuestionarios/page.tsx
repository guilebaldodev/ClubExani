'use client'
import Image from "next/image";
import dataStyles from '@/app/ui/admin/DataTable.module.css'
import { useState } from "react";


const QuizzesPage = () => {

    const [filters, setFilters] = useState(false);
    const [menu, setMenu] = useState(false);
    console.log(setMenu)
    console.log(filters)
    return ( <>
        <div className="admin-question-container">
      <div className="admin-question-title">
        <h2>Lista de cuestionarios</h2>
      </div>

      <div className="admin-question-cards">
        <div className="admin-question-card">
          <div className="question-text">
            <p>Cuestinarios</p>
            <h4>6</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                className="fill-blue"
                src="/admin/blue-writing.svg"
                alt=""
                width={25} // Ajusta el tamaño según sea necesario
                height={25} // Ajusta el tamaño según sea necesario
              />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Preguntas en cuestionarios</p>
            <h4>450</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                src="/admin/blue-question.png"
                alt=""
                width={25} // Ajusta el tamaño según sea necesario
                height={25} // Ajusta el tamaño según sea necesario
              />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Total de horas en cuestionarios</p>
            <h4>18</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                src="/admin/blue-time.png"
                alt=""
                width={25} // Ajusta el tamaño según sea necesario
                height={25} // Ajusta el tamaño según sea necesario
              />
            </div>
          </div>
        </div>

        <div className="admin-question-card">
          <div className="question-text">
            <p>Total de cuestionarios completados</p>
            <h4>3500</h4>
          </div>
          <div className="admin-question-img">
            <div className="question-img">
              <Image
                src="/admin/blue-best.png"
                alt=""
                width={25} // Ajusta el tamaño según sea necesario
                height={25} // Ajusta el tamaño según sea necesario
              />
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
          setFilters(true);
        }}
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
          <th>Tema</th>
          <th>Categoria</th>
          <th>Autor</th>
          <th>Tipo</th>
          <th className={dataStyles['th-center']}>Preguntas</th>
          <th className={dataStyles['th-center']}>Completados</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>¿Qué es el positivismo aplicado a los?</td>
          <td>Metodología</td>
          <td>Guilebaldo</td>
          <td className={`${dataStyles['color-td']} ${dataStyles['grey']}`}>
            <span>Gratis</span>
          </td>
          <td className={dataStyles['td-center']}>5</td>
          <td className={dataStyles['td-center']}>1050</td>
          <td className={dataStyles['td-center']}>
            <div className={dataStyles['container']}>
              <Image
                onClick={() => {
                  // setmenu(!menu);
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
        <tr>
          <td>1</td>
          <td>¿Qué es el positivismo aplicado a los?</td>
          <td>Metodología</td>
          <td>Guilebaldo</td>
          <td className={`${dataStyles['color-td']} ${dataStyles['gold']}`}>
            <span>Premium</span>
          </td>
          <td className={dataStyles['td-center']}>5</td>
          <td className={dataStyles['td-center']}>1050</td>
          <td className={dataStyles['td-center']}>
            <div className={dataStyles['container']}>
              <Image
                onClick={() => {
                  // setmenu(!menu);
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

      </div>
    </div>
    
    </> );
}
 
export default QuizzesPage;