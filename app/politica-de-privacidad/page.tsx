import Footer from "../ui/landingPage/Footer";
import Header from "../ui/landingPage/LandingHeader";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="terms-page-container">
        <h2>POLÍTICA DE PRIVACIDAD</h2>

        <div>
        <h3>INFORMACIÓN GENERAL</h3>
        <p>
          En Simulandum valoramos profundamente tu privacidad y la protección de tus datos personales. Esta Política de Privacidad describe qué tipo de información recopilamos, cómo la utilizamos y cuáles son tus derechos como usuario. Al usar nuestra plataforma, aceptas las prácticas descritas en este documento.
        </p>
        </div>


        <div>
        <h3>SECCIÓN 1 – INFORMACIÓN QUE RECOPILAMOS</h3>
        <p>
          Al registrarte y utilizar Simulandum, recopilamos información que puede incluir:
        </p>
        <ul>
          <li>Tu nombre y correo electrónico, a través de nuestro proveedor de autenticación Clerk.</li>
          <li>Tu historial de uso en la plataforma: simuladores consultados, progreso académico, calificaciones y tiempos de práctica.</li>
          <li>Información de pago procesada por Stripe (nosotros no almacenamos los datos de tu tarjeta directamente).</li>
        </ul>
        </div>

        <div>

        <h3>SECCIÓN 2 – USO DE LA INFORMACIÓN</h3>
        <p>
          Utilizamos la información recopilada para brindarte una mejor experiencia en Simulandum. Esto incluye:
        </p>
        <ul>
          <li>Administrar tu cuenta y tu acceso a la plataforma.</li>
          <li>Personalizar tus recomendaciones y rutas de estudio.</li>
          <li>Analizar el rendimiento académico para ofrecerte simuladores adecuados a tu nivel.</li>
          <li>Emitir comprobantes de pago y validar compras de monedas.</li>
          <li>Mejorar nuestros contenidos, servicios y funcionalidades.</li>
        </ul>
        </div>


        <div>

        <h3>SECCIÓN 3 – COMPARTICIÓN DE DATOS CON TERCEROS</h3>
        <p>
          En Simulandum no vendemos ni alquilamos tus datos personales. Sin embargo, compartimos cierta información con servicios externos de confianza que nos ayudan a operar la plataforma:
        </p>
        <ul>
          <li><strong>Clerk:</strong> para la autenticación y gestión de usuarios.</li>
          <li><strong>Stripe:</strong> para procesar pagos de manera segura.</li>
          <li><strong>Google Analytics:</strong> para entender el uso del sitio y mejorar la experiencia.</li>
        </ul>
        <br />
        <p>
          Todos estos servicios cumplen con altos estándares de seguridad y privacidad.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 4 – DERECHOS DEL USUARIO</h3>
        <p>
          Como usuario de Simulandum, tienes derecho a:
        </p>
        <ul>
          <li>Solicitar una copia de los datos personales que almacenamos sobre ti.</li>
          <li>Corregir o actualizar tu información en caso de errores.</li>
          <li>Solicitar la eliminación de tu cuenta y tus datos personales (salvo los necesarios para fines legales o fiscales).</li>
        </ul>
        <br />
        <p>
          Para  ejercer cualquiera de estos derechos, contáctanos desde el correo con el que estás registrado.
        </p>

        </div>
        
        <div>
        <h3>SECCIÓN 5 – SEGURIDAD DE LA INFORMACIÓN</h3>
        <p>
          Implementamos medidas técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdida o alteración. Nuestro sitio cuenta con conexión cifrada (HTTPS) y utilizamos proveedores de confianza para el manejo de datos críticos.
        </p>
        </div>

        <div>
        <h3>SECCIÓN 6 – MENORES DE EDAD</h3>
        <p>
          Simulandum está diseñado principalmente para personas mayores de edad o estudiantes con supervisión de un adulto. Si tienes menos de 18 años, recomendamos utilizar la plataforma con el consentimiento y acompañamiento de un padre, madre o tutor.
        </p>
        </div>

        <div>
        <h3>SECCIÓN 7 – CAMBIOS EN ESTA POLÍTICA</h3>
        <p>
          Esta Política de Privacidad puede ser modificada en cualquier momento. Te notificaremos a través de la plataforma o correo electrónico cuando se realicen cambios significativos. Te recomendamos revisar esta página periódicamente para mantenerte informado.
        </p>
        </div>

        <div>

        <h3>SECCIÓN 8 – CONTACTO</h3>
        <p>
          Si tienes dudas, sugerencias o deseas ejercer tus derechos sobre tus datos personales, puedes escribirnos al correo oficial que aparece en nuestro sitio web.
        </p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
