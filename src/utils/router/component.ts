import type { RouteComponent } from 'vue-router'
import { BasicLayout, BlankLayout } from '@/layouts'
import { views } from '@/views'
import { isFunction } from '../common'

type Lazy<T> = () => Promise<T>

interface ModuleComponent {
    default: RouteComponent
}

type LayoutComponent = Record<EnumType.LayoutComponentName, Lazy<ModuleComponent>>

export function getLayoutComponent(layoutType: EnumType.LayoutComponentName) {
    const layoutComponent: LayoutComponent = {
        basic: BasicLayout,
        blank: BlankLayout,
    }
    return layoutComponent[layoutType]
}

export function getViewComponent(routeKey: PageRoute.LastDegreeRouteKey) {
    if (!views[routeKey]) {
        throw new Error(`路由“${routeKey}”没有对应的组件文件`)
    }
    return setViewComponentName(views[routeKey], routeKey)
}

export function setViewComponentName(component: RouteComponent, name: PageRoute.LastDegreeRouteKey) {
    if (isAsyncComponent(component)) {
        return async () => {
            const result = await component()
            Object.assign(result.default, { name })
            return result
        }
    }

    Object.assign(component, { name })
    return component
}

export function isAsyncComponent(component: RouteComponent | Lazy<ModuleComponent>): component is Lazy<ModuleComponent> {
    return isFunction(component)
}
