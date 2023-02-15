/**
 * 获取所有固定路由的名称集合
 * @param routes 
 * @returns 
 */
export function getConstantRouteNames(routes: AuthRoute.Route[]) {
    return routes.map(route => getConstantRouteName(route)).flat(1)
}

/**
 * 获取所有固定路由的名称集合
 * @param route 
 * @returns 
 */
function getConstantRouteName(route: AuthRoute.Route) {
    const names = [route.name]
    if (route.children?.length) {
        names.push(...route.children.map(item => getConstantRouteName(item)).flat(1))
    }
    return names
}
