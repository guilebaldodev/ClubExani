import Image from "next/image";
import styles from "./css/Modal.module.css";

type UploadModalProps = {
  closeModal: () => void;
};

const UploadModal = ({ closeModal }: UploadModalProps) => {
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.add_modal}>
          <div className={styles.add_modal_title}>
            <div>
              <Image
                src="/admin/upload-icon.png"
                alt="category icon"
                width={25}
                height={25}
              />
              <h3>Añadir Imagen</h3>
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


          <div className={styles.upload}>
<div className={styles.upload_file}>
  <Image
    src={"/admin/upload-icon.png"}
    alt=""
    width={40}
    height={40}
  />
  <span>Click aqui para subir una imagen</span>
</div>

<div className={styles.upload_items}>


  <div className={styles.upload_item}>
    <div className={styles.upload_info}>
      <Image
        src={"/products/bulls/product-3.webp"}
        height={36}
        width={36}
        alt=""
      />
      <div className={styles.upload_info_texts}>
        <p className={styles.grey}>imagen.png</p>
        <p>97.KB</p>
      </div>
    </div>
    <Image
      src={"/admin/x.png"}
      height={15}
      width={15}
      alt="x"
    />
  </div>
</div>
</div>

            <div className={styles.input_duo}>
              <label htmlFor="">Link Generado</label>
              <input value={"http:www.linkgenerado.com"} readOnly className={styles.link_input} type="text" />
            </div>



            <div className={styles.form_buttons}>
              <button className={styles.red_button}>Borrar imagen</button>
              <button>Subir imagen</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadModal;