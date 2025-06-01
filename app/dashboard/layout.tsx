"use client";

import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsagesContext } from '../(context)/TotalUsagesContext'
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [UserSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>()

  return (
    <TotalUsagesContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider value={{ UserSubscription, setUserSubscription }} >
        <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}} >
          <div className="bg-slate-100 h-screen">
            <div className="md:w-64 hidden md:block fixed">
              <SideNav />
            </div>
            <div className="md:ml-64">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsagesContext.Provider>
  )
}

export default Layout;
