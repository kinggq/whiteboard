const events: AuthRoute.Route = {
    name: 'events',
    path: '/events',
    component: 'self',
    children: [],
    meta: {
        title: '动态',
        singleLayout: 'basic',
        requireAuth: true,
        order: 5
    }
}

export default events
