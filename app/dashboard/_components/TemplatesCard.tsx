'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TEMPLATE } from './TemplateTools';

const TemplatesCard: React.FC<TEMPLATE> = ({ slug, icon, name, desc }) => {
  return (
    <Link href={`/dashboard/content/${slug}`}>
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-2 cursor-pointer hover:scale-105 hover:transition-all'>
        <Image src={icon} alt='icon' width={50} height={50} />
        <h2 className='font-medium text-lg'>{name}</h2>
        <p className='text-gray-500 line-clamp-3'>{desc}</p>
      </div>
    </Link>
  );
};

export default TemplatesCard;