import type { PianoDetail } from "../../types/piano"

export const pianos: PianoDetail[]  = [
  // piano 1
  {
    id: '1',                      // piano id
    name: 'Piano near red door',  // name
    location: [47.665, -122.335],             // location
    reviews: [
      {
        id: '1',                  // Review id
        rating: 5,                    // rating
        tuning: 75,                   // tuning
        access: 'public',             // access
        notes: 'Its painted blue!',   // notes
        images: [
          'https://tree-dither-big.jpg' // images
        ]
      }
    ],
  },
  // piano 2 (no images)
  {
    id: '2',
    name: 'Piano by office suply shop',
    location: [47.685, -122.38],
    reviews: [
      {
        id: '2',
        rating: 3,
        tuning: 47,
        access: 'public',
        notes: 'A litle out of tune :(',
        images: []
      }
    ],
  },
  // piano 3 (they named it Carl)
  {
    id: '3',
    name: 'Carl',
    location: [47.685, -122.335],
    reviews: [
      {
        id: '3',
        rating: 4,
        tuning: 80,
        access: 'public',
        notes: 'THIS IS THE BEST PIANO IVE EVER SEEN!',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
      {
        id: '4',
        rating: 3.5,
        tuning: 82,
        access: 'public',
        notes: 'Pretty good piano',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
      {
        id: '5',
        rating: 5,
        tuning: 75,
        access: 'restricted',
        notes: 'This piano saved my life.',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
      {
        id: '6',
        rating: 3,
        tuning: 70,
        access: 'restricted',
        notes: 'its Carl. What can I say?',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
      {
        id: '7',
        rating: 3,
        tuning: 70,
        access: 'private',
        notes: 'Carl for president!',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
      {
        id: '8',
        rating: 3,
        tuning: 70,
        access: 'private',
        notes: 'Sonorous tone and beautiful melodies.',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      },
    ]
  },
]