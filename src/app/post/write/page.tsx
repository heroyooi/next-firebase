import WriteClient from '@/components/posts/WriteClient';

export const metadata = {
  title: '글 작성 | Next.js + Firebase + GA',
  description: 'Next.js + Firebase + GA 글 작성 페이지입니다.',
};

export default function WritePostPage() {
  return (
    <main>
      <WriteClient />
    </main>
  );
}
