export type Review = {
  id: string;
  images?: string[];
  rating: number;
  tuning: number;
  access: 'public'| 'private' | 'restricted';
  notes: string;
}