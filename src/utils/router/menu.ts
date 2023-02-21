export function transformAuthRouteToMenu(routes: AuthRoute.Route[]){
    const globalMenus: App.GlobalMenuOption[] = []
    routes.forEach(route => {
        const { name, path, meta } = route
        let menuChildren: App.GlobalMenuOption[] | undefined

        if (route.children && route.children.length > 0) {
            menuChildren = transformAuthRouteToMenu(route.children)
        }

        const menItem = addPartialProps({
            menu: {
                key: name,
                label: meta.title,
                routeName: name,
                routePath: path
            },
            children: menuChildren
        })

        if (!hideMenu(route)) {
            globalMenus.push(menItem)
        }
    })

    return globalMenus
}

function hideMenu(route: AuthRoute.Route) {
    return Boolean(route.meta.hide)
}

function addPartialProps(option: {
    menu: App.GlobalMenuOption
    children?: App.GlobalMenuOption[]
}) {
    const item = { ...option.menu }
    if (option.children) {
        Object.assign(item, { children: option.children })
    }

    return item
}
