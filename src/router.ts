import Vue from 'vue';
import Router from 'vue-router';
import App from './views/Home.vue';

Vue.use(Router);


export default new Router({
    // mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/entrance',
            name: 'entrance',
            component: () => import(/* webpackChunkName: "about" */ './views/login/entrance.vue'),
            children: [
                {
                    path: '',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "about" */ './views/login/login.vue'),
                },
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/register',
                    name: 'register',
                    component: () => import(/* webpackChunkName: "about" */ './views/login/register.vue'),
                },
                {
                    path: '/retrieve',
                    name: 'retrieve',
                    component: () => import(/* webpackChunkName: "about" */ './views/login/retrieve.vue'),
                }
            ]
        },
        {
            path: '/serviceCenter',
            name: 'serviceCenter',
            component: () => import(/* webpackChunkName: "about" */ './views/serviceCenter/service.vue'),
            children: [
                {
                    path: '',
                    name: 'issueList',
                    component: () => import(/* webpackChunkName: "about" */ './views/serviceCenter/issue/issueList.vue'),
                }
            ]
        },
        {
            path: '/',
            name: 'App',
            component: App,
            children: [
                // {
                //     path: '',
                //     name: 'plaza',
                //     component: () => import(/* webpackChunkName: "about" */ './views/plaza.vue'),
                // },
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/mine',
                    name: 'mine',
                    component: () => import(/* webpackChunkName: "about" */ './views/mine/mine.vue'),
                },
                {
                    path: '/news',
                    name: 'news',
                    component: () => import(/* webpackChunkName: "about" */ './views/news/news.vue')
                },
                {
                    path: '',
                    name: 'find',
                    redirect: '/all',
                    component: () => import(/* webpackChunkName: "about" */ './views/find/find.vue'),
                    children: [
                        {
                            path: '/all',
                            name: 'all',
                            component: () => import(/* webpackChunkName: "about" */ './views/find/all.vue'),
                        },
                        {
                            path: '/circle',
                            name: 'circle',
                            component: () => import(/* webpackChunkName: "about" */ './views/find/circle.vue'),
                        },
                        {
                            path: '/attention',
                            name: 'attention',
                            component: () => import(/* webpackChunkName: "about" */ './views/find/attention.vue'),
                        }
                    ]
                }
            ]
        },
        {
            path: '/Other',
            name: 'Other',
            component: () => import(/* webpackChunkName: "about" */ './views/Other.vue'),
        },
        {
            path: '/sift',
            name: 'sift',
            component: () => import(/* webpackChunkName: "about" */ './views/sift.vue'),
        }, {
            path: '/personsindex',
            name: 'personsindex',
            component: () => import(/* webpackChunkName: "about" */ './views/personsindex.vue'),
        }, {
            path: '/set',
            name: 'set',
            component: () => import(/* webpackChunkName: "about" */ './views/set/set.vue'),
        }, {
            path: '/Us',
            name: 'Us',
            component: () => import(/* webpackChunkName: "about" */ './views/set/AboutUs.vue'),
        }, {
            path: '/circles',
            name: 'circles',
            component: () => import(/* webpackChunkName: "about" */ './views/circle.vue'),
        }, {
            path: '/publish',
            name: 'publish',
            component: () => import(/* webpackChunkName: "about" */ './views/publish.vue'),
        }, {
            path: '/pasteDetails',
            name: 'pasteDetails',
            component: () => import(/* webpackChunkName: "about" */ './views/pasteDetails.vue'),
        }
        // 
    ],
});
