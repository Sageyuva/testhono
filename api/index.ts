// api/index.ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from Hono on Vercel!')
})

export const GET = handle(app)
export const POST = handle(app)
