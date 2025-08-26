import LearningSideBar from "@/app/ui/course/LearningSideBar";
import styles from './lessonsPage.module.css'
import LessonComponent from "@/app/ui/course/LessonComponent";


const LessonPage = () => {
  

    return ( 
        <>
    <div className={styles["lesson-content-container"]}>
      <LearningSideBar/>
      <div className={styles["lesson-container"]}>
        <LessonComponent />
      </div>
    </div>
        </>
     );
}
 
export default LessonPage;