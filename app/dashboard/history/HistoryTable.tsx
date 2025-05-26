"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface Template {
  slug: string;
  name: string;
  icon: string;
}

export interface History {
  icon?: string;
  id: number;
  formData: string;
  aiResponse: string;
  createdBy: string;
  createdAt: string;
  templateSlug: string;
}

interface Props {
  historyList: History[];
  templates: Template[];
}

const HistoryTable: React.FC<Props> = ({ historyList, templates }) => {
  const getTemplateName = (slug: string) => {
    const template = templates.find((item) => item.slug === slug);
    return template ? template.name : "Unknown Template";
  };

  const getTemplateIcon = (slug: string) => {
    const template = templates?.find(
      (item) => item.slug === slug
    );
    return template ? template.icon : "default-icon.png";
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied successfully!");
    });
  };

  return (
    <div className="mt-5 p-5 border rounded-lg bg-white overflow-x-auto">
      <Toaster position="top-right" />
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>

      <table className="w-full mt-5 border-collapse">
        <thead>
          <tr className="border-b bg-gray-100 text-left">
            <th className="py-2 px-4">Template</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">AI Response</th>
            <th className="py-2 px-4">Words</th>
            <th className="py-2 px-4">Copy</th>
          </tr>
        </thead>
        <tbody>
          {historyList.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={getTemplateIcon(item.templateSlug)}
                    alt={getTemplateName(item.templateSlug)}
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-[14px]">{getTemplateName(item.templateSlug)}</span>
                </div>
              </td>
              {/* <td className="py-2 px-4 text-[14px]">
                {new Date(item.createdAt).toLocaleDateString()}
              </td> */}
              <td className="py-2 px-4 text-[14px]">
                {new Intl.DateTimeFormat('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                }).format(new Date(item.createdAt))}
              </td>
              <td className="py-2 px-4 max-w-md truncate text-[14px]">{item.aiResponse}</td>
              <td className="py-2 px-4 text-[14px]">
                {item.aiResponse?.length}
              </td>
              <td className="py-2 px-4">
                <Button size="sm" variant="ghost" onClick={() => handleCopy(item.aiResponse)}>
                  <Copy className="mr-2 text-primary w-4 h-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
