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
        | 'projects_creations'
        | 'projects_items'
        | 'projects_items_list'
        | 'projects_items_timeline'
        | 'projects_items_files'
        | 'projects_items_trash'
        | 'projects_items_whiteboard'
        | 'projects_items_whiteboard_detail'

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
        | 'projects_creations'
        | 'projects_items'
        | 'projects_items_list'
        | 'projects_items_whiteboard'
        | 'projects_items_timeline'
        | 'projects_items_files'
        | 'projects_items_trash'
        | 'projects_items_whiteboard_detail'
    >
}
