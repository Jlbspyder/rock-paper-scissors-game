'use client'
import React, {useEffect} from 'react'
import Link from 'next/link'
import { TbTriangleInverted } from "react-icons/tb";


const page = () => {
  return (
    <div className='login'>
      <div className="log header">
        <div className="logo">
          <img src="images/logo.svg" alt="logo" className="title" />
        </div>
        <div className='result'>
        <TbTriangleInverted  className='triangle'/>
        </div>
      </div>
      <div className="play">
        <Link href='/homepage'>START GAME</Link>
      </div>
    </div>
  )
}

export default page
