import Image from 'next/image';
import styles from './lessons.module.css'
import Link from 'next/link';
import ProgressBarItem from '@/app/ui/course/ProgressBar';
const LessonsPage = () => {
    return ( <>
        <div className={styles['lessons-page-container']}>
          <div className={styles['titles']}>
            <h2>Lecciones</h2>
          </div>

          <div className={styles['lessons-container']}>
            <div className={styles['lesson-item']}>
              <div className={styles['item-img']}>
                <Image
                  src="/course/mathematics.jpg"
                  alt="Metodología de la investigación"
                  width={500} 
                  height={300}
/>
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Metodología
                      <br />
                      de la
                      <br />
                      investigación
                    </h2>
                  </div>
                </div>
              </div>

              <div className={styles['lesson-item-content']}>
                <p>15/30 Lecciones</p>
                <div className={styles['lesson-item-progress']}>

                <ProgressBarItem isLabelVisible={false} porcentage={60} color='#0056D2'></ProgressBarItem>


                  <Link  className={styles['lesson-play-container']} href="/curso/lecciones/paradigmas-de-investigacion">
                      <Image
                        src="/course/play-icon.png"
                        alt="Play icon"
                        width={17}
                        height={17}
                      />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles['lesson-item']}>
              <div className={styles['item-img']}>
              <Image
                  src="/course/mathematics.jpg"
                  alt="Metodología de la investigación"
                  width={500} 
                  height={300}
/>
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Pensamiento
                      <br />
                      matemático
                    </h2>
                  </div>
                </div>
              </div>

              <div className={styles['lesson-item-content']}>
                <p>22/30 Lecciones</p>
                <div className={styles['lesson-item-progress']}>
                <ProgressBarItem isLabelVisible={false} porcentage={60} color='#0056D2'></ProgressBarItem>


                  <Link className={styles['lesson-play-container']} href="#">
                      <Image
                        src="/course/play-icon.png"
                        alt="Play icon"
                        width={17}
                        height={17}
                      />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles['lesson-item']}>
              <div className={styles['item-img']}>
              <Image
                  src="/course/mathematics.jpg"
                  alt="Metodología de la investigación"
                  width={500} 
                  height={300}
/>
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Redaccion
                      <br />
                      Indirecta
                    </h2>
                  </div>
                </div>
              </div>

              <div className={styles['lesson-item-content']}>
                <p>30/30 Lecciones</p>
                <div className={styles['lesson-item-progress']}>


                <ProgressBarItem isLabelVisible={false} porcentage={60} color='#0056D2'></ProgressBarItem>

                  <Link className={styles['lesson-play-container']} href="#">
                      <Image
                        src="/course/play-icon.png"
                        alt="Play icon"
                        width={17}
                        height={17}
                      />
                  </Link>
                </div>
              </div>
            </div>


            <div className={styles['lesson-item']}>
              <div className={styles['item-img']}>
              <Image
                  src="/course/mathematics.jpg"
                  alt="Metodología de la investigación"
                  width={500} 
                  height={300}
/>
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>
                    <h2>
                      Comprensión
                      <br />
                      lectora
                    </h2>
                  </div>
                </div>
              </div>

              <div className={styles['lesson-item-content']}>
                <p>30/30 Lecciones</p>
                <div className={styles['lesson-item-progress']}>

                <ProgressBarItem isLabelVisible={false} porcentage={60} color='#0056D2'></ProgressBarItem>

                  <Link className={styles['lesson-play-container']} href="#">
                      <Image
                        src="/course/play-icon.png"
                        alt="Play icon"
                        width={17}
                        height={17}
                      />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
     );
}
 
export default LessonsPage;