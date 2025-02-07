'use client'

import Image from "next/image";
import styles from './lessons.module.css'
import dataStyles from '@/app/ui/admin/DataTable.module.css'
const LessonsPage = () => {
    return ( <>
    
    <div className={styles["admin-question-container"]}>
  <div className={styles["admin-question-title"]}>
    <h2>Lista de lecciones</h2>
  </div>

  <div className={styles["admin-question-cards"]}>
    <div className={styles["admin-question-card"]}>
      <div className={styles["question-text"]}>
        <p>Total de lecciones</p>
        <h4>120</h4>
      </div>
      <div className={styles["admin-question-img"]}>
        <div className={styles["question-img"]}>
          <Image src="/admin/blue-open-book.png" alt="" width={25} height={25} />
        </div>
      </div>
    </div>

    <div className={styles["admin-question-card"]}>
      <div className={styles["question-text"]}>
        <p>Lecciones este mes</p>
        <h4>30</h4>
      </div>
      <div className={styles["admin-question-img"]}>
        <div className={styles["question-img"]}>
          <Image src="/admin/blue-calendar.png" alt="" width={25} height={25} />
        </div>
      </div>
    </div>

    <div className={styles["admin-question-card"]}>
      <div className={styles["question-text"]}>
        <p>Completados mejor leccion</p>
        <h4>3500</h4>
      </div>
      <div className={styles["admin-question-img"]}>
        <div className={styles["question-img"]}>
          <Image src="/admin/blue-best.png" alt="" width={25} height={25} />
        </div>
      </div>
    </div>

    <div className={styles["admin-question-card"]}>
      <div className={styles["question-text"]}>
        <p>Categorias</p>
        <h4>4</h4>
      </div>
      <div className={styles["admin-question-img"]}>
        <div className={styles["question-img"]}>
          <Image src="/admin/blue-category.png" alt="" width={25} height={25} />
        </div>
      </div>
    </div>
  </div>

  <div className={dataStyles["admin-table-container"]}>
    <div className={dataStyles["admin-table-header"]}>
      <div className={dataStyles["admin-table-right"]}>
        <div className={dataStyles["input-container"]}>
          <Image src="/admin/search.svg" alt="" width={25} height={25} />
          <input placeholder="Buscar..." type="text" />
        </div>
      </div>

      <div className={dataStyles["admin-table-left"]}>
        <button  className={dataStyles["bordered"]}>
          <Image src="/admin/filters.png" alt="" width={20} height={20} />
          Filtros
        </button>
        <button>
          <Image src="/admin/add-icon.png" alt="" width={20} height={20} />
          Añadir
        </button>
      </div>
    </div>

    <div className={dataStyles["admin-table"]}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tema</th>
            <th>Categoria</th>
            <th>Autor</th>
            <th>Tipo</th>
            <th className={dataStyles["th-center"]}>Completados</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>¿Qué es el positivismo aplicado?</td>
            <td>Metodologia</td>
            <td>Guilebaldo</td>
            <td  className={`${dataStyles['color-td']} ${dataStyles.grey}`}>
              <span>Gratis</span>
            </td>
            <td className={dataStyles["td-center"]}>1050</td>
            <td className={dataStyles["td-center"]}>
              <div className={dataStyles["container"]}>
                <Image
                //   onClick={() => setMenu(!menu)}
                  src="/admin/3points.png"
                  alt=""
                  width={20}
                  height={20}
                />
                {/* <div className={`${menu ? "" : dataStyles["none"]}`}>
                  <Link>Eliminar</Link>
                  <Link>Editar</Link>
                  <Link>Ver</Link>
                  <Link>Añadir a examen</Link>
                  <Link>Añadir a cuestionario</Link>
                </div> */}
              </div>
            </td>
          </tr>

          {/* Aquí están las siguientes filas */}
          <tr>
            <td>2</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Guilebaldo</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Guilebaldo</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>1050</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Alexa</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Alexa</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Alexa</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Guilebaldo</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>¿Qué es el positivismo?</td>
            <td>Metodologia</td>
            <td>Guilebaldo</td>
            <td className={`${dataStyles['color-td']} ${dataStyles.gold}`}>
              <span>Premium</span>
            </td>
            <td className={dataStyles["td-center"]}>450</td>
            <td>
              <div className={dataStyles["container"]}>
                <Image src="/admin/3points.png" alt="" width={20} height={20} />
              </div>
            </td>
          </tr>
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
 
export default LessonsPage;