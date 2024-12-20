import Image from "next/image";
import styles from "./simulators.module.css";
import Link from "next/link";
import { simulators } from "@/consts";

const ExamSimulators = () => {
  return (
    <>
        <div className={styles['exam-simulator-container']}>
          <div className={styles['titles']}>
            <h2>Simuladores</h2>
          </div>

          <div className={styles['simulators-container']}>
            
            {simulators && simulators.map((item,index)=>(
                <div key={index} className={styles['item']}>
              <div className={styles['exam-item-img']}>
                <Image 
                  src={item.img} 
                  alt={item.title}
                  width={500} 
                  height={300}
                  priority
                />
                {/* <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Examen
                      <br />
                      Diagnostico
                    </h2>
                  </div>
                </div> */}
              </div>
              <div className={styles['item-info']}>
                <h4>{item.title}</h4>

                <div className={styles['item-info-icons']}>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/time-icon-black.png" 
                        alt="Icono de tiempo" 
                        width={30} 
                        height={30}
                      />
                    </div>
                    <p>{item.time}</p>
                  </div>
                  <div className={styles['item-duo']}>
                    <div className={styles['item-image-container']}>
                      <Image 
                        src="/course/question-icon-black.png" 
                        alt="Icono de preguntas" 
                        width={24} 
                        height={24}
                      />
                    </div>
                    <p>{item.questions}</p>
                  </div>
                </div>
              </div>

              <div className={styles['item-button']}>
                <Link href={"/curso/simulador"}>Empezar examen</Link>
              </div>
            </div>

            ))}
            
                       
          </div>
        </div>
    </>
  );
};

export default ExamSimulators;
