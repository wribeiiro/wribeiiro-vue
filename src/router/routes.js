import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: () => import('../pages/Home')
    }, {
        path: '/about',
        alias: '/about',
        component: () => import('../pages/About')
    }, {
        path: '/education',
        alias: '/education',
        component: () => import('../pages/Education')
    }, {
        path: '/experience',
        alias: '/experience',
        component: ()=> import('../pages/Experience')
    }, {
        path: '/work',
        alias: '/work',
        component: () => import('../pages/Work')
    }, {
        path: '/contact',
        alias: '/contact',
        component: () => import('../pages/Contact')
    }/*, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice,
        beforeEnter: (to, from, next) => {
            next();
        }
    }, {
        path: '*',
        component: Page404
    }*/]
})