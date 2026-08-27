import { http, HttpResponse } from 'msw'
import { pianos } from './data/pianos';

export const handlers = [
  http.get('/pianos', () =>  {
    return HttpResponse.json(
      pianos
    )
  }),

  http.get('/error', () => {
    return HttpResponse.json(null, { status: 404 })
  }),
]