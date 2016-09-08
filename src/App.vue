<!--app主入口-->
<template>
    <div id="app">
        <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
    </div>
</template>

<script>
    import store from './vuex/store'
    import {locals} from './config'
    export default {
        components: {
        },
        // 在根组件加入 store，让它的子组件和 store 连接
        store 
    }
</script>