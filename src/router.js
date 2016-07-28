export default function(router) {
    router.map({
        '*': {
            component(resolve) {
                require(['./views/Home'], resolve)
            }
        },
        '/index': {
            component(resolve) {
                require(['./views/Home'], resolve)
            }
        },
        '/product/:productid': {
            component(resolve) {
                require(['./views/product/product'], resolve)
            }
        },
    })
}
