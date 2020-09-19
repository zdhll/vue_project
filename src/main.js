// 入口文件
import Vue from 'vue';

import './lib/mui/css/mui.min.css';

//导入 App 根组件
import app from './App.vue';

//按需导入mintUI中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    render: c => c(app)
});