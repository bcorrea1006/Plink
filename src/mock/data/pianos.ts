import type { PianoDetail } from "../../types/piano"

export const pianos: PianoDetail[]  = [
  // piano 1
  {
    id: '1',                      // piano id
    name: 'Piano near red door',  // name
    location: [48.48, -122.31],             // location
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
    location: [48.48, -122.35],
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
    location: [48.46, -122.31],
    reviews: [
      {
        id: '3',
        rating: 4,
        tuning: 80,
        access: 'restricted',
        notes: 'THIS IS THE BEST PIANO IVE EVER SEEN!',
        images: [
          'https://godly-piano.png',
          'https://img2.jpg-or-something'
        ]
      }
    ]
  }
]