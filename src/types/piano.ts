import type { Review } from '../types/review.ts';

export type Piano = {
  id: string;
  name: string;
  location: [number, number];
  // TODO: add avg rating once backend hooked up
}

export type PianoDetail = Piano & {
  reviews: Review[];
}