import type { Router } from "vue-router";
import { useTitle } from "@vueuse/core";
import { createPermissionGuard } from "./permission";

export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        await createPermissionGuard(to, from, next)
    })

    router.afterEach((to) => {
        console.log(to)
        useTitle(to.meta.title)
    })
}
