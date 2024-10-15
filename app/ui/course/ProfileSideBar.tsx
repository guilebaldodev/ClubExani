import Link from 'next/link';
import styles from './profileSideBar.module.css';

const ProfileSideBar = () => {
    return (
        <>
            <div className={styles['profile-sidebar']}>
                <h4>Cuenta</h4>

                <Link href="/curso/cuenta" className={`${styles['profile-sidebar-item']} ${styles['bb-none']} ${styles['profile-item-selected']}`}>
                    <p>Informacion Personal</p>
                </Link>

                <Link href="/curso/contrasena" className={`${styles['profile-sidebar-item']} ${styles['bb-none']}`}>
                    <p>Contraseña</p>
                </Link>

                <Link href="/curso/anuncios" className={styles['profile-sidebar-item']}>
                    <p>Anuncios</p>
                </Link>
            </div>
        </>
    );
}

export default ProfileSideBar;