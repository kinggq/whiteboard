const whiteboard: AuthRoute.Route = {
    name: 'whiteboard',
    path: '/whiteboard',
    component: 'self',
    children: [],
    meta: {
        title: '白板',
        singleLayout: 'basic',
        requireAuth: true
    }
}

export default whiteboard
