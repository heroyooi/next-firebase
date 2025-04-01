'use client';

import { Editor } from '@toast-ui/react-editor';
import { useRef, useEffect } from 'react';
import { uploadImage } from '@/lib/firebase';
import toastr from 'toastr';

type Props = {
  content: string;
  setContent: (value: string) => void;
};

export default function ToastEditor({ content, setContent }: Props) {
  const editorRef = useRef<Editor>(null);

  const handleChange = () => {
    const markdown = editorRef.current?.getInstance().getMarkdown();
    if (markdown) setContent(markdown);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(content || '');
    }
  }, [content]);

  return (
    <Editor
      initialValue={content || ''}
      previewStyle='vertical'
      height='400px'
      initialEditType='markdown'
      useCommandShortcut={true}
      ref={editorRef}
      onChange={handleChange}
      hooks={{
        addImageBlobHook: async (
          blob: File,
          callback: (url: string, altText: string) => void
        ) => {
          try {
            const imageUrl = await uploadImage(blob);
            callback(imageUrl, 'image');
          } catch (error) {
            toastr.options = {
              positionClass: 'toast-bottom-center',
              timeOut: 3000,
            };
            if (error instanceof Error) {
              toastr.error(error.message);
            } else {
              toastr.error('이미지 업로드에 실패했습니다.');
            }
          }
        },
      }}
    />
  );
}
