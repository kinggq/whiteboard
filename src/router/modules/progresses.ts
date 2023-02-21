const progresses: AuthRoute.Route = {
    name: 'progresses',
    path: '/progresses',
    component: 'self',
    children: [],
    meta: {
        title: '进度',
        singleLayout: 'basic',
        requireAuth: true,
        order: 2
    }
}

export default progresses
