import Vue from 'vue'
import Router from 'vue-router'
import {tablepage} from './tablepage'
import {datalist} from './datalist'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: `/datainput`,
      name: 'datainput',
      component: resolve => require(['../views/datainput'], resolve),
      children: datalist,
      meta: {
        title: '数据导入'
      }
    },
    {
      path: `/mouldselect`,
      name: 'mouldselect',
      component: () => import('@/views/mouldselect.vue'),
      children: tablepage,
      meta: {
        title: '模板选择'
      }
    },
    {
      path: `/success`,
      name: 'success',
      component: () => import('@/views/success.vue'),
      children: tablepage,
      meta: {
        title: '图表生成'
      }
    },
    // {
    //   path: `/a`,
    //   name: 'a',
    //   component: resolve => require(['../views/datatemplate/a'], resolve),
    //   meta: {
    //     title: '目录界面'
    //   }
    // },
    {
      path: `/index`,
      name: 'index',
      component: resolve => require(['../views/index'], resolve),
      meta: {
        title: '目录界面'
      }
    },
    {
      path: `/test`,
      name: 'test',
      component: () => import('@/views/test.vue'),
      meta: {
        title: '目录界面'
      }
    },
    {
      path: `/`,
      name: 'start',
      component: resolve => require(['../views/start'], resolve),
      meta: {
        title: '开始界面'
      }
    }
    // {
    //   path: `*`,
    //   name: 'index',
    //   component: () => import('@/views/index.vue'),
    //   meta: {
    //     title: '目录界面'
    //   }
    // }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
