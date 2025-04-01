import dynamic from 'next/dynamic';

export const metadata = {
  title: '글 작성 | Next.js + Firebase + GA',
  description: 'Next.js + Firebase + GA 글 작성 페이지입니다.',
};

// ❗ 클라이언트 전용 컴포넌트를 동적 import로 로딩 (SSR 비활성화)
const WriteClient = dynamic(() => import('./WriteClient'), { ssr: false });

export default function WritePostPage() {
  return (
    <main>
      <WriteClient />
    </main>
  );
}
