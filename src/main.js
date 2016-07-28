import  Vue             from    'vue'
import  App             from    './App'
import  VueRouter       from    'vue-router'
import  VueResource     from    'vue-resource'
import  routerConfig    from    './router'

// 样式表
import  './assets/css/normalize.css'
import  './assets/css/style.css'
import  './assets/css/common.css'
import  'mint-ui/lib/style.css';

//路由
Vue.use(VueRouter)
const router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
})
routerConfig(router)

// Resource
Vue.use(VueResource)

router.start(App, '#app')
window.router = router
