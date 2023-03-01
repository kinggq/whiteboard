export const projectItemsChildren: AuthRoute.Route[] = [
    // {
    //     name: 'projects_items_list',
    //     path: '/projects/items/list',
    //     component: 'self',
    //     meta: {
    //         title: '列表',
    //         requireAuth: true,
    //         activeMenu: 'projects'
    //     }
    // },
    {
        name: 'projects_items_whiteboard',
        path: '/projects/items/whiteboard',
        component: 'self',
        meta: {
            title: '白板',
            requireAuth: true,
            activeMenu: 'projects',
            noRedireact: true
        },
        children: [
            {
                name: 'projects_items_whiteboard_detail',
                path: '/projects/items/whiteboard/detail',
                component: 'self',
                meta: {
                    title: '任务详情',
                    requireAuth: true,
                    activeMenu: 'projects',
                },
            }
        ]
    },
    // {
    //     name: 'projects_items_timeline',
    //     path: '/projects/items/timeline',
    //     component: 'self',
    //     meta: {
    //         title: '时间线',
    //         requireAuth: true,
    //         activeMenu: 'projects'
    //     }
    // },
    {
        name: 'projects_items_statistics',
        path: '/projects/items/statistics',
        component: 'self',
        meta: {
            title: '任务统计',
            requireAuth: true,
            activeMenu: 'projects'
        }
    },
    {
        name: 'projects_items_files',
        path: '/projects/items/files',
        component: 'self',
        meta: {
            title: '文件',
            requireAuth: true,
            activeMenu: 'projects'
        }
    },
    
    {
        name: 'projects_items_trash',
        path: '/projects/items/trash',
        component: 'self',
        meta: {
            title: '回收站',
            requireAuth: true,
            activeMenu: 'projects'
        }
    },
]

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
            },
            children: projectItemsChildren
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
