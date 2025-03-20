'use client';

import { useEffect, useState } from 'react';
import { subscribeToPosts, deletePost, updatePost } from '@/lib/firestore';
import '@/styles/components/posts.scss';
import { useAuth } from '@/hooks/useAuth';

export default function PostList() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [editingPost, setEditingPost] = useState<any | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeToPosts(setPosts);
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    await deletePost(id);
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleUpdate = async () => {
    if (!editingPost) return;
    await updatePost(editingPost.id, title, content);
    setEditingPost(null); // 수정 완료 후 폼 닫기
  };

  return (
    <div className="post-list">
      <h2>게시글 목록</h2>
      {editingPost ? (
        <div className="post-form-container">
          <h2>게시글 수정</h2>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button onClick={handleUpdate}>수정 완료</button>
          <button onClick={() => setEditingPost(null)}>취소</button>
        </div>
      ) : posts.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="author">작성자: {post.author}</p>
            {user && user.email === post.author && (
              <>
                <button onClick={() => handleEdit(post)}>수정</button>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
