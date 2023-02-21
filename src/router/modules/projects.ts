const projects: AuthRoute.Route = {
    name: 'projects',
    path: '/projects',
    component: 'basic',
    children: [
        {
            name: 'projects_list',
            path: '/projects/list',
            component: 'self',
            meta: {
                title: '项目',
                requireAuth: true,
                activeMenu: 'projects'
            }
        },
        {
            name: 'projects_items',
            path: '/projects/items',
            component: 'self',
            meta: {
                title: '白板',
                requireAuth: true,
                activeMenu: 'projects'
            }
        },
        {
            name: 'projects_creations',
            path: '/projects/creations',
            component: 'self',
            meta: {
                title: '创建项目',
                requireAuth: true,
                activeMenu: 'projects'
            }
        },
        
    ],
    meta: {
        title: '项目',
        requireAuth: true,
        order: 1
    }
}

export default projects
