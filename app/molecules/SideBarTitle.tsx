import React from 'react'
import Image from 'next/image'
import logo from '../atoms/design/logo.svg'

export default function SideBarTitle() {
  return (
    <> 
    <div className='flex space-x-1 justify-center'>
    <Image
    src={logo}
    width={32}
    height={0}
    alt="logo"
    style={{height:'auto'}}
    />
   <p className='font-bold text-[24px]'>ServiceName</p> 
   
   </div>

    </>
  )
}
