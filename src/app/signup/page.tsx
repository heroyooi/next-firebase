'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SignUpForm } from '@/components/auth';
import { useAuth } from '@/hooks/useAuth';
import { signInWithGoogle, signInWithGitHub } from '@/lib/auth';
import '@/styles/components/auth.scss';
import '@/styles/components/button.scss';

export default function SignupPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  return (
    <div className='auth-container'>
      <SignUpForm />
      <div className='button-wrap'>
        <button className='button' onClick={signInWithGoogle}>
          Google 회원가입/로그인
        </button>
        <button className='button' onClick={signInWithGitHub}>
          GitHub 회원가입/로그인
        </button>
      </div>
    </div>
  );
}
