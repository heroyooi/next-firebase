'use client'; // ✅ 이 페이지를 클라이언트 컴포넌트로 만듭니다.

import { AddPostForm } from '@/components/posts';

export default function WritePostPage() {
  return (
    <main>
      <AddPostForm />
    </main>
  );
}
