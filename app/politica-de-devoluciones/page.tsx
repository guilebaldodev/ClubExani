import Footer from "../ui/landingPage/Footer";
import Header from "../ui/landingPage/LandingHeader";
import styles from "../politica-de-privacidad/politics.module.css"


const ReturnsPolicyPage = () => {
  return (
    <>
      <Header />
      <div className={styles["terms-page-container"]}>
        <h2>POLÍTICA DE DEVOLUCIONES</h2>

        <div>
        <h3>INFORMACIÓN GENERAL</h3>
        <p>
          Esta política establece las condiciones bajo las cuales se gestionan las solicitudes de devolución en Simulandum. Al adquirir monedas virtuales o cualquier servicio en la plataforma, aceptas los términos aquí descritos.
        </p>
        </div>

        <div>
        <h3>SECCIÓN 1 – NATURALEZA DE LOS PRODUCTOS</h3>
        <p>
          Simulandum comercializa productos digitales no tangibles que se entregan de forma inmediata: paquetes de monedas virtuales y acceso a simuladores educativos. Una vez completada la compra, los productos se acreditan automáticamente en la cuenta del usuario.
        </p>
        </div>
          
        <div>

        <h3>SECCIÓN 2 – NO SE ACEPTAN DEVOLUCIONES</h3>
        <p>
          Dado que el contenido y las monedas se habilitan de manera instantánea tras la compra, <strong>no realizamos devoluciones ni reembolsos</strong> por compras completadas, salvo excepciones descritas en la siguiente sección.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 3 – ERRORES O TRANSACCIONES INVOLUNTARIAS</h3>
        <p>
          En caso de cobros duplicados, fallas técnicas o errores del sistema, el usuario podrá comunicarse con soporte dentro de los <strong>primeros 3 días naturales</strong> desde la transacción. Simulandum evaluará el caso y, de ser procedente, podrá realizar un ajuste del saldo en monedas. No se garantiza el reembolso en dinero bajo ningún motivo.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 4 – DERECHOS RESERVADOS</h3>
        <p>
          Simulandum se reserva el derecho de modificar esta política en cualquier momento. Los cambios se harán efectivos una vez publicados en esta misma página.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 5 – CONTACTO</h3>
        <p>
          Para cualquier duda sobre esta política, puedes comunicarte con nosotros al correo de soporte proporcionado en la plataforma.
        </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnsPolicyPage;
