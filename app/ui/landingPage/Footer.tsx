import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-logotype">
            <Image src="/layout/white-logo.png" alt="Logo" width={32} height={32} />
            <h3>ClubExani</h3>
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
                <Link href="/planes">Planes</Link>
              </li>
              <li>
                <Link href="/politicas">Políticas</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Curso</h4>
            <ul>
              <li>
                <Link href="/lecciones">Lecciones</Link>
              </li>
              <li>
                <Link href="/simuladores">Simuladores</Link>
              </li>
              <li>
                <Link href="/cuestionarios">Cuestionarios</Link>
              </li>
              <li>
                <Link href="/mi-progreso">Mi progreso</Link>
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
            Copyright © 2024 ClubExani. Todos los derechos reservados.
          </p>
          <p>Web hecha con el ♥ por Solaria</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
