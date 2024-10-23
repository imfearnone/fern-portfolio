import { motion } from 'framer-motion'
import React from 'react'

export default function animatedBlob() {
  return (
    <div>
        <motion.svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
            initial={{ scale: 1.5 }}
            animate={{ scale: [1.5, 1.55, 1.5] }} // Optional scaling animation for pulsating effect
            transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            >
            <motion.path
                fill="#66FCF1" // Blob color
                d="M38.8,-65C52,-59.7,65.4,-52.6,74.2,-41.5C83,-30.4,87.1,-15.2,85.8,-0.7C84.6,13.7,78,27.5,69.3,38.7C60.6,49.9,49.7,58.7,37.8,67.9C25.9,77.1,13,86.9,-0.9,88.4C-14.7,89.9,-29.5,83.3,-43.7,75.3C-57.9,67.4,-71.5,58.3,-77.1,45.5C-82.6,32.8,-80.1,16.4,-77.9,1.3C-75.7,-13.8,-73.7,-27.6,-68,-40.1C-62.3,-52.6,-52.7,-63.7,-40.8,-69.8C-28.8,-75.8,-14.4,-76.7,-0.8,-75.3C12.8,-74,25.7,-70.4,38.8,-65Z"
                transform="translate(100 100)" // Centering the blob
                animate={{ 
                d: [
                    "M38.8,-65C52,-59.7,65.4,-52.6,74.2,-41.5C83,-30.4,87.1,-15.2,85.8,-0.7C84.6,13.7,78,27.5,69.3,38.7C60.6,49.9,49.7,58.7,37.8,67.9C25.9,77.1,13,86.9,-0.9,88.4C-14.7,89.9,-29.5,83.3,-43.7,75.3C-57.9,67.4,-71.5,58.3,-77.1,45.5C-82.6,32.8,-80.1,16.4,-77.9,1.3C-75.7,-13.8,-73.7,-27.6,-68,-40.1C-62.3,-52.6,-52.7,-63.7,-40.8,-69.8C-28.8,-75.8,-14.4,-76.7,-0.8,-75.3C12.8,-74,25.7,-70.4,38.8,-65Z",
                    "M44.2,-76.1C57.3,-69.1,67.7,-57.1,73.4,-43.6C79.1,-30.1,80.1,-15.1,80.6,0.3C81.1,15.6,81.1,31.3,75.6,45C70,58.7,58.7,70.5,45.2,75.4C31.7,80.4,15.8,78.4,-0.2,78.7C-16.1,79,-32.3,81.4,-44.2,75.6C-56.2,69.7,-64,55.6,-71.4,41.6C-78.7,27.7,-85.7,13.8,-85.3,0.2C-84.9,-13.4,-77.2,-26.8,-69.9,-40.9C-62.6,-55,-55.7,-69.8,-44.1,-77.6C-32.6,-85.4,-16.3,-86.2,-0.3,-85.6C15.6,-85,31.2,-83.1,44.2,-76.1Z",
                    "M41.3,-74C53.2,-64.7,62.2,-52.9,69,-40.1C75.9,-27.4,80.6,-13.7,81.1,0.3C81.5,14.2,77.6,28.4,70.5,40.6C63.3,52.8,52.8,63.1,40.5,70.7C28.2,78.4,14.1,83.5,0.7,82.3C-12.8,81.2,-25.5,73.7,-39.5,67C-53.4,60.3,-68.6,54.3,-75.6,43.3C-82.7,32.2,-81.6,16.1,-80.8,0.5C-79.9,-15.1,-79.3,-30.3,-72.8,-42.2C-66.2,-54.2,-53.8,-63,-40.7,-71.5C-27.6,-80,-13.8,-88.3,0.5,-89.1C14.7,-89.9,29.4,-83.2,41.3,-74Z",
                    "M42.6,-74.3C55.6,-66.3,66.8,-55.7,75.3,-42.8C83.8,-30,89.6,-15,89.6,0C89.6,15,83.9,30.1,74.4,41.3C65,52.5,51.9,59.8,38.9,65.9C25.9,72,12.9,76.8,-1.6,79.6C-16.1,82.3,-32.3,83.1,-46.4,77.7C-60.6,72.3,-72.8,60.7,-80.5,46.7C-88.1,32.7,-91.3,16.3,-91.1,0.1C-90.9,-16.1,-87.3,-32.2,-79.3,-45.7C-71.3,-59.1,-59,-70,-45,-77.4C-31.1,-84.9,-15.5,-88.9,-0.4,-88.3C14.8,-87.6,29.6,-82.3,42.6,-74.3Z",
                    "M41.9,-73.6C54.6,-65.3,65.2,-54.6,71.8,-41.9C78.4,-29.2,80.8,-14.6,82.2,0.8C83.5,16.1,83.7,32.3,78,46.5C72.3,60.7,60.8,73,46.8,77.8C32.8,82.7,16.4,80,0.1,79.9C-16.3,79.8,-32.5,82.2,-44.2,76C-55.8,69.8,-62.7,55,-67.1,40.9C-71.6,26.8,-73.5,13.4,-74.7,-0.7C-75.9,-14.8,-76.4,-29.6,-70.1,-40.5C-63.8,-51.4,-50.8,-58.4,-38,-66.5C-25.2,-74.7,-12.6,-83.9,1,-85.7C14.6,-87.5,29.3,-81.8,41.9,-73.6Z",
                    "M41.8,-69.7C55.4,-64.5,68.6,-55.9,75.6,-43.7C82.5,-31.5,83.2,-15.8,82.7,-0.2C82.3,15.3,80.8,30.5,74.5,43.8C68.2,57.1,57.1,68.4,43.9,74.6C30.7,80.7,15.3,81.7,1.4,79.2C-12.5,76.7,-25,70.9,-37.3,64.2C-49.6,57.5,-61.7,50,-70,39.2C-78.3,28.4,-82.8,14.2,-82.8,0C-82.7,-14.1,-78.1,-28.3,-70,-39.5C-62,-50.7,-50.4,-59,-38.2,-65C-25.9,-71,-13,-74.8,0.6,-75.8C14.1,-76.7,28.1,-74.9,41.8,-69.7Z",
                    "M38.8,-65C52,-59.7,65.4,-52.6,74.2,-41.5C83,-30.4,87.1,-15.2,85.8,-0.7C84.6,13.7,78,27.5,69.3,38.7C60.6,49.9,49.7,58.7,37.8,67.9C25.9,77.1,13,86.9,-0.9,88.4C-14.7,89.9,-29.5,83.3,-43.7,75.3C-57.9,67.4,-71.5,58.3,-77.1,45.5C-82.6,32.8,-80.1,16.4,-77.9,1.3C-75.7,-13.8,-73.7,-27.6,-68,-40.1C-62.3,-52.6,-52.7,-63.7,-40.8,-69.8C-28.8,-75.8,-14.4,-76.7,-0.8,-75.3C12.8,-74,25.7,-70.4,38.8,-65Z",
        
                ]
                }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            />
        </motion.svg>
    </div>
  )
}
