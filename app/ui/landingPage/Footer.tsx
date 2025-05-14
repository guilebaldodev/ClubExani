import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-logotype">
            <Image src="/layout/logo.png" alt="Logo" width={50} height={50} />
            <h3>Simulandum</h3>
          </div>

          <div className="footer-section">
            <h4>Nosotros</h4>
            <ul>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/testimonios">Testimonios</Link>
              </li>
              <li>
                <Link href="/creditos">Creditos</Link>
              </li>
              <li>
                <Link href="/politicas">Políticas</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Simuladores</h4>
            <ul>
  
              <li>
                <Link href="/simuladores">Exadiems</Link>
              </li>
              <li>
                <Link href="/cuestionarios">Exani iii</Link>
              </li>
              <li>
                <Link href="/mi-progreso">Todos</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Cuenta</h4>
            <ul>
              <li>
                <Link href="/login">Inicio de sesión</Link>
              </li>
              <li>
                <Link href="/registro">Registro</Link>
              </li>
              <li>
                <Link href="/perfil">Perfil</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-info">
          <p>
            Copyright © 2025 Simulandum. Todos los derechos reservados.
          </p>
          <p>Web hecha con el ♥ por Solaria</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
