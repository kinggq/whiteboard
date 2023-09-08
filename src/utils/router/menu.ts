export function transformAuthRouteToMenu(routes: AuthRoute.Route[]) {
  const globalMenus: App.GlobalMenuOption[] = []
  routes.forEach((route) => {
    const { name, path, meta } = route
    if (!hideMenu(route)) {
      globalMenus.push({
        key: name,
        label: meta.title,
        routeName: name,
        routePath: path,
      })
    }
  })

  return globalMenus
}

function hideMenu(route: AuthRoute.Route) {
  return Boolean(route.meta.hide)
}
