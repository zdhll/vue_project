// 入口文件
import Vue from 'vue';

//导入路由的包
import VueRouter from 'vue-router';
//安装路由模块
Vue.use(VueRouter);


//导入 vue-resource
import VueResource from 'Vue-resource';
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root = 'http://localhost:3000/';


import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入 App 根组件
import app from './App.vue';

//按需导入mintUI中的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


//导入自己的router.js模块
import router from './router.js';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
});