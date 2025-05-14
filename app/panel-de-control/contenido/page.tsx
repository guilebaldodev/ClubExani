
import Image from "next/image";
import styles from './content.module.css'
import ChartComponent from "@/app/ui/admin/Chart";
import tableStyles from '@/app/ui/admin/DataTable.module.css'


import { contentHorizontalChart, contentLineChart, contentPieChart, contentShadowChart } from "@/consts";


const ContentPage = () => {
    return ( 
    <>
          <div className={styles['content-dashboard-container']}>
            <div className={styles['content-dashboard-cards']}>
                <div className={styles['content-dashboard-card']}>
                    <div className={`${styles['content-img-dashboard']} ${styles['blue']}`}>
                        <Image src="/admin/blue-question.png" alt="" width={25} height={24} />
                    </div>
                    <h3>850</h3>
                    <p>Preguntas totales</p>
                </div>

                {/* <div className={styles['content-dashboard-card']}>
                    <div className={`${styles['content-img-dashboard']} ${styles['green']}`}>
                        <Image src="/admin/green-book.png" alt="" width={25} height={25} />
                    </div>
                    <h3>150</h3>
                    <p>Lecciones totales</p>
                </div>

                <div className={styles['content-dashboard-card']}>
                    <div className={`${styles['content-img-dashboard']} ${styles['orange']}`}>
                        <Image src="/admin/orange-test.png" alt="" width={25} height={25} />
                    </div>
                    <h3>150</h3>
                    <p>Cuestionarios totales</p>
                </div> */}

                <div className={`${styles['content-dashboard-card']}`}>
                    <div className={`${styles['content-img-dashboard']} ${styles['orange']}`}>
                        <Image src="/admin/red-writing.svg" alt="" width={25} height={25} />
                    </div>
                    <h3>7</h3>
                    <p>Simuladores totales</p>
                </div>
            </div>

            <div className={styles['content-dashboard-items']}>
                <div className={styles['horizontal-bar']}>
                    <div className={styles['horizontal-bar-container']}>
                        <div className={styles['horizontal-bar-titles']}>
                            <h3>Frecuencia de uso de los simuladores</h3>
                            <p>Frecuencia total este año</p>
                        </div>

                        <div className={styles['horizontal-bar-chart']}>
                            {/* <HorizontalChart /> */}
                            <ChartComponent
                            options={contentHorizontalChart.options}
                            series={contentHorizontalChart.series}
                            type={'bar'}
                            height={'250'}
                            width={'auto'}
                            ></ChartComponent>
                        </div>
                    </div>
                </div>

                <div className={styles['content-pie']}>
                    <div className={styles['content-pie-container']}>
                        <div className={styles['content-pie-title']}>
                            <h3>Categoría de preguntas</h3>
                        </div>
                            <div className={styles['content-pie-chart']}>
                                <ChartComponent
                                type={'pie'}
                                options={contentPieChart.options}
                                series={contentPieChart.series}
                                height={'250'}
                                width={'auto'}
                                
                                ></ChartComponent>
                            </div>
                    </div>
                </div>

                <div className={styles['content-line']}>
                    <div className={styles['content-line-container']}>
                        <div className={styles['content-line-title']}>
                            <h3>Total de lecciones tomadas</h3>
                            <h2>13,4k</h2>
                        </div>

                        <div className={styles['content-line-chart']}>
                            {/* <ShadowChart /> */}
                            <ChartComponent
                                type={'area'}
                                options={contentShadowChart.options}
                                series={contentShadowChart.series}
                                height={'180'}
                                width={'auto'}
                                
                                ></ChartComponent>
                        </div>
                    </div>
                </div>

                <div className={styles['content-line']}>
                    <div className={styles['content-line-container']}>
                        <div className={styles['content-line-title']}>
                            <h3>Total de cuestionarios tomados</h3>
                            <h2>15,4k</h2>
                        </div>

                        <div className={styles['content-line-chart']}>
                            {/* <SimpleLineChart /> */}
                            <ChartComponent
                                type={'line'}
                                options={contentLineChart.options}
                                series={contentLineChart.series}
                                height={'180'}
                                width={'auto'}
                                
                                ></ChartComponent>
                        </div>
                    </div>
                </div>

                <div className={tableStyles['content-table']}>
  <div className={tableStyles['content-table-container']}>
    <div className={tableStyles['content-table-title']}>
      <h3>Últimas preguntas agregadas</h3>
    </div>

    <div className={tableStyles['content-table-content']}>
      <div className={tableStyles['admin-table']}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tema</th>
              <th>Tipo</th>
              <th>Origen</th>
              <th>Categoria</th>
              <th>Asignado</th>
              <th className={tableStyles['th-center']}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>¿Qué es el positivismo aplicado a los?</td>
              <td>Html</td>
              <td>Examen</td>
              <td>Metodología</td>
              <td className={`${tableStyles['color-td']} ${tableStyles['red']}`}>
                <span>Pendiente</span>
              </td>
              <td className={tableStyles['td-center']}>
                <div className={tableStyles['container']}>
                  <Image
                    src="/admin/3points.png"
                    alt="Más opciones"
                    width={20}
                    height={20}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>¿Qué es el positivismo?</td>
              <td>Texto</td>
              <td>Examen</td>
              <td>Metodología</td>
              <td className={`${tableStyles['color-td']} ${tableStyles['green']}`}>
                <span>Asignada</span>
              </td>
              <td>
                <div className={tableStyles['container']}>
                  <Image
                    src="/admin/3points.png"
                    alt="Más opciones"
                    width={20}
                    height={20}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tableStyles['admin-table-footer']}>
          <div className={tableStyles['admin-footer-left']}>
            <p>Preguntas por página: 5</p>
          </div>
          <div className={tableStyles['admin-footer-right']}>
            <p>1-5 de 20</p>
            <div className={`${tableStyles['footer-button']} ${tableStyles['rotate']}`}>
              <Image
                src="/admin/arrow.png"
                alt="Flecha izquierda"
                width={16}
                height={16}
              />
            </div>

            <div className={tableStyles['footer-button']}>
              <Image
                src="/admin/arrow.png"
                alt="Flecha derecha"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
            </div>
        </div>
    
    </> );
}
 
export default ContentPage;