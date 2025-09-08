'use client'
import { useUserStore } from "@/stores/userStore";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import styles from "./css/userIcon.module.css"


const UserIcon = () => {
  const { nombre, monedas, email } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router= useRouter()
  const {signOut} = useClerk()


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div
      ref={menuRef}
      className={styles["container"]}
      style={{ userSelect: "none" }}
    >
      <div className={styles["user-icon"]} onClick={toggleMenu}>
        {nombre === "" ? email.charAt(0) : nombre.charAt(0)}
      </div>

      {isOpen && (
        <div className={styles["menu-container"]}>
          <div className={styles["menu-container-title"]}>
            <div className={styles["circle"]}>
              {nombre === "" ? email.charAt(0) : nombre.charAt(0)}
            </div>
            <div className={styles["text"]}>
              <p>{nombre === "" ? "Usuario" : nombre}</p>
              <span>{email}</span>
            </div>
          </div>

          <div
            onClick={() => {
              router.push("/creditos")
              setIsOpen(false)
            }}
            className={styles["menu-item"]}
          >
            <img src="/layout/coins-grey.png" alt="" />
            <p>{monedas} monedas</p>
          </div>

          <div
            onClick={() => {
              router.push("/plataforma/cuenta")
              setIsOpen(false)
            }}
            className={styles["menu-item"]}
          >
            <img src="/layout/config-icon.png" alt="" />
            <p>Mi cuenta</p>
          </div>

          <div
            onClick={() => {
              signOut()
              setIsOpen(false)
            }}
            className={styles["menu-item"]}
          >
            <img src="/layout/log-out-icon.png" alt="" />
            <p>Cerrar sesión</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
