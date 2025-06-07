'use client'

import { useState } from 'react'
// import { useState } from 'react'
// import AnswerSheet from '../../components/AnswerSheet'
import styles from './simulator.module.css'
import AnswerSheet from '@/app/ui/course/AnswerSheet'
import Image from 'next/image'

const Simulator = () => {
  const [SideBar, setSideBar] = useState(false)

  return (
    <>
        {/* <UserHeader></UserHeader> */}
        <div className={styles['simulator-container']}>
          <div className={styles['simulator']}>
            <div className={styles['simulator-titles']}>
              <div className={styles['simulator-header']}>
                <h3>Examen diagnóstico</h3>
                <div>
                    <Image
                    src={"/course/stopwatch.png"}
                    alt='stopwatch icon'
                    height={25}
                    width={30}
                    ></Image>
                  04:06:15
                </div>
              </div>

              <div className={styles['simulator-info']}>
                <p>Reactivos pendientes: 1</p>
                <button
                  onClick={() => {
                    console.log(SideBar)
                    setSideBar(!SideBar)
                  }}
                >
                  Preguntas
                </button>
              </div>
            </div>

            <div className={styles['simulator-question']}>
              <h4>Pregunta 20</h4>
              <div className={styles['simulator-content']}>
                <p>
                  ¿Qué técnica de recolección de datos se utilizó en la
                  siguiente investigación? En México, según datos demográficos,
                  cada año se incrementa la tasa de embarazo en jóvenes de entre
                  12 y 15 años. Esta investigación, con representatividad
                  nacional, tiene como objetivo explicar las tendencias y causas
                  de este fenómeno, ofreciendo un diagnóstico más certero como
                  insumo para el diseño de políticas públicas de prevención del
                  embarazo adolescente. Se considerarán diversos factores, como
                  edad, escolaridad, nivel socioeconómico y características del
                  entorno familiar, para determinar cómo influyen los aspectos
                  biológicos, sociales y educativos, mediante el análisis de
                  diversos procesos estadísticos, como los modelos de regresión
                  logística.
                </p>
              </div>
            </div>

            <div className={styles['simulator-answers']}>
              <div className={`${styles['simulator-answer']} ${styles['selected']}`}>
                <div className={styles['simulator-answer-option']}>A</div>
                <div className={styles['simulator-answer-content']}>
                  <p>Casos extremos</p>
                </div>
              </div>

              <div className={styles['simulator-answer']}>
                <div className={styles['simulator-answer-option']}>B</div>
                <div className={styles['simulator-answer-content']}>
                  <p>Por conveniencia</p>
                </div>
              </div>

              <div className={styles['simulator-answer']}>
                <div className={styles['simulator-answer-option']}>C</div>
                <div className={styles['simulator-answer-content']}>
                  <p>Variación máxima</p>
                </div>
              </div>
            </div>

            <div className={styles['simulator-buttons']}>
              <button
                // onClick={() => {
                //   // Lógica para terminar
                // }}
              >
                Terminar
              </button>
              <button
                // onClick={() => {
                //   router.push('/simulador/2')
                // }}
              >
                Siguiente
                <img src="/icons/lesson/next-icon.png" alt="" />
              </button>
            </div>
          </div>
            

            {SideBar &&
          <AnswerSheet
            closeSideBar={() => {
              setSideBar(false)
            }}
          ></AnswerSheet>
            }
        </div>
    </>
  )
}

export default Simulator
