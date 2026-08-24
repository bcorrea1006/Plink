import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/pianos', () =>  {
    HttpResponse.json({
      id: '1',
      name: 'piano by red door',
    })
  }),
]