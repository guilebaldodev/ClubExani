import Image from 'next/image'
import styles from './auth.module.css'
import Link from 'next/link';
const LoginPage = () => {
    return ( 
    <>
        <div className={styles['register-page-container']}>
      <div className={`${styles['register-page-titles']} ${styles['login-titles']}`}>
       <Image src={"/layout/black-logo.png"} width={40} height={40} alt='logo' ></Image>
        <h2>Club<span className={styles['primary-color']}>Exani</span></h2>
      </div>

      <div className={styles['register-page-content']}>

        <div className={styles['register-form']}>
          <h3>Inicia sesion</h3>
          <form>

            <div className={`${styles['form-input-duo']} ${styles['duo-login']}`}>
              <label htmlFor="">Correo electronico</label>
              <input type="text" />
            </div>

            <div className={`${styles['form-input-duo']} ${styles['duo-login']}`}>
              <label htmlFor="">Contraseña</label>
              <input type="password" />
            </div>

            <button>Registrarte</button>

            <div className={styles['register-to-login']}>
              <p>¿No tienes cuenta?</p><Link href="/registro"> Registrate</Link>
            </div>

            <div className={styles['forgot-password']}>
              <a href="">Olvide mi contraseña</a>
            </div>
          </form>
        </div>

      </div>
    </div>
    </> );
}
 
export default LoginPage;