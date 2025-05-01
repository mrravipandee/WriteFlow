import Image from 'next/image'
import React from 'react'

const TemplatesCard = (tools: TEMPLATE, key: number) => {
    return (
        <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-2 cursor-pointer hover:scale-105 hover:transition-all'>
            <Image src={tools.icon} alt='icon' width={50} height={50} />
            <h2 className='font-medium text-lg'>{tools.name}</h2>
            <p className='text-gray-500 line-clamp-3'>{tools.desc}</p>
        </div>
    )
}

export default TemplatesCard
