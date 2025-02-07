// import FilterComponents from "@/app/ui/admin/Filters";
import Image from 'next/image';
import styles from './questions.module.css'
import dataStyles from '@/app/ui/admin/DataTable.module.css'
const QuestionsPage = () => {
    return ( 
    <>


<div className={styles['admin-question-container']}>
      <div className={styles['admin-question-title']}>
        <h2>Lista de preguntas</h2>
      </div>

      <div className={styles['admin-question-cards']}>
        <div className={styles['admin-question-card']}>
          <div className={styles['question-text']}>
            <p>Total de preguntas</p>
            <h4>520</h4>
          </div>
          <div className={styles['admin-question-img']}>
            <div className={styles['question-img']}>
              <Image src="/admin/blue-question.png" alt="Total preguntas" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className={styles['admin-question-card']}>
          <div className={styles['question-text']}>
            <p>Preguntas este mes</p>
            <h4>30</h4>
          </div>
          <div className={styles['admin-question-img']}>
            <div className={styles['question-img']}>
              <Image src="/admin/blue-calendar.png" alt="Preguntas este mes" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className={styles['admin-question-card']}>
          <div className={styles['question-text']}>
            <p>Preguntas asignadas</p>
            <h4>350</h4>
          </div>
          <div className={styles['admin-question-img']}>
            <div className={styles['question-img']}>
              <Image src="/admin/blue-pointer.png" alt="Preguntas asignadas" width={25} height={25} />
            </div>
          </div>
        </div>

        <div className={styles['admin-question-card']}>
          <div className={styles['question-text']}>
            <p>Categorías</p>
            <h4>4</h4>
          </div>
          <div className={styles['admin-question-img']}>
            <div className={styles['question-img']}>
              <Image src="/admin/blue-category.png" alt="Categorías" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>

      <div className={dataStyles['admin-table-container']}>
        <div className={dataStyles['admin-table-header']}>
          <div className={dataStyles['admin-table-right']}>
            <div className={dataStyles['input-container']}>
              <Image src="/admin/search.svg" alt="Buscar" width={25} height={25} />
              <input placeholder="Buscar..." type="text" />
            </div>
          </div>

          <div className={dataStyles['admin-table-left']}>
            <button className={dataStyles.bordered}>
              <Image src="/admin/filters.png" alt="Filtros" width={20} height={20} />
              Filtros
            </button>
            <button>
              <Image src="/admin/add-icon.png" alt="Añadir" width={20} height={20} />
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
                <th>Tipo</th>
                <th>Origen</th>
                <th>Categoría</th>
                <th>Asignado</th>
                <th className={dataStyles['th-center']}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>¿Qué es el positivismo aplicado?</td>
                <td>Html</td>
                <td>Examen</td>
                <td>Metodología</td>
                <td className={`${dataStyles['color-td']} ${dataStyles.red}`}>
                  <span>Pendiente</span>
                </td>
                <td className={dataStyles['td-center']}>
                  <div className={dataStyles.container}>
                    <Image src="/admin/3points.png" alt="Más opciones" width={20} height={20} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>¿Cuál es la capital de Francia?</td>
                <td>Html</td>
                <td>Examen</td>
                <td>Geografía</td>
                <td className={`${dataStyles['color-td']} ${dataStyles.green}`}>
                  <span>Completo</span>
                </td>
                <td className={dataStyles['td-center']}>
                  <div className={dataStyles.container}>
                    <Image src="/admin/3points.png" alt="Más opciones" width={20} height={20} />
                  </div>
                </td>
              </tr>
      
              {/* Añade más filas de preguntas según sea necesario */}
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
    </div>

    </> );
}
 
export default QuestionsPage;