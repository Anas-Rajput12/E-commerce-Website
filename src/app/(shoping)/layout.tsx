import React from 'react'
import ShopHeader from './shopHeader'


export default function Layout({children}:Readonly<
    {children:React.ReactNode}>) {
  return (
    <>
    <ShopHeader/>
    {children}
    </>
  )
}
