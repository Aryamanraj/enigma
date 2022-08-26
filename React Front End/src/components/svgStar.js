import React from "react"
import { motion } from 'framer-motion'

export default function svgStar(){
    return(
        <motion.div
        animate={{x: -80, y: 20}}
        transition={{type:'tween', duration: 4}}
        >
        <svg className="star" width="223" height="217" viewBox="0 0 223 217" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="223" height="217" fill="url(#pattern2)"/>
<defs>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_26_16" transform="translate(-0.364973) scale(0.000901013 0.000925926)"/>
</pattern>
</defs>
</svg>
</motion.div>
    )
}