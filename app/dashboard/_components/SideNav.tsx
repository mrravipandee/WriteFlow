'use client'

import { FolderClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'

const SideNav = () => {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', icon: Home, path: '/dashboard' },
    { name: 'History', icon: FolderClock, path: '/dashboard/history' },
    { name: 'Billing', icon: Wallet, path: '/dashboard/billing' },
    { name: 'Setting', icon: Settings, path: '/dashboard/setting' },
  ]

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image
          src={'/logo.svg'}
          alt='logo'
          width={100}
          height={100}
          className='mx-auto mt-5'
        />
      </div>
      <hr className='my-6 border' />

      <div className='mt-3'>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center font-medium ${pathname === item.path ? 'bg-primary text-white' : ''
              }`}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>

      <div className='absolute bottom-14 w-full left-0'>
        <UsageTrack />
      </div>
    </div>
  )
}

export default SideNav
