import React from 'react'
import Image from 'next/image'
import editButton from './design/edit.svg'


export default function EditButton({onClick}:ClickType) {
  return (
    <div>
        <button className='bg-main h-[40px] min-w-[40px] w-[90px] flex-col items-center hover:bg-blue-400 active:bg-blue-700 disabled:bg-opacity-25 rounded' onClick={onClick}>
        <Image
         src={editButton}
         width={24}
         height={24}
         alt='editButton'
        />
        <p className='text-[10px] text-white'>Edit</p>
        </button>
    </div>
  )
}
