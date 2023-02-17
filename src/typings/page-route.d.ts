declare namespace PageRoute {

    type RootRouteKey = 'root'

    type NotFoundRouteKey = 'not-found'

    type RouteKey =
        | '403'
        | '404'
        | '500'
        | 'login'
        | 'whiteboard'
        | 'management'

    type LastDegreeRouteKey = Extract<
        RouteKey,
        | '403'
        | '404'
        | '500'
        | 'login'
        | 'whiteboard'
    >
}
