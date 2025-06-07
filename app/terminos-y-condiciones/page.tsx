import Footer from "../ui/landingPage/Footer";
import Header from "../ui/landingPage/LandingHeader";

const TermsPage = () => {
  return (
    <>
      <Header></Header>
      <div className="terms-page-container">
        
        <div>

        <h2>TÉRMINOS Y CONDICIONES</h2>
        <h3>INFORMACIÓN GENERAL</h3>
        <p>
          Bienvenido a Simulandum. Este sitio web y plataforma educativa digital
          es operado por el equipo de Simulandum. Al utilizar nuestros
          servicios, acceder a nuestros contenidos o realizar una compra,
          aceptas los términos y condiciones aquí descritos. Estos Términos de
          Servicio (“Términos”) rigen tu uso de nuestra página web, simuladores,
          herramientas y recursos relacionados. Simulandum se reserva el derecho
          de actualizar, cambiar o reemplazar cualquier parte de estos Términos
          mediante la publicación de actualizaciones en el sitio web. Es
          responsabilidad del usuario revisar esta página periódicamente.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 1 – USO DE LA PLATAFORMA</h3>
        <p>
          Al usar Simulandum, declaras que tienes al menos 18 años o cuentas con
          el consentimiento de tus padres o tutores para hacerlo. Te comprometes
          a usar la plataforma únicamente con fines educativos y de acuerdo con
          las leyes aplicables.
          <br />
          No está permitido:
        </p>
          <ul>
            <li>Compartir tu cuenta con otras personas</li>
            <li>
              Usar bots u otros métodos automatizados para acceder al contenido
            </li>
            <li>
              Reproducir, distribuir o comercializar los materiales de
              Simulandum sin autorización
            </li>
          </ul>
          <br />
          <p>
          Nos reservamos el derecho de suspender o cancelar cuentas por mal uso
          de la plataforma.
          </p>
        </div>

        <div>

        <h3>SECCIÓN 2 – COMPRAS Y MONEDAS VIRTUALES</h3>
        <p>
          Simulandum funciona mediante un sistema de monedas virtuales. Puedes
          adquirir paquetes de monedas a través de nuestro sistema de pago
          seguro. Las monedas te permiten acceder a simuladores y contenidos
          exclusivos. Al comprar monedas, aceptas que no son reembolsables (ver
          <a href="/politica-de-devoluciones"> Política de devoluciones</a>) y que su uso es exclusivo dentro del
          ecosistema de Simulandum. Nos reservamos el derecho de cambiar
          precios, modificar los beneficios de cada recarga o ajustar la
          economía de monedas en función de mejoras del servicio.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 3 – ACCESO Y DISPONIBILIDAD</h3>
        <p>
          Simulandum realiza esfuerzos razonables para garantizar el acceso
          continuo a su plataforma. Sin embargo, no se garantiza que el sitio
          esté libre de interrupciones, errores técnicos o mantenimientos. En
          caso de interrupciones por causas de fuerza mayor, no nos hacemos
          responsables por pérdidas o perjuicios derivados del tiempo fuera de
          servicio.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 4 – PROPIEDAD INTELECTUAL</h3>
        <p>
          Todos los contenidos, marcas, textos, gráficos, interfaces y códigos
          fuente de Simulandum son propiedad intelectual del equipo de
          Simulandum y están protegidos por las leyes correspondientes. No se
          permite su reproducción sin autorización previa por escrito.{" "}
        </p>
        </div>

        <div>

        <h3>SECCIÓN 5 – RESPONSABILIDAD</h3>
        <p>
          Simulandum proporciona recursos educativos basados en simuladores de
          examen, pero no garantiza resultados académicos o de admisión. El uso
          de nuestros servicios es bajo tu propio riesgo. No somos responsables
          por decisiones tomadas en base al contenido, ni por resultados
          obtenidos en procesos de selección académica.
        </p>
        </div>


        <div>

        <h3>SECCIÓN 6 – DATOS PERSONALES</h3>
        <p>
          El uso de datos personales se rige por nuestra <a href="/politica-de-privacidad"> Política de Privacidad</a>.
          Al usar Simulandum, aceptas que almacenemos y procesemos la
          información necesaria para la funcionalidad de la plataforma,
          incluyendo tu correo electrónico, historial de simuladores y progreso
          académico.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 7 – TERMINACIÓN DEL SERVICIO</h3>
        <p>
          Podemos suspender temporal o definitivamente tu acceso a Simulandum si
          consideramos que has incumplido los Términos aquí establecidos o si se
          detectan usos indebidos del sistema.{" "}
        </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default TermsPage;
