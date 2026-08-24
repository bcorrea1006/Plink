import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () =>  {
    HttpResponse.json({
      id: '1',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]