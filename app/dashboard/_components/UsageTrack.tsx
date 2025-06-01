'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect } from 'react'
import { db } from '@/utils/db'
import { AIOutput, UserSubscription as UserSubTable } from '@/utils/schema'
import { eq, and } from 'drizzle-orm'
import { TotalUsagesContext } from '@/app/(context)/TotalUsagesContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

const UsageTrack = () => {
  const { user } = useUser()
  const { totalUsage, setTotalUsage } = useContext(TotalUsagesContext)
  const { UserSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext)

  useEffect(() => {
    const email = user?.primaryEmailAddress?.emailAddress
    if (!email) return

    getData(email)
    checkUserSubscription(email)
  }, [user])

  useEffect(() => {
    const email = user?.primaryEmailAddress?.emailAddress
    if (!email || !updateCreditUsage) return

    getData(email)
  }, [updateCreditUsage, user])

  const getData = async (email: string) => {
    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email))

      let total = 0
      result.forEach((item: any) => {
        total += item.aiResponse?.length || 0
      })

      setTotalUsage(total)
    } catch (error) {
      console.error('Error fetching usage:', error)
    }
  }

  const checkUserSubscription = async (email: string) => {
    try {
      const result = await db
        .select()
        .from(UserSubTable)
        .where(
          and(
            eq(UserSubTable.email, email),
            eq(UserSubTable.active, true)
          )
        )

      setUserSubscription(result.length > 0)
    } catch (error) {
      console.error('Error checking subscription:', error)
    }
  }

  const creditLimit = UserSubscription ? 100000 : 10000
  const percentage = Math.min((totalUsage / creditLimit) * 100, 100)

  return (
    <div className="m-4 max-w-md">
      <div className="bg-primary text-white p-4 rounded-xl shadow-md">
        <h2 className="text-sm font-semibold">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <h2 className="text-sm mt-3">
          {totalUsage} / {UserSubscription ? '1,00,000' : '10,000'} credits used
        </h2>
      </div>
      <Button className="w-full mt-4 text-primary" variant="outline">
        Upgrade
      </Button>
    </div>
  )
}

export default UsageTrack
