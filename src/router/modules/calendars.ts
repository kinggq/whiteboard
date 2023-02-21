const calendars: AuthRoute.Route = {
    name: 'calendars',
    path: '/calendars',
    component: 'self',
    children: [],
    meta: {
        title: '日历',
        singleLayout: 'basic',
        requireAuth: true,
        order: 3
    }
}

export default calendars
