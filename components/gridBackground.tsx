import React from 'react'

export default function GridBackground() {
  return (
    <div
        className="h-screen w-full dark:bg-black-100 bg-primarybg dark:bg-grid-white/[0.05] bg-grid-white/[0.05]
       absolute top-0 left-0 flex items-center justify-center z-[-1]"
    >
        <div
          className="absolute text-white pointer-events-none inset-0 flex items-center justify-center dark:bg-primarybg
         bg-primarybg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
    </div>
  )
}
