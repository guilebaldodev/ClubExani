import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( <>
      <header className="header user-header">
        <div className="logotype">
          <Image src="/layout/black-logo.png" alt="Logo" width={32} height={32} />
          <h2>
            <span className="primary-color">Club</span>Exani
          </h2>
        </div>
        <div className="header-info">
          <nav className="navbar user-navbar">
            <Link href="/exani-iii">
              <Image src="/layout/home-icon2.png" alt="Inicio" width={20} height={20} />
              Inicio
            </Link>
            <Link href="/simuladores">
              <Image src="/layout/writing.svg" alt="Simuladores" width={20} height={20} />
              Simuladores
            </Link>
            <Link href="/lecciones">
              <Image src="/layout/open-book.png" alt="Lecciones" width={20} height={20} />
              Lecciones
            </Link>
            <Link href="/cuestionarios/metodologia-de-la-investigacion">
              <Image src="/layout/test-icon.png" alt="Cuestionarios" width={20} height={20} />
              Cuestionarios
            </Link>
            <Link href="/planes">
              <Image src="/layout/payment-icon.png" alt="Planes" width={20} height={20} />
              Planes
            </Link>
          </nav>

          <Link href="/perfil" className="navbar-button user-header-button">
            <Image src="/layout/user-icon.png" alt="Perfil" width={25} height={25} />
          </Link>
        </div>
      </header>
    </>);
}
 
export default Header;