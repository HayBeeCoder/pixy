import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
        <Link href="/">
            <p className='font-logo text-[#484B6A] font-bold text-2xl cursor-pointer' >
                pixy
            </p>
        </Link>
        
    </>
  )
}

export default Logo