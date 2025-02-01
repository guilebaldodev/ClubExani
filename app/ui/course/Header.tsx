'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'
import { useState } from "react";
import CourseMobileMenu from './CourseMobileNavbar'


const Header = () => {

    const [menu, setMenu] = useState(false);


    return ( <>


{
      menu && 
      <>
        <CourseMobileMenu onClose={()=>{
            setMenu(false)
        }}></CourseMobileMenu>
      </>
    }

   <header className={styles["header"] + " " + styles["user-header"]}>
    <Image onClick={()=>{
        setMenu(true)
    }} src="/layout/burger-menu.png" alt="Logo" width={32} height={32} />
    <div className={styles["logotype"]}>
    <Image src="/layout/black-logo.png" alt="Logo" width={32} height={32} />
        <h2>
            <Link href={"/curso"}>
                <span className={styles["primary-color"]}>Club</span>Exani
            </Link>
        </h2>
    </div>
    <div className={styles["header-info"]}>
        <nav className={styles["navbar"] + " " + styles["user-navbar"]}>
            <Link href="/curso">
                <Image src="/layout/home-icon2.png" alt="Inicio" width={20} height={20} />
                Inicio
            </Link>
            <Link href="/curso/simuladores">
                <Image src="/layout/writing.svg" alt="Simuladores" width={20} height={20} />
                Simuladores
            </Link>
            <Link href="/curso/lecciones">
                <Image src="/layout/open-book.png" alt="Lecciones" width={20} height={20} />
                Lecciones
            </Link>
            <Link href="/curso/cuestionarios/metodologia-de-la-investigacion">
                <Image src="/layout/test-icon.png" alt="Cuestionarios" width={20} height={20} />
                Cuestionarios
            </Link>
            <Link href="/curso/planes">
                <Image src="/layout/payment-icon.png" alt="Planes" width={20} height={20} />
                Planes
            </Link>
        </nav>

        <Link href="/curso/cuenta" className={styles["navbar-button"] + " " + styles["user-header-button"]}>
            <Image src="/layout/user-icon.png" alt="Perfil" width={25} height={25} />
        </Link>
    </div>
</header>


    </>);
}
 
export default Header;