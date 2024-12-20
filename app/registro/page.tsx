import Image from 'next/image'
import styles from './auth.module.css'
import Link from 'next/link';
const RegisterPage = () => {
    return ( 
    <>
       <div className={styles['register-page-container']}>
      <div className={styles['register-page-titles']}>
        <Image src="/layout/black-logo.png" alt="" width={40} height={40} />
        <h2>Club<span className={styles['primary-color']}>Exani</span></h2>
      </div>

      <div className={styles['register-page-content']}>
        <div className={styles['register-info']}>
          <h3>Estudia con nosotros y asegura tu lugar en posgrado.</h3>
          <div className={styles['register-info-items']}>

            <div className={styles['item']}>
              <Image src="/landing/thin-check.png" alt="" width={24} height={24} />
              <p>Practica con simulacros de EXANI III diseñados específicamente para posgrado</p>
            </div>

            <div className={styles['item']}>
              <Image src="/landing/thin-check.png" alt="" width={24} height={24} />
              <p>Obtén análisis detallados de tu desempeño para mejorar en cada área clave.</p>
            </div>

            <div className={styles['item']}>
              <Image src="/landing/thin-check.png" alt="" width={24} height={24} />
              <p>Accede a lecciones creadas por expertos, para dominar cada tema necesario para el EXANI III.</p>
            </div>

            <div className={styles['item']}>
              <Image src="/landing/thin-check.png" alt="" width={24} height={24} />
              <p>Recibe planes de estudio personalizados que se adaptan a tu ritmo y necesidades específicas.</p>
            </div>

          </div>
        </div>

        <div className={styles['register-form']}>
          <h3>Registrate</h3>
          <form>

            <div className={styles['form-input-duo']}>
              <label htmlFor="">Nombre</label>
              <input type="text" />
            </div>

            <div className={styles['form-input-duo']}>
              <label htmlFor="">Apellidos</label>
              <input type="text" />
            </div>

            <div className={styles['form-input-duo']}>
              <label htmlFor="">Correo electronico</label>
              <input type="text" />
            </div>

            <div className={styles['form-input-duo']}>
              <label htmlFor="">Contraseña</label>
              <input type="password" />
            </div>

            <button>Registrarte</button>

            <div className={styles['register-to-login']}>
              <p>¿Ya tienes cuenta?</p><Link href="/login"> Inicia sesion</Link>
            </div>

          </form>
        </div>

      </div>
    </div>
    </> );
}
 
export default RegisterPage;