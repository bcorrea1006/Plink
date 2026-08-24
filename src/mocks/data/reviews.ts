import type { Review } from '../../types/review'

export const reviews: Review[] = [
  {
    id: '1',
    rating: 5,
    tuning: 50,
    access: 'public',
    notes: 'the most basic piano imaginable.',
    images: ['https://img1.jpg']
  },
  {
    id: '2',
    rating: 3,
    tuning: 65,
    access: 'restricted',
    notes: 'meh. I dropped my grilled cheese on it.',
    images: ['https://cheese.jpg']
  },
  {
    id: '3',
    rating: 2,
    tuning: 20,
    access: 'public',
    notes: 'so bad that I wont even add a picture of it.',
  },
]