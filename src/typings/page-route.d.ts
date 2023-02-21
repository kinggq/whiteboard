declare namespace PageRoute {

    type RootRouteKey = 'root'

    type NotFoundRouteKey = 'not-found'

    type RouteKey =
        | '403'
        | '404'
        | '500'
        | 'login'
        | 'progresses'
        | 'management'
        | 'projects'
        | 'calendars'
        | 'reports'
        | 'events'
        | 'members'
        | 'uncompleted'
        | 'projects_list'
        | 'projects_items'
        | 'projects_creations'

    type LastDegreeRouteKey = Extract<
        RouteKey,
        | '403'
        | '404'
        | '500'
        | 'login'
        | 'progresses'
        | 'projects'
        | 'calendars'
        | 'reports'
        | 'events'
        | 'members'
        | 'uncompleted'
        | 'projects_list'
        | 'projects_items'
        | 'projects_creations'
    >
}
