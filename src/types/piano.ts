import type { Review } from '../types/review.ts';

// Leaving this type here to in case I want reviewless piano markers
export type Piano = {
  id: string;
  name: string;
  location: [number, number];
  // TODO: add avg rating once backend hooked up
}

export type PianoDetail = Piano & {
  reviews: Review[];
}