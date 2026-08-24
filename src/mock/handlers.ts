import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/pianos', () =>  {
    console.log("INTERCEPTED!!!!!");
    return HttpResponse.json({
      id: '1',
      name: 'piano by red door',
    })
  }),
]