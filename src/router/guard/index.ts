import type { Router } from "vue-router";
import { createPermissionGuard } from "./permission";

export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        await createPermissionGuard(to, from, next)
    })

    router.afterEach((to) => {
        
    })
}
