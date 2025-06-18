import Image from 'next/image';
import style from './contacto.module.css'
import Header from '../ui/landingPage/LandingHeader';
import Footer from '../ui/landingPage/Footer';
import ContactForm from '../ui/landingPage/ContactForm';

const Contacto = () => {
    return ( <>
    <Header></Header>
      <div className={style['contact-page-container']}>
            
            <div className={style['contact-titles']}>
                <h2>Contáctanos</h2>
                <p>Tu preparación es nuestra prioridad. Estamos disponibles para atender tus consultas.</p>
            </div>

            <div className={style['contact-info']}>
                <div className={style['contact-text']}>
                    
                    <div className={style["contact-text-subtitle"]}>
                    <h4>Simulandum</h4>
                    <p>
                        Una plataforma comprometida con ayudarte a aprobar tus examenes de admision. Responderemos tus consultas en menos de 24 horas para garantizar que estés siempre informado.
                    </p>

                    </div>
                    
   
                    <div className={style['contact-text-items']}>
    <div className={style['contact-text-item']}>
        <Image src="/landing/time.png" alt="Horario" width={26} height={26} />
        <p>
            Lunes a viernes de 10am a 5pm
        </p>
    </div>

    <div className={style['contact-text-item']}>
        <Image src="/landing/whatsapp-icon.png" alt="WhatsApp" width={26} height={26} />
        <p>
            +52 7445329953
        </p>
    </div>

    {/* <div className={style['contact-text-item']}>
        <Image src="/landing/email.png" alt="Correo electrónico" width={26} height={26} />
        <p>
            sporte@clubexani.com
        </p>
    </div> */}

    <div className={style['contact-text-item']}>
        <Image src="/landing/location.png" alt="Ubicación" width={26} height={26} />
        <p>
            Guerrero, México
        </p>
    </div>
</div>


                </div>

            <ContactForm></ContactForm>
            </div>
        </div>
        <Footer></Footer>
    </> );
}
 
export default Contacto;