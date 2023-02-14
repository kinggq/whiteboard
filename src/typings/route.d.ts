declare namespace AuthRoute {
    type RootRouteKey = PageRoute.RootRouteKey

    type NotFoundRouteKey = PageRoute.NotFoundRouteKey

    type RouteKey = PageRoute.RouteKey

    type AllRouteKey = RouteKey | NotFoundRouteKey | RootRouteKey

    type RouteComponentType = 'basic | blank' | 'self'

    type RouteMeta = {
        title: string
        icon?: string
        hide?: boolean
        keepAlive?: boolean
        order?: number
    }

    type Route<K extends AllRouteKey = AllRouteKey> = K extends AllRouteKey
    ? {
        name: K
        path: AuthRouteUtils.GetRoutePath<K>
        redirect?: AuthRouteUtils.GetRoutePath
        component?: RouteComponentType
        children?: Route[]
        meta: RouteMeta
    }
    : never

    type RouteModule = Record<string, { default: Route }>
}

declare namespace AuthRouteUtils {
    type BlankString = ''

    type RouteKeySplitMark = '_'

    type RoutePathSplitMark = '/'

    // key 转换成 path
    type KeyToPath<K extends string> = K extends `${infer _Left}${RouteKeySplitMark}${RouteKeySplitMark}${infer _Right}`
        ? never
        : K extends `${infer Left}${RouteKeySplitMark}${infer Right}`
            ? Left extends BlankString
            ? never
            : Right extends BlankString
            ? never
            : KeyToPath<`${Left}${RoutePathSplitMark}${Right}`>
        : `${RoutePathSplitMark}${K}`

    // 根据路由 key 获取路由路径
    type GetRoutePath<K extends AuthRoute.AllRouteKey = AuthRoute.AllRouteKey> = K extends AuthRoute.AllRouteKey
        ? K extends AuthRoute.RouteKey
            ? AuthRoute.RootRouteKey
            : K extends AuthRoute.NotFoundRouteKey
            ? AuthRoute.NotFoundRouteKey
            : KeyToPath<K>
        : never
}
