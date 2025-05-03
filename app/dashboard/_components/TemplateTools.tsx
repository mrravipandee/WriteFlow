'use client';

import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplatesCard from './TemplatesCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface Props {
  userSearchInput: string;
}

const TemplateTools: React.FC<Props> = ({ userSearchInput }) => {
  const [toolsList, setToolsList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    if (userSearchInput?.trim()) {
      const filtered = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setToolsList(filtered);
    } else {
      setToolsList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {toolsList.map((tool: TEMPLATE) => (
        <TemplatesCard key={tool.slug} {...tool} />
      ))}
    </div>
  );
};

export default TemplateTools;
