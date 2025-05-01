"use client"

import React from 'react'
import SearchSections from './_components/SearchSections'
import TemplateTools from './_components/TemplateTools'

const page = () => {

  const [userSearchInput, setUserSearchInput] = React.useState<string>('')


  return (
    <div className=''>
      {/* search section */}
      <SearchSections onSearchInput={(value:string) => setUserSearchInput(value)} />

      {/* show the template tools */}
      <TemplateTools userSearchInput={userSearchInput} />
    </div>
  )
}

export default page
