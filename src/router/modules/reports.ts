const reports: AuthRoute.Route = {
    name: 'reports',
    path: '/reports',
    component: 'self',
    children: [],
    meta: {
        title: '汇报',
        singleLayout: 'basic',
        requireAuth: true,
        order: 4
    }
}

export default reports
