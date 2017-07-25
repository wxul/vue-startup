import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: require('@page/index'),
}, {
    path: '/about',
    component: require('@page/about'),
}];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active',
    routes
});

export default router;