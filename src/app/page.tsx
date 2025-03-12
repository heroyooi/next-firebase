'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import AddPostForm from '@/components/AddPostForm';
import PostList from '@/components/PostList';
import '@/styles/components/home.scss';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) return <p>로딩 중...</p>;

  return (
    <main className="home-container">
      <h1>게시판</h1>
      <AddPostForm />
      <PostList />
    </main>
  );
}
