import Image from "next/image";
import Link from "next/link";
import styles from "./css/contentNotFound.module.css"

interface ContentNotFoundProps {
    message: string
    link:string
}

const ContentNotFound : React.FC<ContentNotFoundProps> = ({message,link}) => {
    return ( 
    <>
        <div className={styles["not-content-container"]}>
            <Image src="/layout/no-content.png" alt="not found" width={100} height={100}></Image>
            <p>{message}</p>
            <Link href={link}>Volver atras</Link>
        </div>
    </> 
    );
}
 
export default ContentNotFound;