import type { Router } from "vue-router";
import { useTitle } from "@vueuse/core";
import { createPermissionGuard } from "./permission";

export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        window.$loadingBar?.start()
        await createPermissionGuard(to, from, next)
    })

    router.afterEach((to) => {
        window.$loadingBar?.finish()
        useTitle(to.meta.title)
    })
}
