import { RouteLocationRaw, useRouter } from 'vue-router';
import { routeName, router as globalRouter } from '@/router'

/**
 * 路由跳转
 * @param inSetup 是否在 setup 中调用
 */
export function useRouterPush(inSetup = true) {
    const router = inSetup ? useRouter() : globalRouter
    const route = globalRouter.currentRoute

    /**
     * 路由跳转
     * @param toPath 需要跳转的页面
     * @param newTab 是否打开新的浏览器标签
     */
    function routerPush(toPath: RouteLocationRaw, newTab = false) {
        if (newTab) {
            const routerData = router.resolve(toPath)
            window.open(routerData.href, '_blank')
        } else {
            router.push(toPath)
        }
    }

    /**
     * 跳转到登录页面
     * @param loginModel 展示的登录模块
     * @param redirectUrl 重定向地址
     */
    function toLogin(loginModel?: EnumType.LoginModuleKey, redirectUrl?: string) {
        const module = loginModel || 'pwd-login'
        const routerInfo = {
            name: routeName('login'),
            params: { module }
        }

        const redirect = redirectUrl || route.value.fullPath
        Object.assign(routerInfo, { query: { redirect } })
        routerPush(routerInfo)
    }

    /**
     * 跳转到首页
     * @param newTab 
     */
    function toHome(newTab = false) {
        routerPush({ name: routeName('root')}, newTab)
    }

    /**
     * 登录成功后跳转到重定向的页面
     */
    function toLoginRedirect() {
        const { query } = route.value
        if (query.redirect) {
            routerPush(query.redirect as string)
        } else {
            toHome()
        }
    }

    return {
        routerPush,
        toLogin,
        toHome,
        toLoginRedirect
    }
}
