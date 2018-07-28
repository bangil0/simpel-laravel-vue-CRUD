
require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

const Listposts = Vue.component('Listposts',require('./components/Listposts.vue'));
const Addposts = Vue.component('Addposts',require('./components/Addposts.vue'));
const Viewposts = Vue.component('Viewposts',require('./components/Viewposts.vue'));
const Editposts = Vue.component('Editposts',require('./components/Editposts.vue'));
const Deleteposts = Vue.component('Deleteposts',require('./components/Deleteposts.vue'));

Vue.use(VueRouter,VueAxios,axios);

const routes = [
  {
    name:'Listposts',
    path:'/',
    component: Listposts
  },
  {
    name:'Addposts',
    path:'/add-posts',
    component: Addposts
  },
  {
    name:'Viewposts',
    path:'/view/:id',
    component: Viewposts
  },
  {
    name:'Editposts',
    path:'/edit/:id',
    component: Editposts
  },
  {
    name:'Deleteposts',
    path:'/post-delete/:id',
    component: Deleteposts
  },
]

const router = new VueRouter({ mode:'history', routes:routes });

new Vue(
  Vue.util.extend({router},AppLayout)
).$mount('#app');
