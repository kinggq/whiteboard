import { viteMockServe } from 'vite-plugin-mock'

export default viteMockServe({
  mockPath: 'mock',
  supportTs: true,
})
