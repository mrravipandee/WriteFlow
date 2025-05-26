"use client";

import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsagesContext } from '../(context)/TotalUsagesContext'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [totalUsage, setTotalUsage] = React.useState<Number>(0)

  return (
    <TotalUsagesContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="bg-slate-100 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </TotalUsagesContext.Provider>
  )
}

export default Layout;
