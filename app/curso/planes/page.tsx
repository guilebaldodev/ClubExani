import styles from '../../planes/prices.module.css'

import Image from "next/image";

const CoursePricing = () => {
    return ( 
        <div className={styles['pricing-page-container course-pricing-container']}>
        <div className={`${styles['pricing-page-titles']} ${styles['course-pricing-title']}`}>
          <h3>Escoge tu plan</h3>
          <p>Elige la duración que mejor se ajuste a tus necesidades.</p>
        </div>

        <div className={styles['pricing-plans-container']}>
          {/* Plan Gratis */}
          <div className={`${styles['plan-item']} ${styles['free-plan']}`}>
            <div className={styles['plan-info']}>
              <h4>Gratis</h4>
              <p className={styles['p-100']}>Explora nuestra plataforma</p>
              <div className={styles['plan-info-price']}>
                <h4>$0</h4>
              </div>
              <p className={styles['plan-info-last']}>Gratis por ahora</p>
              <button className={styles['plan-button']}>Plan actual</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Exámenes de simulación: 1</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>4 lecciones</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>4 cuestionarios de prueba</p>
              </div>
            </div>
          </div>

          {/* Plan Plus */}
          <div className={styles['plan-item']}>
            <div className={styles['plan-info']}>
              <h4>Plus</h4>
              <p className={styles['p-100']}>Preparación intensiva en un mes.</p>
              <div className={styles['plan-info-price']}>
                <h4>$399</h4>
              </div>
              <p className={styles['plan-info-last']}>1 mes de vigencia</p>
              <button className={styles['plan-button']}>Seleccionar plan</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Exámenes de simulación: 3</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todas las lecciones</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todos los cuestionarios</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>1 mes de acceso completo</p>
              </div>
            </div>
          </div>

          {/* Plan Pro */}
          <div className={styles['plan-item']}>
            <div className={styles['plan-info']}>
              <h4>Pro</h4>
              <p className={styles['p-100']}>Para una preparación sólida.</p>
              <div className={styles['plan-info-price']}>
                <h4>$599</h4>
              </div>
              <p className={styles['plan-info-last']}>3 meses de vigencia</p>
              <button className={styles['plan-button']}>Seleccionar plan</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Exámenes de simulación: 6</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todas las lecciones</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todos los cuestionarios</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>3 meses de acceso completo</p>
              </div>
            </div>
          </div>

          {/* Plan Elite */}
          <div className={`${styles['plan-item']} ${styles['plan-item-selected']}`}>
            <div className={styles['plan-popular']}>Más vendido</div>
            <div className={styles['plan-info']}>
              <h4>Elite</h4>
              <p className={styles['p-100']}>Prepárate con tranquilidad.</p>
              <div className={styles['plan-info-price']}>
                <h4>$799</h4>
              </div>
              <p className={styles['plan-info-last']}>6 meses de vigencia</p>
              <button className={styles['plan-button']}>Seleccionar plan</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Exámenes de simulación: 10</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todas las lecciones</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso a todos los cuestionarios</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>6 meses de acceso completo</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Acceso prioritario a nuevas funcionalidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default CoursePricing;