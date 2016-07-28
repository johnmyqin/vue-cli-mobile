

<template>

<div class="index">
    <p style="height:1000px; background:#ccc;"></p>
    <a v-link='{ path: "/product/123"}'>点击跳转到详情</a>
    <p style="height:1000px; background:#ff6600;"></p>
</div>

</template>

<script type="text/javascript">
    export default{
        route: {
            activate: function (transition) {
                transition.next();
            },
        }
    }
</script>
