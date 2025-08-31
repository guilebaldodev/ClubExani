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
            <h4>Plataforma</h4>
            <ul>
              <li>
                <Link href="/plataforma">Inicio</Link>
              </li>
              <li>
                <Link href="/plataforma/mis-simuladores">Mis Simuladores</Link>
              </li>
              <li>
                <Link href="/plataforma/resultados">Resultados</Link>
              </li>
                    <li>
                <Link href="/plataforma/monedas">Monedas</Link>
              </li>
            </ul>
          </div>


          <div className="footer-section">
            <h4>Nosotros</h4>
            <ul>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
    
   

              <li>
                <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
              </li>

              <li>
                <Link href="/politica-de-privacidad">Políticas de privacidad</Link>
              </li>

              <li>
                <Link href="/politica-de-devoluciones">Políticas de devolucion</Link>
              </li>

            </ul>
          </div>



          <div className="footer-section">
            <h4>Simuladores</h4>
            <ul>
              <li>
                <Link href="/mi-progreso">Todos</Link>
              </li>
            </ul>
          </div>



        </div>

        <div className="footer-info">
          <p>
            Copyright © 2025 Simulandum. Todos los derechos reservados.
          </p>

          <p>Web hecha con el ♥ por <a target='_blank' href="https://solariasoftware.com">Solaria</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
