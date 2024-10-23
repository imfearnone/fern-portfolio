import React from 'react'
import { Lobster } from '@next/font/google'

const lobster = Lobster({
    weight: "400",
    subsets: ["latin"],
})

export default function logoBtn() {
  return (
    <div className={`font-bold text-2xl ${lobster.className}`}>
        imfearnone
        <span className="text-secondarybg">
            &nbsp;/&gt; 
        </span>
    </div>
  )
}
