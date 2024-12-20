import Link from "next/link";
import Image from "next/image";
import style from "./mobileNavbar.module.css"; 

const MobileMenu = ({ onClose }) => {


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
        {/* <div className={style["menu-item"]}>
          <div
            className={style["menu-item-info"]}
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <Link href="#acerca">Servicios</Link>

            <Image
              alt="arrow"
              className={`${style["arrow"]} ${menu ? style["rotate"] : ""}`}
              src={"/layout/arrow.png"}
              width={15}
              height={15}
            />
          </div>

          <div className={`${style["content"]} ${menu ? style["show"] : ""}`}>
            <div className={style["menu-item"]}>
              <Link href="/servicios/desarrollo-web" onClick={onClose}>
                Desarrollo Web
              </Link>
            </div>

            <div className={style["menu-item"]}>
              <Link href="/servicios/ecommerce" onClick={onClose}>
                Tienda en Línea
              </Link>
            </div>

            <div
              className={`${style["menu-item"]} ${style["menu-item-border"]}`}
            >
              <Link href="/servicios/software" onClick={onClose}>
                Software a la medida
              </Link>
            </div>
          </div>
        </div> */}

        <div className={style["menu-item"]}>
          <Link href="/planes" onClick={onClose}>
            Planes
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/testimonios" onClick={onClose}>
            Testimonios
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/nosotros" onClick={onClose}>
            Nosotros
          </Link>
        </div>
        <div className={style["menu-item"]}>
          <Link href="/contacto" onClick={onClose}>
            Contacto
          </Link>
        </div>
      </div>

      <Link
        href="/curso"
        className={style["whatsapp-div"]}
      >
        <p>Ir al curso</p>
      </Link>
    </div>
  );
};

export default MobileMenu;