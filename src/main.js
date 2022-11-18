import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app')
/*
Vue.use(VueRouter);

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});
*/

/*
new Vue({
  router,
  template: `
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');
*/

//Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
//setting baseurl here for axios, you can set any other constants here , and can access it anywhere in the code

// This is usually the JavaScript file that will initialise this root component into a element on your page. It is also responsible for setting up plugins and third-party components you may want to use in your app
