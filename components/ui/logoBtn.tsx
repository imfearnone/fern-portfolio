import React from 'react'
import { Lobster } from '@next/font/google'

const lobster = Lobster({
    weight: "400",
    subsets: ["latin"],
})

export default function LogoBtn() {
  return (
    <div className={`font-bold text-xl md:text-2xl ${lobster.className}`}>
        imfearnone
        <span className="text-secondarybg">
            &nbsp;/&gt; 
        </span>
    </div>
  )
}
