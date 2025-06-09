'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TEMPLATE } from '../../_components/TemplateTools';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (data: any) => void;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    console.log('selectedTemplate:', selectedTemplate);
  }, [selectedTemplate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, item: any) => {
    const { name, options } = e.target;

    const value = item?.multiple
      ? Array.from(options)
          .filter((o) => o.selected)
          .map((o) => o.value)
      : e.target.value;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  if (!selectedTemplate) {
    return <div className="p-5">No template selected</div>;
  }

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {selectedTemplate.icon && (
        <Image
          src={selectedTemplate.icon}
          alt="Template Icon"
          width={70}
          height={70}
          className="object-contain"
        />
      )}

      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate.name}
      </h2>

      <p className="text-gray-500 text-sm">{selectedTemplate.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>

            {item.field === 'input' && (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            )}

            {item.field === 'textarea' && (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            )}

            {item.field === 'select' && (
              <select
                name={item.name}
                required={item?.required}
                multiple={item?.multiple}
                onChange={(e) => handleSelectChange(e, item)}
                className="border px-3 py-2 rounded-md"
              >
                {!item?.multiple && <option value="">Select an option</option>}
                {item?.options?.map((opt: string, idx: number) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <Button disabled={loading} type="submit" className="w-full py-6">
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
