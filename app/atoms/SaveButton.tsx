import React from 'react'
import Image from 'next/image'
import saveButton from './design/save.svg'


export default function SaveButton({onClick}:ClickType) {
  return (
    <div>
        <button className='bg-main h-[40px] min-w-[40px] flex-col items-center rounded hover:bg-blue-400 active:bg-blue-700' onClick={onClick}>
        <Image
         src={saveButton}
         width={24}
         height={24}
         alt='saveButton'
        />
        <p className='text-[10px] text-white'>Save</p>
        </button>
    </div>
  )
}
