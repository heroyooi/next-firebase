'use client';

import { useState } from 'react';
import { updatePost } from '@/lib/firestore';
import '@/styles/components/posts.scss';

export default function EditPostForm({
  post,
  onCancel,
}: {
  post: any;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [error, setError] = useState('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePost(post.id, title, content);
      alert('게시글이 수정되었습니다!');
      onCancel();
    } catch (err) {
      setError('수정 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div className="post-form-container">
      <h2>게시글 수정</h2>
      <form onSubmit={handleUpdate} className="post-form">
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
        <button type="submit">수정 완료</button>
        <button type="button" onClick={onCancel}>
          취소
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
