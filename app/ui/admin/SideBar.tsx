"use client";
import { useState } from "react";
import Link from "next/link"; // Next.js Link
import styles from "./SideBar.module.css"; // Asegúrate de migrar los estilos a CSS Modules o mantenerlos globales si prefieres
import Image from "next/image";

interface AdminHeaderProps {
  isSideBarActive: boolean;
  toggleSideBar: () => void;
}

const SideBar = ({ toggleSideBar, isSideBarActive }: AdminHeaderProps) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      {!isSideBarActive && (
        <>
          <div className={styles["overlay"]}></div>
        </>
      )}

      <div
        className={`${styles["sidebar-container"]} ${
          isSideBarActive ? styles["close"] : ""
        } ${styles["slide-enter"]}`}
      >
        <div className={styles["sidebar-top"]}>
          <div className={styles["sidebar-header"]}>
            <div className={styles["sidebar-title"]}>
              <Image
                src="/layout/black-logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
              <h3>
                Simu<span className="primary-color">landum</span>
              </h3>
            </div>

            <Image
              onClick={() => {
                toggleSideBar();
              }}
              alt="x icon"
              width={25}
              height={25}
              src="/admin/x.png"
            />
          </div>

          <div className={styles["sidebar-options"]}>
            {/* Dashboards */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === "dashboards"
                    ? `${styles["active"]} ${styles["option-menu-selected"]}`
                    : ""
                }`}
                onClick={() => toggleMenu("dashboards")}
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

              <div
                className={`${styles["content"]} ${
                  activeMenu === "dashboards" ? styles["show"] : ""
                }`}
              >
                <Link
                  href="/panel-de-control/ventas"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Ventas Icon"
                    width={12}
                    height={12}
                  />
                  <p>Ventas</p>
                </Link>

                <Link
                  href="/panel-de-control/contenido"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
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



            {/* Simuladores */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === "simuladores"
                    ? `${styles["active"]} ${styles["option-menu-selected"]}`
                    : ""
                }`}
                onClick={() => toggleMenu("simuladores")}
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

              <div
                className={`${styles["content"]} ${
                  activeMenu === "simuladores" ? styles["show"] : ""
                }`}
              >
                <Link
                  href="/panel-de-control/simuladores"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link
                  href="/panel-de-control/crear-simulador"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
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



            {/* Preguntas */}
            <div className={styles["option-menu"]}>
              <div
                className={`${styles["option-menu-title"]} ${
                  activeMenu === "preguntas"
                    ? `${styles["active"]} ${styles["option-menu-selected"]}`
                    : ""
                }`}
                onClick={() => toggleMenu("preguntas")}
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

              <div
                className={`${styles["content"]} ${
                  activeMenu === "preguntas" ? styles["show"] : ""
                }`}
              >
                <Link
                  href="/panel-de-control/preguntas"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
                  <Image
                    src="/layout/admin/round-icon.png"
                    alt="Lista Icon"
                    width={12}
                    height={12}
                  />
                  <p>Lista</p>
                </Link>

                <Link
                  href="/panel-de-control/crear-pregunta"
                  onClick={() => {
                    if (!isSideBarActive && window.innerWidth < 750) {
                      toggleSideBar();
                    }
                  }}
                >
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

            {/* Imagenes */}

            <Link
              href="/panel-de-control/temas"
              onClick={() => {
                if (!isSideBarActive && window.innerWidth < 750) {
                  toggleSideBar();
                }
              }}
            >
              <Image
                src="/layout/admin/category.png"
                alt="Usuarios Icon"
                width={20}
                height={20}
              />
              <p>Imagenes</p>
            </Link>



            {/* Temas */}

            <Link
              href="/panel-de-control/temas"
              onClick={() => {
                if (!isSideBarActive && window.innerWidth < 750) {
                  toggleSideBar();
                }
              }}
            >
              <Image
                src="/layout/admin/category.png"
                alt="Usuarios Icon"
                width={20}
                height={20}
              />
              <p>Temas</p>
            </Link>

            <Link
              href="/panel-de-control/usuarios"
              onClick={() => {
                if (!isSideBarActive && window.innerWidth < 750) {
                  toggleSideBar();
                }
              }}
            >
              <Image
                src="/layout/admin/user-icon.png"
                alt="Usuarios Icon"
                width={20}
                height={20}
              />
              <p>Usuarios</p>
            </Link>

            <Link
              href="/panel-de-control/subscripciones"
              onClick={() => {
                if (!isSideBarActive && window.innerWidth < 750) {
                  toggleSideBar();
                }
              }}
            >
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
          <Link href="/panel-de-control/preguntas">
            <Image
              src="/layout/admin/dark-mode-icon.png"
              alt="Tema Icon"
              width={20}
              height={20}
            />
            <p>Tema</p>
          </Link>

          <Link href="/panel-de-control/preguntas">
            <Image
              src="/layout/admin/log-out-icon.png"
              alt="Cerrar sesión Icon"
              width={20}
              height={20}
            />
            <p>Cerrar sesión</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
