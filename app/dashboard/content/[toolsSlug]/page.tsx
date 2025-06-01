"use client";

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'next/navigation';
import moment from 'moment';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TEMPLATE } from '../../_components/TemplateTools';
import { TotalUsagesContext } from '@/app/(context)/TotalUsagesContext';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

const CreateNewContent = () => {
  const params = useParams();
  const slug = decodeURIComponent(params?.toolsSlug as string);

  const { user } = useUser();

  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const { totalUsage, setTotalUsage } = useContext(TotalUsagesContext);
  const router = useRouter();

  const { UserSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    const foundTemplate = Templates.find(
      (item) => item.slug.toLowerCase() === slug.toLowerCase()
    );
    setSelectedTemplate(foundTemplate);
  }, [slug]);


  /**
   * used to generate content from AI
   * @param formData 
   * @returns 
   */
  const GenerateAIContent = async (formData: any) => {
    // Check if the user has reached their usage limit
    if (totalUsage >= 10000 && !UserSubscription) {
      toast.error('You have reached your usage limit for free used. Please upgrade your plan to continue generating content.');
      router.push('/dashboard/billing');
      return;
    }

    // Check if a template is selected
    if (!selectedTemplate) return;

    // Check if the user is logged in and has a verified email
    if (!user || !user.primaryEmailAddress?.emailAddress) {
      alert('You must be logged in with a verified email to generate content.');
      return;
    }

    // Check if the form data is valid
    setLoading(true);
    const selectedPrompt = selectedTemplate.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

    // Log the AI prompt for debugging
    let aiOutput = '';
    try {
      const result = await chatSession.sendMessage(finalAIPrompt);
      aiOutput = await result.response.text();

      console.log('AI Result:', aiOutput);
      setGeneratedContent(aiOutput);

    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      await SaveInDb(formData, selectedTemplate.slug, aiOutput);
      setLoading(false);
    }
    setUpdateCreditUsage(Date.now())
  };


  const SaveInDb = async (formData: any, slug: string, aiResponse: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.warn('User email not available. Skipping save.');
      return;
    }

    await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: slug,
      aiResponse,
      createdBy: user.primaryEmailAddress.emailAddress,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });

    // console.log(AIOutput);
  };



  if (!selectedTemplate) {
    return (
      <div className="p-5 text-center text-red-500 font-semibold">
        ❌ Template not found for slug: {slug}
      </div>
    );
  }

  return (
    <div className="p-10">
      <Toaster position="top-right" />
      <Link href="/dashboard">
        <Button><ArrowLeft /> Back</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          loading={loading}
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={generatedContent} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
