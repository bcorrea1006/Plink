// TODO: Consider adding userId and pianoId fields to match db schema?

export type Review = {
  id: string;
  rating: number;
  tuning: number;
  access: 'public'| 'private' | 'restricted';
  notes: string;
  images?: string[];
}