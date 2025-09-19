"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import CourseMobileMenu from "./CourseMobileNavbar";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useUserStore } from "@/stores/userStore";
import UserIcon from "../shared/UserIcon";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const {monedas} =useUserStore()


  return (
    <>
      {menu && (
        <>
          <CourseMobileMenu
            onClose={() => {
              setMenu(false);
            }}
          ></CourseMobileMenu>
        </>
      )}

        <header className={styles["header"] + " " + styles["user-header"]}>
          
          <div className={styles["header-logotype"]}>

          <Image
            onClick={() => {
              setMenu(true);
            }}
            src="/layout/burger-menu.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <div className={styles["logotype"]}>
            <Image src="/layout/logo.png" alt="Logo" width={40} height={40} />
            <h2>
              <Link href={"/plataforma"}>
                <span className={styles["primary-color"]}>Simu</span>landum
              </Link>
            </h2>
          </div>

          </div>



          <div className={styles["header-info"]}>
            <nav className={styles["navbar"] + " " + styles["user-navbar"]}>
              <Link href="/plataforma">
                <Image
                  src="/layout/home-icon2.png"
                  alt="Inicio"
                  width={20}
                  height={20}
                />
                Inicio
              </Link>
              <Link href="/plataforma/mis-simuladores">
                <Image
                  src="/layout/writing.svg"
                  alt="Mis Simuladores"
                  width={20}
                  height={20}
                />
                Mis Simuladores
              </Link>
              <Link href="/plataforma/resultados">
                <Image
                  src="/layout/test-icon.png"
                  alt="Resultados"
                  width={20}
                  height={20}
                />
                Resultados
              </Link>
              <Link href="/plataforma/monedas">
                <Image
                  src="/layout/black-coins.png"
                  alt="Cuestionarios"
                  width={20}
                  height={20}
                />
                Comprar Monedas
              </Link>
            </nav>
            <div className={styles["user-info"]}>
              
              <div className={styles["div-coins"]}>
                <Image
                  src={"/layout/yellow-coins.png"}
                  alt="coins"
                  width={25}
                  height={25}
                ></Image>
                <p>x {monedas}</p>
              </div>

              {/*  */}

              <SignedOut>
                <SignInButton mode="modal">
                  <button className="login-button">Iniciar sesion</button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                {/* <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "38px",
                        marginRight: "1rem",
                        height: "38px",
                      },
                    },
                  }}
                ></UserButton> */}
                <UserIcon></UserIcon>
              </SignedIn>

              {/*  */}
              {/* <Link href="/curso/cuenta" className={styles["navbar-button"] + " " + styles["user-header-button"]}>
            <Image src="/layout/user-icon.png" alt="Perfil" width={25} height={25} />
            </Link> */}
            </div>
          </div>
        </header>

    </>
  );
};

export default Header;
