'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'

const UsageTrack = () => {
  const { user } = useUser()
  const [totalUsage, setTotalUsage] = useState<number>(0)

  useEffect(() => {
    if (user) {
      getData()
    }
  }, [user])

  const getData = async () => {
    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))

      let total = 0

      result.forEach((item: any) => {
        total += item.aiResponse?.length || 0
      })

      setTotalUsage(total)
      console.log('Total Usage:', total)
    } catch (error) {
      console.error('Error fetching usage:', error)
    }
  }

  // Ensure percentage never goes over 100
  const percentage = Math.min((totalUsage / 10000) * 100, 100)

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="text-sm font-semibold">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage} / 10000 credits used</h2>
      </div>
      <Button className="w-full mt-3 text-primary" variant="outline">
        Upgrade
      </Button>
    </div>
  )
}

export default UsageTrack;