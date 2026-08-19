export type Review = {
  id: string;
  rating: number;
  tuning: number;
  access: 'public'| 'private' | 'restricted';
  notes: string;
  images?: string[];
}