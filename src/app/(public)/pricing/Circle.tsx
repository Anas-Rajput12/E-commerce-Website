import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { cardTypes } from '@/types/customType'

export default function Circle(props:cardTypes) {
  return (
   <>
   <div style={props.style} className='h-8 w-8  flex items-center justify-center text-white text-xl rounded-full'>
    { <IoCheckmarkOutline/> } 
    </div>
   </>
  )
}
