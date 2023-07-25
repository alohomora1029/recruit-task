import React from 'react'
import Image from 'next/image'
import doneButton from './design/done.svg'


export default function DoneButton({onClick}:ClickType) {
  return (
    <div>
        <button className='bg-white border border-main h-[40px] min-w-[40px] flex-col items-center rounded hover:bg-gray-200 active:bg-gray-400 disabled:bg-opacity-25' 
        onClick={onClick}>
        <Image
        className='bg-main'
         src={doneButton}
         width={24}
         height={24}
         alt='doneButton'
        />
        <p className='text-[10px] text-main'>Done</p>
        </button>
    </div>
  )
}
