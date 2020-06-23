import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Register from '../views/Register';
import Me from '../views/Me';
import About from '../views/About';
import Profile from '../views/Profile';
import Login from '../views/Login';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },  
  {
    path: '/me',
    component: Me
  },
  {
    path: '/about',
    component:About
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
