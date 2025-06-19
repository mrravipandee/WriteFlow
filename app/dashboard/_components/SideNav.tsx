'use client'

import { FolderClock, Home, Settings, Wallet, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className="md:flex items-center">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-[#5142b5]" />
            <span className="ml-2 text-xl font-semibold text-gray-800">WriteFlow</span>
          </div>
        </div>
      </div>
      <hr className='my-6 border' />

      <div className='mt-3'>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <div
              className={`flex gap-2 mb-2 p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center font-medium ${pathname === item.path ? 'bg-primary text-white' : ''
                }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className='absolute bottom-20 w-full left-0'>
        <UsageTrack />
      </div>

      <div className="absolute bottom-4 w-full left-0 px-5">
        <div className="bg-purple-100 text-purple-900 text-sm p-3 rounded-lg text-center font-medium">
          Membership just ₹109 for 3 months
        </div>
      </div>

    </div>
  )
}

export default SideNav;
