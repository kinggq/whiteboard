
import type { RouteComponent } from 'vue-router'

export const views: Record<
    PageRoute.LastDegreeRouteKey,
    RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
    403: () => import('./_builtin/403/index.vue'),
    404: () => import('./_builtin/404/index.vue'),
    500: () => import('./_builtin/500/index.vue'),
    login: () => import('./_builtin/login/login.vue'),
    whiteboard: () => import('./whiteboard/whiteboard.vue')
}
