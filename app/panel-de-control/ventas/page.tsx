import Image from 'next/image';
import styles from './sales.module.css'
import ChartComponent from '@/app/ui/admin/Chart';
import { salesBarChart, salesDashChart, salesPieChart } from '@/consts';


const SalesPage = () => {
    return ( 
    <>
    
    <div className={styles['sales-dashboard-container']}>
          <div className={styles['sales-dashboard-cards']}>
            <div className={styles['card']}>
              <div className={styles['drop-menu-container']}>
                <Image src="/admin/3points.png" alt="" width={24} height={24} />

                <div className={styles['drop-menu-options']}>
                  <div className={styles['drop-menu']}>
                    <ul>
                      <li>Por mes</li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles['sales-card-title']}>
                <h4>Ganancias</h4>
              </div>

              <div className={styles['sales-card-info']}>
                <div className={styles['text']}>
                  <h3>$103,550</h3>
                  <p>
                    <span className={styles['span-green']}>+15.8%</span> vs el mes anterior
                  </p>
                </div>
                <div className={styles['div-img-container']}>
                  <div className={`${styles['img']} ${styles['green']}`}>
                    <Image src="/admin/green-coins.png" alt="Icono de monedas" width={28} height={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['card']}>
              <div className={styles['drop-menu-container']}>
                <Image src="/admin/3points.png" alt="" width={24} height={24} />

                <div className={styles['drop-menu-options']}>
                  <div className={styles['drop-menu']}>
                    <ul>
                      <li>Por mes</li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles['sales-card-title']}>
                <h4>Monedas</h4>
              </div>

              <div className={styles['sales-card-info']}>
                <div className={styles['text']}>
                  <h3>1200</h3>
                  <p>
                    <span className={styles['span-green']}>+10%</span> vs el mes anterior
                  </p>
                </div>
                <div className={styles['div-img-container']}>
                  <div className={`${styles['img']} ${styles['blue']}`}>
                    <Image src="/admin/blue-tag.png" alt="Icono de etiqueta" width={28} height={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['card']}>
              <div className={styles['drop-menu-container']}>
                <Image src="/admin/3points.png" alt="" width={24} height={24} />

                <div className={styles['drop-menu-options']}>
                  <div className={styles['drop-menu']}>
                    <ul>
                      <li>Por mes</li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles['sales-card-title']}>
                <h4>Precio promedio</h4>
              </div>

              <div className={styles['sales-card-info']}>
                <div className={styles['text']}>
                  <h3>$450</h3>
                  <p>
                    <span className={styles['span-green']}>+8.8%</span> vs el mes anterior
                  </p>
                </div>
                <div className={styles['div-img-container']}>
                  <div className={`${styles['img']} ${styles['grey']}`}>
                    <Image src="/admin/grey-dollar-sign.png" alt="Icono de dólar" width={28} height={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['card']}>
              <div className={styles['drop-menu-container']}>
                <Image src="/admin/3points.png" alt="" width={24} height={24} />

                <div className={styles['drop-menu-options']}>
                  <div className={styles['drop-menu']}>
                    <ul>
                      <li>Por mes</li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles['sales-card-title']}>
                <h4>Usuarios</h4>
              </div>

              <div className={styles['sales-card-info']}>
                <div className={styles['text']}>
                  <h3>1030</h3>
                  <p>
                    <span className={styles['span-red']}>-10.75%</span> vs el mes anterior
                  </p>
                </div>
                <div className={styles['div-img-container']}>
                  <div className={`${styles['img']} ${styles['orange']}`}>
                    <Image src="/admin/orange-user.png" alt="Icono de usuario" width={32} height={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['sales-dashboard-items']}>
  <div className={styles['sales-bars']}>
    <div className={styles['sales-bars-container']}>
      <div className={styles['sales-bars-titles']}>
        <h3>Resumen de métricas del negocio</h3>
        <p className={styles['subtitle']}>Métricas por año</p>
      </div>

      <div className={styles['bars-cards-container']}>
        <div className={`${styles['bars-card']} ${styles['bars-card-selected']}`}>
          <div className={styles['bars-img-container']}>
            <Image src="/admin/grey-tag.png" alt="" width={22} height={23} />
          </div>
          <p>Compras</p>
        </div>

        <div className={styles['bars-card']}>
          <div className={styles['bars-img-container']}>
            <Image src="/admin/grey-bars.png" alt="" width={22} height={22} />
          </div>
          <p>Ganancias</p>
        </div>

        <div className={styles['bars-card']}>
          <div className={styles['bars-img-container']}>
            <Image src="/admin/grey-users.png" alt="" width={22} height={22} />
          </div>
          <p>Usuarios</p>
        </div>
      </div>

      <div className={styles['sales-chart-bars']}>
        <ChartComponent
            options={salesBarChart.options}
            series={salesBarChart.series}
            height={"200"}
            width={'auto'}
            type={'bar'}
    ></ChartComponent>
      </div>
    </div>
  </div>

  <div className={styles['sales-pie']}>
    <div className={styles['sales-pie-container']}>
      <div className={styles['sales-pie-title']}>
        <h3>Categoría de compras</h3>
      </div>

      <div className={styles['sales-pie-chart']}>

        <ChartComponent
        series={salesPieChart.series}
        options={salesPieChart.options}
        type={'donut'}
        height={'370px'}
        width={'auto'}
        >
        </ChartComponent>
      </div>
    </div>
  </div>

  <div className={styles['sales-transactions']}>
    <div className={styles['sales-transactions-container']}>
      <div className={styles['sales-transactions-titles']}>
        <h3>Últimas transacciones</h3>
        <p>Hay 58 transacciones este mes</p>
      </div>

      <div className={styles['sales-transactions-items']}>
        <div className={styles['sale-transaction-item']}>
          <div className={styles['sale-transaction-info']}>
            <div className={`${styles['transaction-img-container']} ${styles['green']}`}>
              <Image src="/admin/green-bank.png" alt="" width={24} height={24} />
            </div>
            <div className={styles['transactions-text']}>
              <p>Transferencia bancaria</p>
              <p className={styles['subtitle']}>16 Jun</p>
            </div>
          </div>
          <div className={styles['transaction-amount']}>
            <p>+$399</p>
          </div>
        </div>

        <div className={styles['sale-transaction-item']}>
          <div className={styles['sale-transaction-info']}>
            <div className={`${styles['transaction-img-container']} ${styles['green']}`}>
              <Image src="/admin/green-bank.png" alt="" width={24} height={24} />
            </div>
            <div className={styles['transactions-text']}>
              <p>Transferencia bancaria</p>
              <p className={styles['subtitle']}>16 Jun</p>
            </div>
          </div>
          <div className={styles['transaction-amount']}>
            <p>+$399</p>
          </div>
        </div>

        <div className={styles['sale-transaction-item']}>
          <div className={styles['sale-transaction-info']}>
            <div className={`${styles['transaction-img-container']} ${styles['purple']}`}>
              <Image src="/admin/purple-card.png" alt="" width={24} height={24} />
            </div>
            <div className={styles['transactions-text']}>
              <p>Tarjeta</p>
              <p className={styles['subtitle']}>16 Jun</p>
            </div>
          </div>
          <div className={styles['transaction-amount']}>
            <p>+$399</p>
          </div>
        </div>

        <div className={styles['sale-transaction-item']}>
          <div className={styles['sale-transaction-info']}>
            <div className={`${styles['transaction-img-container']} ${styles['grey']}`}>
              <Image src="/admin/grey-dollar-sign.png" alt="" width={24} height={24} />
            </div>
            <div className={styles['transactions-text']}>
              <p>Método no reconocido</p>
              <p className={styles['subtitle']}>16 Jun</p>
            </div>
          </div>
          <div className={styles['transaction-amount']}>
            <p>+$399</p>
          </div>
        </div>

        <div className={styles['sale-transaction-item']}>
          <div className={styles['sale-transaction-info']}>
            <div className={`${styles['transaction-img-container']} ${styles['red']}`}>
              <Image src="/admin/red-wifi.png" alt="" width={24} height={24} />
            </div>
            <div className={styles['transactions-text']}>
              <p>Pago en línea</p>
              <p className={styles['subtitle']}>16 Jun</p>
            </div>
          </div>
          <div className={styles['transaction-amount']}>
            <p>+$399</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles['sales-dashed']}>
    <div className={styles['sales-dashed-container']}>
      <div className={styles['sales-dashed-title']}>
        <h3>Tendencia de usuarios y compras</h3>
        <p>Tendencia de este año</p>
      </div>

      <div className={styles['sales-dash-chart']}>
        {/* <DashedLine /> */}
        <ChartComponent
        options={salesDashChart.options}
        series={salesDashChart.series}
        height={'300'}
        type={'line'}
        width={'auto'}
        ></ChartComponent>
      </div>
    </div>
  </div>
</div>
        </div>

    </> );
}
 
export default SalesPage;