import style from "./css/loaderScreen.module.css";

const LoaderScreen = () => {
  return (
    <>
      <div className={style["overlay-loader"]}>
        <div className={style["loader"]}></div>
        <p>Cargando.....</p>
      </div>
    </>
  );
};

export default LoaderScreen;
