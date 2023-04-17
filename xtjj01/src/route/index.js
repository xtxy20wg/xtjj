import { createRouter, createWebHashHistory } from 'vue-router'
// 引入组件
import App from '../App.vue'
import NotFound from '../components/NotFound.vue'
import list from '../components/AppContentList.vue'
import Listone from '../components/AppListOne.vue'
import Listtwo from '../components/AppListTwo.vue'
const login = () => import(/* webpackChunkName:'login'*/'../login/AppLogin.vue')
const home = () => import(/* webpackChunkName:'home'*/'../page/AppHome.vue')

// 映射关系
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/app",
            component: App,
            children: [
                {
                    path: '/',
                    redirect: '/login'
                },
                {
                    path: '/home',
                    component: home,
                    children:[
                        {
                            path:'/list',
                            component:list,
                            children:[
                                {
                                path:'/Listone',
                                component:Listone,
                                name:'Listnoe'
                             },
                             {
                                path:'/Listtwo',
                                component:Listtwo,
                                name:'Listtwo'
                             },
                            ]
                        }
                    ]
                },
                {
                    path: '/login',
                    component: login
                },
                {   
                    path: '/:pathMatch(.*)',
                    component: NotFound

                }

            ]
        }
    ]
})


export default router