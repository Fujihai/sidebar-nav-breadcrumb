import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShenzhenPage from '@/components/ProvincePages/ShenzhenPage'
import ZhuhaiPage from '@/components/ProvincePages/ZhuhaiPage'
import GuangzhouPage from '@/components/ProvincePages/GuangzhouPage'
import DongxingPage from '@/components/ProvincePages/DongxingPage'
import NanningPage from '@/components/ProvincePages/NanningPage'
import LiuzhouPage from '@/components/ProvincePages/LiuzhouPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/shenzhen',
      meta: {
        keepalive: true
      },
      children: [{
        path: '/shenzhen',
        name: 'ShenzhenPage',
        component: ShenzhenPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广东', '深圳']
        }
      }
      ,{
        path: '/guangzhou',
        name: 'GuangzhouPage',
        component: GuangzhouPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广东', '广州']
        }
      },{
        path: '/zhuhai',
        name: 'ZhuhaiPage',
        component: ZhuhaiPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广东', '珠海']
        }
      },{
        path: '/nanning',
        name: 'NanningPage',
        component: NanningPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广西', '南宁']
        }
      },{
        path: '/dongxing',
        name: 'DongxingPage',
        component: DongxingPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广西', '东兴']
        }
      },{
        path: '/liuzhou',
        name: 'LiuzhouPage',
        component: LiuzhouPage,
        meta: {
          keepalive: true,
          breadcrumb: ['广西', '柳州']
        }
      }
    ]
    }
  ]
})
