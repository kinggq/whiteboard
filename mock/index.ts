import type { MockMethod } from 'vite-plugin-mock'

const mock: Array<MockMethod> = [
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        ret: 0,
        msg: '登录成功',
        data: 'Hello King!',
      }
    },
  },
]

export default mock
