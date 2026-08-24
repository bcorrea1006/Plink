import type { User } from '../../types/user';

export const users: User[] = [
  // user 1
  {
    id: '1',
    email: 'alex.rivera@example.com',
    username: 'alexRivera',
    createdAt: 1692878400000, // Epoch Ms for Aug 24, 2023 (Early adopter)
  },
  // user 2
  {
    id: '2',
    email: 'chloe.chen@example.com',
    username: 'Chloe C',
    createdAt: 1724500800000 // Epoch Ms for Aug 24, 2024 (One year later)
  },
  // user 3
  {
    id: '3',
    email: 'Carl@carl.com',
    username: 'Carl',
    createdAt: "2025-05-12T14:32:10.123Z" // ISO String format (Mid 2025)
  },
  // user 4
  {
    id: '4',
    email: 'Saral@example.com',
    username: 'Sarah Jenkins',
    createdAt: "2026-02-18T09:15:45.000Z" // ISO String format (Recent sign-up)
  },
]