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

    if (isSingleLayout(route)) {
        if (hasChildren(route)) {
            window.console.error('单独路由不应该有子路由', route)
        } else {
            const layout = route.meta.singleLayout === 'basic' ? getLayoutComponent('basic') : getLayoutComponent('blank')
            
            const parentRoute: RouteRecordRaw = {
                path: `${itemRoute.path}-parent`,
                component: layout,
                redirect: route.path,
                children: [itemRoute]
            }
            return [parentRoute]
        }
    }
    
    
    resultRoutes.push(itemRoute)
    return resultRoutes
}

/**
 * 是否有路由组件
 * @param item 
 * @returns 
 */
export function hasComponent(item: AuthRoute.Route) {
    return Boolean(item.component)
}

/**
 * 是否有子路由
 * @param item 
 * @returns boolean
 */
function hasChildren(item: AuthRoute.Route) {
    return Boolean(item.children && item.children.length)
}

/**
 * 是否是但层级路由
 * @param item 
 * @returns 
 */
function isSingleLayout(item: AuthRoute.Route) {
    return Boolean(item.meta.singleLayout)
}

