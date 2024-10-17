'use client'
import { useState } from 'react';
import Link from 'next/link'; // Next.js Link
import styles from './SideBar.module.css'; // Asegúrate de migrar los estilos a CSS Modules o mantenerlos globales si prefieres
import Image from 'next/image';


const SideBar = () => {

    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
    };


    return ( 
    <>
    
    <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-top"]}>
          <div className={styles["sidebar-header"]}>
            <div className={styles["sidebar-title"]}>
              <Image src="/layout/black-logo.png" alt="Logo" width={32} height={32} />
              <h3>Club<span className='primary-color'>Exani</span></h3>
            </div>
          </div>

          <div className={styles["sidebar-options"]}>
            {/* Dashboards */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === 'dashboards' ? `${styles["active"]} ${styles["option-menu-selected"]}` : ''
                }`}
                onClick={() => toggleMenu('dashboards')}
              >
                <div className={styles["title-right"]}>
                  <Image
                    src="/layout/admin/home-icon.png"
                    alt="Home Icon"
                    width={20}
                    height={20}
                  />
                  <p>Dashboards</p>
                </div>
                <Image
                  className={styles["toggle-icon"]}
                  src="/layout/admin/forward-icon.png"
                  alt="Toggle Icon"
                  width={18}
                  height={18}
                />
              </div>

              <div className={`${styles["content"]} ${activeMenu === 'dashboards' ? styles["show"] : ''}`}>
                <Link href="/panel-control/ventas">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Ventas Icon"
                    width={12}
                    height={12}
                  />
                  <p>Ventas</p>
                </Link>

                <Link href="/panel-control/contenido">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Contenido Icon"
                    width={12}
                    height={12}
                  />
                  <p>Contenido</p>
                </Link>
              </div>
            </div>

            {/* Preguntas */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === 'preguntas' ? `${styles["active"]} ${styles["option-menu-selected"]}` : ''
                }`}
                onClick={() => toggleMenu('preguntas')}
              >
                <div className={styles["title-right"]}>
                  <Image
                    src="/layout/admin/question-icon.png"
                    alt="Question Icon"
                    width={20}
                    height={20}
                  />
                  <p>Preguntas</p>
                </div>
                <Image
                  className={styles["toggle-icon"]}
                  src="/layout/admin/forward-icon.png"
                  alt="Toggle Icon"
                  width={18}
                  height={18}
                />
              </div>

              <div className={`${styles["content"]} ${activeMenu === 'preguntas' ? styles["show"] : ''}`}>
                <Link href="/panel-control/preguntas">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link href="/panel-control/añadir-pregunta">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Añadir Icon"
                    width={12}
                    height={12}
                  />
                  <p>Añadir pregunta</p>
                </Link>
              </div>
            </div>

            {/* Lecciones */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === 'lecciones' ? `${styles["active"]} ${styles["option-menu-selected"]}` : ''
                }`}
                onClick={() => toggleMenu('lecciones')}
              >
                <div className={styles["title-right"]}>
                  <Image
                    src="/layout/admin/open-book.png"
                    alt="Lecciones Icon"
                    width={20}
                    height={20}
                  />
                  <p>Lecciones</p>
                </div>
                <Image
                  className={styles["toggle-icon"]}
                  src="/layout/admin/forward-icon.png"
                  alt="Toggle Icon"
                  width={18}
                  height={18}
                />
              </div>

              <div className={`${styles["content"]} ${activeMenu === 'lecciones' ? styles["show"] : ''}`}>
                <Link href="/panel-control/lecciones">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link href="/panel-control/añadir-leccion">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Añadir Icon"
                    width={12}
                    height={12}
                  />
                  <p>Añadir lección</p>
                </Link>
              </div>
            </div>

            {/* Simuladores */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === 'simuladores' ? `${styles["active"]} ${styles["option-menu-selected"]}` : ''
                }`}
                onClick={() => toggleMenu('simuladores')}
              >
                <div className={styles["title-right"]}>
                  <Image
                    src="/layout/admin/writing-icon.svg"
                    alt="Simuladores Icon"
                    width={20}
                    height={20}
                  />
                  <p>Simuladores</p>
                </div>
                <Image
                  className={styles["toggle-icon"]}
                  src="/layout/admin/forward-icon.png"
                  alt="Toggle Icon"
                  width={18}
                  height={18}
                />
              </div>

              <div className={`${styles["content"]} ${activeMenu === 'simuladores' ? styles["show"] : ''}`}>
                <Link href="/panel-control/simuladores">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link href="/panel-control/añadir-simulador">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Añadir Simulador Icon"
                    width={12}
                    height={12}
                  />
                  <p>Construir simulador</p>
                </Link>
              </div>
            </div>

            {/* Cuestionarios */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === 'cuestionarios' ? `${styles["active"]} ${styles["option-menu-selected"]}` : ''
                }`}
                onClick={() => toggleMenu('cuestionarios')}
              >
                <div className={styles["title-right"]}>
                  <Image
                    src="/layout/admin/test.png"
                    alt="Cuestionarios Icon"
                    width={20}
                    height={20}
                  />
                  <p>Cuestionarios</p>
                </div>
                <Image
                  className={styles["toggle-icon"]}
                  src="/layout/admin/forward-icon.png"
                  alt="Toggle Icon"
                  width={18}
                  height={18}
                />
              </div>

              <div className={`${styles["content"]} ${activeMenu === 'cuestionarios' ? styles["show"] : ''}`}>
                <Link href="/panel-control/cuestionarios">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link href="/panel-control/añadir-cuestionario">
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Añadir Cuestionario Icon"
                    width={12}
                    height={12}
                  />
                  <p>Construir cuestionario</p>
                </Link>
              </div>
            </div>

            <Link href="/panel-control/usuarios">
              <Image src="/layout/admin/user-icon.png" alt="Usuarios Icon" width={20} height={20} />
              <p>Usuarios</p>
            </Link>

            <Link href="/panel-control/subscripciones">
              <Image
                src="/layout/admin/money-icon.png"
                alt="Subscripciones Icon"
                width={20}
                height={20}
              />
              <p>Subscripciones</p>
            </Link>
          </div>
        </div>


        <div className={styles["sidebar-footer"]}>
  <Link href="/panel-control/preguntas">
    <Image src="/layout/admin/dark-mode-icon.png" alt="Tema Icon" width={20} height={20} />
    <p>Tema</p>
  </Link>

  <Link href="/panel-control/preguntas">
    <Image src="/layout/admin/log-out-icon.png" alt="Cerrar sesión Icon" width={20} height={20} />
    <p>Cerrar sesión</p>
  </Link>
</div>


      </div>








    </> );
}
 
export default SideBar;