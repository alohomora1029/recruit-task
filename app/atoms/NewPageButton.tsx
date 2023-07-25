import React from 'react'
import Image from 'next/image'
import newPageButton from './design/+.svg'


export default function NewPageButton({onClick}:ClickType) {
  return (
    <div>
        <button className='h-[40px] min-w-[40px] flex-col items-center rounded border-main' onClick={onClick}>
        <Image
         src={newPageButton}
         width={24}
         height={24}
         alt='newPageButton'
        />
        <p className='text-[10px] text-main'>New page</p>
        </button>
    </div>
  )
}
