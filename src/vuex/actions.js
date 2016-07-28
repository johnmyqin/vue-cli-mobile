// action 会收到 store 作为它的第一个参数
// 在 store 里我们只需要 dispatch （在有些情况下需要 state）
// 我们可以利用 ES6 的解构（destructuring）语法来简化参数的使用

import Vue              from    'vue'
import {globalConst}    from    '../config.js'

//产品详情
export const setProduct = function({dispatch,state}, data) {
    console.log(data);
    this.$http.get('url',data).then((response) => {
        // success callback
        console.log(response);
    }, (response) => {
    // error callback
        console.log(response);
    });
}
