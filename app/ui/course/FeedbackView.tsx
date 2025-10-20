"use client"

import { Player } from "@lottiefiles/react-lottie-player"
import React from "react"
import styles from "./FeedBack.module.css";

interface FeedbackViewProps {
  animation: any
  message?: string
  className?: string
}

const FeedbackView: React.FC<FeedbackViewProps> = ({ animation, message, className }) => {
  
    return (

    
    <div className={styles[`${className}`]}>
      <div className={styles[`json-container`]}>
      <Player
        autoplay
        loop
        src={animation}
        />
        </div>
      {message && (
        <p>
          {message}
        </p>
      )}
    </div>
  )
}

export default FeedbackView
