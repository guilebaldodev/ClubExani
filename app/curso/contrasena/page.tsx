import ProfileSideBar from '@/app/ui/course/ProfileSideBar';
import styles from '../cuenta/cuenta.module.css';

const PasswordPage = () => {
  return (

      <div className={styles['profile-page-container']}>
        <ProfileSideBar />

        <div className={styles['profile-content-container']}>
          <div className={styles['profile-content']}>
            <div className={styles['profile-password-form']}>
              <div className={styles['profile-password-titles']}>
                <h3>Contraseña</h3>
                <p>Modifica tu contraseña actual</p>
              </div>

              <div className={styles['pt-16']}>
                <div className={styles['profile-form-duo']}>
                  <label htmlFor="current-password">Contraseña actual</label>
                  <input type="password" id="current-password" />
                </div>

                <div className={styles['profile-form-duo']}>
                  <label htmlFor="new-password">Nueva contraseña</label>
                  <input type="password" id="new-password" />
                </div>

                <div className={styles['profile-form-duo']}>
                  <label htmlFor="confirm-password">Confirma tu nueva contraseña</label>
                  <input type="password" id="confirm-password" />
                </div>
              </div>

              <div className={styles['profile-button']}>
                <button>Guardar contraseña</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PasswordPage;
