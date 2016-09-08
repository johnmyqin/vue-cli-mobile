/**
 * 引入文件
 */
import  Vue             from    'vue'
import  App             from    './App'
import  VueRouter       from    'vue-router'
import  VueResource     from    'vue-resource'
import  routerConfig    from    './router'

/**
 * 主样式表
 */
import  './assets/css/app.css'

/**
 * 基础样式表
 */
import  './assets/css/basics/reset.css'
import  './assets/css/basics/type.css'
import  './assets/css/basics/layout.css'

/**
 * 路由属性配置
 */
Vue.use(VueRouter)
const router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
})
routerConfig(router)

/**
 * 使用路由
 */
Vue.use(VueResource)
router.start(App, '#app')
window.router = router
