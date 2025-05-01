import { Search } from 'lucide-react'
import React from 'react'

const SearchSections = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Template</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[45%]'>
            <Search className='text-primary' />
            <input type='text' placeholder='Search...' onChange={(e) => onSearchInput(e.target.value)} className='bg-transparent rounded-md text-primary w-full outline-none' />
        </div>
      </div>
    </div>
  )
}

export default SearchSections
