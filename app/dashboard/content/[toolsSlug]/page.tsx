'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateTools';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';


const CreateNewContent = () => {
  const params = useParams();
  const slug = decodeURIComponent(params?.toolsSlug as string);

  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');

  useEffect(() => {
    const foundTemplate = Templates.find(
      (item) => item.slug.toLowerCase() === slug.toLowerCase()
    );
    setSelectedTemplate(foundTemplate);
  }, [slug]);

  const GenerateAIContent = async (formData: any) => {
    if (!selectedTemplate) return;

    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

    try {
      const result = await chatSession.sendMessage(finalAIPrompt);
      const aiOutput = await result.response.text();

      console.log('AI Result:', aiOutput);
      setGeneratedContent(aiOutput);

    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
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