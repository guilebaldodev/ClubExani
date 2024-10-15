'use client'
import Image from "next/image";
import styles from './AnswerSheet.module.css'

interface AnswerSheetProps{
    closeSideBar:()=>void
}

const AnswerSheet = ({closeSideBar}:AnswerSheetProps) => {

    return ( 

        <div className={styles['overlay']}>
        <div className={styles['simulator-answer-sheet']}>
          <div className={styles['answer-sheet-titles']}>
            <p>Avance de preguntas</p>
            <Image
              onClick={() => {
                closeSideBar();
              }}
              src="/course/left-arrow.png"
              alt="Arrow icon"
              width={24} 
              height={24}
            />
          </div>
          <div className={styles['answers-sheet-items']}>
            {Array.from({ length: 120 }, (_, index) => (
              <div
                key={index}
                className={`${styles['item']} ${index < 4 || index === 5 ? styles['selected'] : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
export default AnswerSheet;