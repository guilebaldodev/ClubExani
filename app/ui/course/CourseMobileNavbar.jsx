import Link from "next/link";
import Image from "next/image";
import style from "./mobileNavbar.module.css"; 
import { useState } from "react";

const CourseMobileMenu = ({ onClose }) => {

  const [menu, setmenu] = useState(false);


  return (
    <div className={`${style["mobile-menu"]} ${style["slide-enter"]}`}>
      <div className={style["menu-header"]}>
        <div className={style["menu-header-left"]}>
          <Image
            src={"/layout/logo.png"}
            alt="justice icon"
            width={32}
            height={32}
          />
          <p className={style["menu-title"]}><span className="primary-color">Simu</span>landum</p>
        </div>

        <Image
          className={style["menu-close-icon"]}
          src={"/layout/x.png"}
          width={25}
          height={25}
          alt="Cerrar menú"
          onClick={onClose}
        />
      </div>

      <div className={style["menu-options"]}>

        <div className={style["menu-item"]}>
          <Link href="/plataforma" onClick={onClose}>
            Inicio
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/plataforma/mis-simuladores" onClick={onClose}>
            Mis Simuladores
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/plataforma/resultados" onClick={onClose}>
            Resultados
          </Link>
        </div>
        <div className={style["menu-item"]}>
          <Link href="/plataforma/monedas" onClick={onClose}>
            Comprar monedas
          </Link>
        </div>



        {/* <div className={style["menu-item"]}>
            <div className={style["menu-item-info"]} onClick={()=>{
            setmenu(!menu)
          }}>
          <Link href="#acerca" >
            Cuenta
          </Link>

          <Image className={`${menu?style["rotate"]:""}`} alt="icono de flecha"  src={"/course/arrow.png"} width={15} height={15}></Image>
            </div>
            
            <div className={`${style["content"]} ${menu? style["show"]:""}`}>
            <div className={style["menu-item"]}>
          <Link href="/curso/cuenta" onClick={onClose}>
            Informacion personal
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/curso/contrasena" onClick={onClose}>
            Contraseña
          </Link>
        </div>
          <div className={`${style['menu-item']} ${style["menu-item-border"]}`}>

          <Link href="/curso/anuncios" onClick={onClose}>
            Anuncios
          </Link>
        </div>


            </div>
        </div> */}

        
        <div className={style["menu-item"]}>
          <Link href="/curso/planes" onClick={onClose}>
            Cerrar sesion
          </Link>
        </div>


      </div>


      {/* <Link
        href="/curso/cuenta"
        onClick={onClose}
        className={style["whatsapp-div"]}
      >
        <p>Ir a mi cuenta</p>
      </Link> */}
    </div>
  );
};

export default CourseMobileMenu;