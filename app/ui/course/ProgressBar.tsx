'use client'

import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressBarProps{
    color:string
    porcentage:number
    isLabelVisible?:boolean
}

const ProgressBarItem = ({color,isLabelVisible=true,porcentage}:ProgressBarProps) => {
    return ( 
        <>
        <ProgressBar isLabelVisible={isLabelVisible} completed={porcentage} bgColor={color} />
        
        </>
     );
}
 
export default ProgressBarItem;