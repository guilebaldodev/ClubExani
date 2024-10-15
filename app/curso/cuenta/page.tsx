import ProfileSideBar from "@/app/ui/course/ProfileSideBar";
import styles from './cuenta.module.css'
import Image from "next/image";

const Profile = () => {
    return ( 
    <>
            <div className={styles['profile-page-container']}>
            <ProfileSideBar />

            <div className={styles['profile-content-container']}>
                <div className={styles['profile-content']}>
                    <div className={styles['profile-page-title']}>
                        <h3>Mi perfil</h3>
                        <p>
                            En la página de perfil, los usuarios pueden gestionar su información personal y ajustar preferencias según sus necesidades dentro de la plataforma.
                        </p>
                    </div>

                    <div className={styles['profile-credentials']}>
                        <div className={styles['circle-div']}>
                            <Image  src="/layout/user-icon.png"  alt="Perfil" width={65} height={65} />

                        </div>

                        <div className={styles['credentials-text']}>
                            <h2>Guilebaldo Vargas Solís</h2>
                            <p>Aspirante a posgrado en México</p>
                            <p>Universidad Autónoma de Guerrero</p>
                        </div>
                    </div>

                    <div className={styles['profile-form']}>
                        <h3 className={styles['profile-form-subtitle']}>
                            Información general
                        </h3>

                        <div className={styles['profile-double-input']}>
                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" />
                            </div>

                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" id="apellidos" />
                            </div>
                        </div>

                        <div className={styles['profile-form-duo']}>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text" id="email" />
                        </div>

                        <div className={styles['profile-form-duo']}>
                            <label htmlFor="sexo">Sexo</label>
                            <input type="text" id="sexo" />
                        </div>

                        <div className={styles['profile-double-input']}>
                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="profesion">Profesión</label>
                                <input type="text" id="profesion" />
                            </div>

                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="posgrado">Posgrado aspirado</label>
                                <input type="text" id="posgrado" />
                            </div>
                        </div>

                        <div className={styles['profile-double-input']}>
                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="nacimiento">Fecha de nacimiento</label>
                                <input type="text" id="nacimiento" />
                            </div>

                            <div className={styles['profile-form-duo']}>
                                <label htmlFor="celular">Celular</label>
                                <input type="text" id="celular" />
                            </div>
                        </div>
                    </div>

                    <div className={styles['profile-button']}>
                        <button>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>Información general



    </> );
}
 
export default Profile;