import type { RouteComponent } from 'vue-router'

export const views: Record<
    PageRoute.LastDegreeRouteKey,
    RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  login: () => import('./_builtin/login/login.vue'),
  progresses: () => import('./progresses/index.vue'),
  calendars: () => import('./calendars/index.vue'),
  reports: () => import('./reports/index.vue'),
  events: () => import('./events/index.vue'),
  members: () => import('./members/index.vue'),
  uncompleted: () => import('./uncompleted/index.vue'),
  projects: () => import('./projects/index.vue'),
  projects_list: () => import('./projects/list/index.vue'),
  projects_creations: () => import('./projects/creations/index.vue'),
  projects_items: () => import('./projects/items/index.vue'),
  projects_items_list: () => import('./projects/items/list/index.vue'),
  projects_items_whiteboard: () => import('./projects/items/whiteboard/index.vue'),
  projects_items_whiteboard_detail: () => import('./projects/items/whiteboard/detail/index.vue'),
  projects_items_timeline: () => import('./projects/items/timeline/index.vue'),
  projects_items_files: () => import('./projects/items/files/index.vue'),
  projects_items_trash: () => import('./projects/items/trash/index.vue'),
  projects_items_statistics: () => import('./projects/items/statistics/index.vue'),

}
