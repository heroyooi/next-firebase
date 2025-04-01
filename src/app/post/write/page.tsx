import dynamic from 'next/dynamic';

export const metadata = {
  title: '글 작성 | Next.js + Firebase + GA',
  description: 'Next.js + Firebase + GA 글 작성 페이지입니다.',
};

const AddPostForm = dynamic(() => import('@/components/posts/AddPostForm'), {
  ssr: false,
});

export default function WritePostPage() {
  return (
    <main>
      <AddPostForm />
    </main>
  );
}
