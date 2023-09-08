const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  meta: {
    title: '管理员',
    permissions: ['super', 'admin'],
    requireAuth: true,
    hide: true,
    order: 10,
  },
}

export default management
