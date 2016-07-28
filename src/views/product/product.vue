<template>
    <div class="product">
        商品详情页
        <p style="height:1000px; background:#ccc;">

        </p>
        <p style="height:1000px; background:#ff6600;">

        </p>
    </div>
</template>

<script type="text/javascript">
import MtSwipe                  from    'mint-ui/lib/swipe'
import MtSwipeItem              from    'mint-ui/lib/swipe-item';
import {globalConst,globaFun}   from   '../../config.js'
import {getProduct}             from   '../../vuex/getters'
import {setProduct}             from   '../../vuex/actions'

export default {
    data(){
        return{
            details:{},
        }
    },
    components:{
        MtSwipe,
        MtSwipeItem
    },
    vuex: {
        getters: {
           orderList: getProduct,
        },
        actions: {
           product: setProduct,
        }
    },
    route: {
        data({
            to: {
                params: {
                    productid
                }
            }
        }) {
            window.scrollTo(0, 0);
            console.log(productid);
            console.log(globalConst.apiUrl);
            console.log(globaFun.test(1));
            this.product({productId: productid});
            console.log(this.orderList);
        }
    }
}

</script>
