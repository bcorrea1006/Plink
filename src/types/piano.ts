export type Piano = {
  id: number;
  quality: number; // 1-5 rating
  tuned: boolean;
  access: 'public' | 'private' | 'restricted';
  notes?: string;
}