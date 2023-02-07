/**
 * 
 * @returns 获取登录页面的动态路由正则
 */
export function getLoginModuleRegExp(){
    const modules = ['pwd-login', 'register']
    return modules.join('|')
}
