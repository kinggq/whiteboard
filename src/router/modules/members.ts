const members: AuthRoute.Route = {
    name: 'members',
    path: '/members',
    component: 'self',
    children: [],
    meta: {
        title: '团队',
        singleLayout: 'basic',
        requireAuth: true,
        order: 6
    }
}

export default members
