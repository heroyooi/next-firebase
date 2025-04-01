import { Timestamp } from 'firebase/firestore';

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  thumbnailUrl: string;
  createdAt?: number | null;
  updatedAt?: number | null;
}

export interface FirestorePost {
  title: string;
  content: string;
  author: string;
  thumbnailUrl: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
