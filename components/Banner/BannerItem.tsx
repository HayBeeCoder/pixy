import React from 'react'

interface IProps{
    active?: boolean
}

const BannerItem = ({active= false} : IProps) => {
  return (
    <>
    <button className={`${active ? " bg-white " : "bg-transparent hover:bg-slate-300/90" } w-full py-4` }>
        Unspash

    </button>
    </>
  )
}

export default BannerItem