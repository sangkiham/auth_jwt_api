import { createRouter, createWebHistory } from "vue-router";
import VueCookies from 'vue-cookies'
import { refreshToken } from '../service/login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/Login.vue"),
    meta: { unauthorized : true }    
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import("../components/Logout.vue"),
    meta: { unauthorized : true }  
  },
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/HelloView',
    name: 'helloView',
    component: () => import('../views/HelloView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( async(to, from, next) => {

  console.log('token=' + JSON.stringify(VueCookies.get('token')));
  console.log('refresh_token=' + JSON.stringify(VueCookies.get('refresh_token')));
  if (to.name === 'login') {
    VueCookies.remove('token');
    VueCookies.remove('refresh_token');
  }

  if(VueCookies.get('token')===null && VueCookies.get('refresh_token') !== null){
    console.log('refreshToken');
    await refreshToken();
  }

  console.log('after refresh token=' + JSON.stringify(VueCookies.get('token')));
  console.log(
    'if = ' +
      (
      to.matched.some(record => record.meta.unauthorized) 
      || (!to.matched.some(record => record.meta.unauthorized) && from.name === 'login')
      || VueCookies.get('token')
      )
  );

  if (
      to.matched.some(record => record.meta.unauthorized) 
      || (!to.matched.some(record => record.meta.unauthorized) && from.name === 'login')
      || VueCookies.get('token')
  ){
    console.log('next');
    return next();
  }

  alert('로그인 해주세요');
  return next('/login');
})

export default router
