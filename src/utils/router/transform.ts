import { RouteRecordRaw } from 'vue-router'
import { getLayoutComponent, getViewComponent } from './component'

type ComponentAction = Record<AuthRoute.RouteComponentType, () => void>

export function transformAuthRouteToVueRoutes(routes: AuthRoute.Route[]){
    return routes.map(route => transformAuthRouteToVueRoute(route)).flat(1)
}

export function transformAuthRouteToVueRoute(route: AuthRoute.Route){
    const resultRoutes: RouteRecordRaw[] = []

    const itemRoute = { ...route } as RouteRecordRaw

    if (hasComponent(route)) {
        const action: ComponentAction = {
            basic() {
                itemRoute.component = getLayoutComponent('basic')
            },
            blank() {
                itemRoute.component = getLayoutComponent('blank')
            },
            self() {
                itemRoute.component = getViewComponent(route.name as PageRoute.LastDegreeRouteKey)
            }
        }
        try {
            if (route.component) {
                action[route.component]()
            } else {
                window.console.error('路由组件解析失败: ', route)
            }
        } catch {
            window.console.error('路由组件解析失败: ', route)
        }
    }
    
    resultRoutes.push(itemRoute)
    return resultRoutes
}

export function hasComponent(item: AuthRoute.Route) {
    return Boolean(item.component)
}
