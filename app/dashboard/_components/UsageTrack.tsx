"use client";

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

const UsageTrack = () => {

    const {user} = useUser();

    useEffect(() => {
        user&&getData();
    }, [user]);

    const getData = async () => {
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        getTotalUsage(result);
    }

    const getTotalUsage = (result: ) => {
        let total:number = 0;

        result.forEach(element => {
            total = total + Number(element.aiResponse?.length);
        });

        console.log('Total Usage:', total);
    }


  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
            <div className='h-2 bg-white rounded-full' style={{ width: '40%' }}>
            </div>
        </div>
        <h2 className='text-sm my-2'>350/1000 credit used</h2>
      </div>
      <Button className='w-full mt-3 text-primary' variant='outline'>
        Upgrade
      </Button>
    </div>
  )
}

export default UsageTrack;
