import React from 'react'
import Image from 'next/image'
import trash from './design/delete.svg'


export default function TrashButton({onClick}:ClickType) {
  return (
    <div>
        <button className='ml-[10px] hover:bg-gray-100 active:bg-gray-400 disabled:bg-opacity-25' onClick={onClick}>
        <Image
              src={trash}
              width={0}
              height={0}
              alt="trash"
              style={{width:'auto',height:'auto'}}
            />
        </button>
    </div>
  )
}
