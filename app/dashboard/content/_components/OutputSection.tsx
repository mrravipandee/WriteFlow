'use client';

import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: props) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();

    // Ensure aiOutput is a string before passing to setMarkdown
    if (editorInstance && typeof aiOutput === 'string') {
      editorInstance.setMarkdown(aiOutput);
    } else {
      console.warn("⚠️ aiOutput is not a string:", aiOutput);
    }
  }, [aiOutput]);


  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();

    if (markdown) {
      navigator.clipboard.writeText(markdown).then(() => {
        console.log('✅ Copied to clipboard');
      });
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button onClick={handleCopy} className="flex items-center gap-2">
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
      />
    </div>
  );
};

export default OutputSection;
