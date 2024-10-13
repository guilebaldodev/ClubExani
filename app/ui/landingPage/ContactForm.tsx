import style from './contactForm.module.css'


export const ContactForm = () => {
    return ( <>
    
    <form className={style['contact-form']}>
                    
                    <div className={style['double-input']}>
                    <div className={style['input-duo']}>
                        <label>Nombre*</label>
                        <input type="text" />
                    </div>
                    <div className={style['input-duo']}>
                        <label>Apellidos*</label>
                        <input type="text" />
                    </div>

                    </div>

                    <div className={style['double-input']}>

                    <div className={style['input-duo']}>
                        <label>Correo electrónico*</label>
                        <input type="text" />
                    </div>

                    <div className={style['input-duo']}>
                        <label>Teléfono*</label>
                        <input type="text" />
                    </div>
                    </div>

                    <div className={`${style['input-duo']} ${style['full-input']}`}>
                    <label>¿Cómo podemos ayudarte?*</label>
                    <textarea></textarea>
                    </div>

                    <div className={style['input-check']}>
                        <input type="checkbox" />
                        <label>
                        Al hacer click confirmas que has leído y aceptas nuestras Políticas de Privacidad.
                        </label>
                    </div>

                    <div className={style['contact-button']}>
                        <button>Enviar</button>
                    </div>

                </form>
    </> );
}
 
export default ContactForm;