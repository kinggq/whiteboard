/**
 * 排序权限路由
 * @param routes 权限路由
 * @returns 排序后的权限路由
 */
export function sortRoutes(routes: AuthRoute.Route[]) {
    return routes.sort((a, b) => Number(a.meta.order) - Number(b.meta.order))
}

/**
 * 处理全部导入的路由模块
 * @param modules 路由模块
 * @returns 处理后的路由模块
 */
export function handleModuleRoutes(modules: AuthRoute.RouteModule) {
    const routes: AuthRoute.Route[] = []

    Object.keys(modules).forEach(key => {
        const item = modules[key].default
        if (item) {
            routes.push(item)
        } else {
            window.console.error(`路由模块解析出错: key = ${key}`)
        }
    })

    return sortRoutes(routes)
}
