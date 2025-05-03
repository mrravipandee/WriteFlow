'use client';

import React, { useEffect } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateTools';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PROPS {
  params: {
    toolsSlug: string;
  };
}

const CreateNewContent = ({ params }: PROPS) => {
  const slug = decodeURIComponent(params.toolsSlug);

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  const GenerateAIContent = (formData: any) => {
    console.log('Form Data:', formData);
  }

  // Debugging: Show matching info in console
  // useEffect(() => {
  //   console.log('Slug from URL:', slug);
  //   console.log('Available template slugs:', Templates.map(item => item.slug));
  //   console.log('Selected Template:', selectedTemplate);
  // }, [slug, selectedTemplate]);

  if (!selectedTemplate) {
    return (
      <div className="p-5 text-center text-red-500 font-semibold">
        ❌ Template not found for slug: {slug}
      </div>
    );
  }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"} >
      <Button><ArrowLeft /> Back</Button>
    </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
      {/* Left: Form */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateAIContent(v)} />

      {/* Right: Output */}
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
    </div>
  );
};

export default CreateNewContent;
