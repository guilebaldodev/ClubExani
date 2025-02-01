import Link from "next/link";
import Image from "next/image";
import style from "./mobileNavbar.module.css"; 

const CourseMobileMenu = ({ onClose }) => {


  return (
    <div className={style["mobile-menu"]}>
      <div className={style["menu-header"]}>
        <div className={style["menu-header-left"]}>
          <Image
            src={"/layout/black-logo.png"}
            alt="justice icon"
            width={32}
            height={32}
          />
          <p className={style["menu-title"]}><span className="primary-color">Club</span>Exani</p>
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
          <Link href="/curso" onClick={onClose}>
            Inicio
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/curso/simuladores" onClick={onClose}>
            Simuladores
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/curso/lecciones" onClick={onClose}>
            Lecciones
          </Link>
        </div>
        <div className={style["menu-item"]}>
          <Link href="/curso/cuestionarios/metodologia-de-la-investigacion" onClick={onClose}>
            Cuestionarios
          </Link>
        </div>


        <div className={style["menu-item"]}>
          <Link href="/curso/planes" onClick={onClose}>
            Planes
          </Link>
        </div>

      </div>

      <Link
        href="/curso/cuenta"
        onClick={onClose}
        className={style["whatsapp-div"]}
      >
        <p>Ir a mi cuenta</p>
      </Link>
    </div>
  );
};

export default CourseMobileMenu;