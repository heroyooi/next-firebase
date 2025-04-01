'use client';

import { AddPostForm } from '@/components/posts';

export const metadata = {
  title: '글 작성 | Next.js + Firebase + GA',
  description: 'Next.js + Firebase + GA 글 작성 페이지입니다.',
};

export default function WritePostPage() {
  return (
    <main>
      <AddPostForm />
    </main>
  );
}
