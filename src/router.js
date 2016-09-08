/**
 * 路由入口配置
 */
export default function(router) {
    router.map({
        '*': {
            component(resolve) {
                require(['./views/home'], resolve)
            }
        },
        '/index': {
            component(resolve) {
                require(['./views/home'], resolve)
            }
        },
        '/shop/:shopid': {
            component(resolve) {
                require(['./views/shop/shop'], resolve)
            }
        },
    })
}
