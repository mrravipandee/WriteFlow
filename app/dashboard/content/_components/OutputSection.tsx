'use client';

import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();

    if (editorInstance && typeof aiOutput === 'string') {
      try {
        editorInstance.setMarkdown(aiOutput);
      } catch (error) {
        console.error('Failed to set editor content:', error);
      }
    } else {
      console.warn("⚠️ aiOutput is not a string or editor not ready:", aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();

    if (markdown) {
      navigator.clipboard.writeText(markdown)
        .then(() => toast.success('Copied to clipboard!'))
        .catch(() => toast.error('Failed to copy'));
    } else {
      toast.error('Nothing to copy');
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button 
          onClick={handleCopy} 
          className="flex items-center gap-2"
          aria-label="Copy content to clipboard"
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your content will be generated here..."
        height="580px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          const value = editorRef.current?.getInstance().getMarkdown();
          console.log('Content changed:', value);
        }}
        spellCheck={false}
      />
    </div>
  );
};

export default OutputSection;
