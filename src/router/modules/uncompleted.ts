const uncompleted: AuthRoute.Route = {
  name: 'uncompleted',
  path: '/uncompleted',
  component: 'self',
  children: [],
  meta: {
    title: '我自己',
    singleLayout: 'basic',
    requireAuth: true,
    order: 6,
  },
}

export default uncompleted
