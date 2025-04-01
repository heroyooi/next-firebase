import { PostDetail } from '@/components/posts';
import { getPostById } from '@/lib/firestore';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostById(params.id);
  return {
    title: `글 상세 | ${post?.title}` || '글 상세 | Next.js + Firebase + GA',
    description: post?.content?.slice(0, 50) || '게시글 상세 페이지입니다.',
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const post = await getPostById(params.id);
  if (!post) return notFound();

  return <PostDetail post={post} />;
}
