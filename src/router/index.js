import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    children: [
      {
        path: 'account',
        component: () => import('../components/SettingsAccount.vue'),
      },
      {
        path: 'privacy-and-security',
        component: () => import('../components/SettingsSecurity.vue'),
      },
      {
        path: 'notifications',
        component: () => import('../components/SettingsNoti.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
    ],
  },
  {
    path: '/settings-mobile',
    name: 'SettingMobile',
    component: () => import('../views/SettingsMobile.vue'),
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue'),
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
