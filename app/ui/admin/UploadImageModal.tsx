import Image from "next/image";
import styles from "./css/Modal.module.css";
import Select from "react-select";


type CategoryModalProps = {
  closeModal: () => void;
};

const CategoryModal = ({ closeModal }: CategoryModalProps) => {
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.add_modal}>
          <div className={styles.add_modal_title}>
            <div>
              <Image
                src="/layout/admin/category.png"
                alt="category icon"
                width={25}
                height={25}
              />
              <h3>Añadir Tema</h3>
            </div>
            <Image
            className={styles.add_modal_x}
              onClick={() => {
                closeModal();
              }}
              alt="x icon"
              width={20}
              height={20}
              src="/admin/x.png"
            />
          </div>

          <form className={styles.add_modal_form}>
            <div className={styles.input_duo}>
              <label htmlFor="">Nombre de la categoria</label>
              <input type="text" placeholder="Ingrese el nombre" name="" id="" />
            </div>

            <div className={styles.input_duo}>
              <label htmlFor="">Area del tema</label>
              <Select
                      placeholder="Selecciona el area"
                    ></Select>

            </div>



            <div className={styles.form_buttons}>
              <button className={styles.red_button}>Cancelar</button>
              <button>Crear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;