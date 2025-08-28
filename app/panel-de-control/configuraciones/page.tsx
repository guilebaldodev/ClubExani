"use client"
import Image from 'next/image';
import styles from "@/app/plataforma/simulador/simulator.module.css"
import Select from 'react-select';
import { useState } from 'react';
import { QUESTION_TEMPLATES } from '@/consts/questions_templates';


const Page = () => {

    
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

  const template = QUESTION_TEMPLATES.find(t => t.id === selectedTemplateId);

    return ( 
    <>
        <div className={styles["white-background"]}>

        <div className="admin-question-container">
          <div className="admin-question-title">
            <h2>Lista de configuraciones</h2>

            <div style={{ maxWidth: "300px", marginBottom: "1rem" }}>
          <Select
            placeholder="Selecciona una plantilla"
            options={QUESTION_TEMPLATES.map(t => ({
              value: t.id,
              label: t.label
            }))}
            isClearable
            onChange={(op) => setSelectedTemplateId(op?.value || null)}
          />
        </div>

          </div>
        
  
        
        {template && (
          <div className={styles['simulator-container']}>
            <div className={styles['simulator']}>
              <div className={styles['simulator-titles']}>
                <div className={styles['simulator-header']}>
                  <h3>{template.label}</h3>
                  <div>
                    <Image
                      src={"/course/stopwatch.png"}
                      alt='stopwatch icon'
                      height={25}
                      width={30}
                    />
                    04:06:15
                  </div>
                </div>

                <div className={styles['simulator-info']}>
                  <p>Ejemplo de plantilla</p>
                </div>
              </div>

              <div className={styles['simulator-question']}>
                <h4>Pregunta de ejemplo</h4>
                <div
                  className={styles['simulator-content']}
                  dangerouslySetInnerHTML={{ __html: template.filled.questionHTML }}
                />
              </div>

              <div className={styles['simulator-answers']}>
                {['A', 'B', 'C', 'D'].map((letter, index) => (
                  <div className={styles['simulator-answer']} key={index}>
                    <div className={styles['simulator-answer-option']}>{letter}</div>
                    <div
                      className={styles['simulator-answer-content']}
                      dangerouslySetInnerHTML={{ __html: template.filled.answerHTML }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    
   
        </div>

        </div>

    </> );
}
 
export default Page;