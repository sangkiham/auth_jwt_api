import { createRouter, createWebHistory } from "vue-router";
import VueCookies from 'vue-cookies'
import { refreshToken } from '../service/login'
import login from '../components/Login.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    components: {login: login},
    meta: { unauthorized : true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "home" */ "../components/Logout.vue"),
    meta: { unauthorized : true }  
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/HomeViewTest",
    name: "HomeViewTest",
    component: () => import(/* webpackChunkName: "about" */ "../views/HomeViewBk.vue"),
    meta: { unauthorized : true }
  },
  {
    path: "/test",
    name: "test",
    component:  () => import("../views/Test.vue"),
    meta: { unauthorized : true }
  },

];

const router = createRouter({
  history: createWebHistory(),
  //요건 원래 구조는 routes : [{path : String, component : 컴포넌트},]로 es6문법에 의해 축약해서 쓴 것(routes : routes)
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

export default router;
