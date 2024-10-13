'use client'

import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressBarProps{
    color:string
    porcentage:number
}

const ProgressBarItem = ({color,porcentage}:ProgressBarProps) => {
    return ( 
        <>
        <ProgressBar completed={porcentage} bgColor={color} />
        
        </>
     );
}
 
export default ProgressBarItem;