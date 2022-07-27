import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	linkExactActiveClass: 'link-active',
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('../pages/HomePage')
		}, {
			path: '/education',
			component: () => import('../pages/EducationPage')
		}, {
			path: '/experience',
			component: ()=> import('../pages/ExperiencePage')
		}, {
			path: '/work',
			component: () => import('../pages/WorkPage')
		}, {
			path: '/contact',
			component: () => import('../pages/ContactPage')
		},{
			path: '*',
			component: () => import('../pages/404Page')
		}
	]
})