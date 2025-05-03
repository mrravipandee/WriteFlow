import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white'>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg item-center bg-white">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className='outline-none'
        />
      </div>
      <div className=''>
        <h2 className='bg-primary p-2 rounded-full text-xs text-center text-white px-2'>Join Membership jsut for $9.99/Month</h2>
      </div>
    </div>
  )
}

export default Header
