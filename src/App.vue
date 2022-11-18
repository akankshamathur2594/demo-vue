<template>
  <div id="app">
  <a href="#">Home</a> |
  <a href="#">About Us</a> |
  <a href="#">Lifecycle demo</a>
  <component :is="currentView" />
  
    <HelloWorld msg="Hi , this is a demo app"/>
    <hr>
    <CounterComp parentMsg = "Hi, this message is from parent"/>
    <hr>
    <LifecycleDemo/>
    <hr>
    <ShowData/>
    <hr>
    <h3>{{ title }}</h3>
    <ChildComp @changeTitle="ChangeT($event)" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterComp from './components/CounterComp.vue'
import ShowData from  './components/ShowData.vue'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import LifecycleDemo from './components/LifecycleDemo.vue'
import ChildComp from './components/ChildComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CounterComp,
    ShowData,
    LifecycleDemo,
    HomePage,
    AboutUs,
    ChildComp
  },
  data()
  {
   return{
     title:'This space will be changed by child component'
         }
  },
  
  methods:{
    ChangeT(title)
    {
      this.title=title;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- This is typically the root of your application defined in Vue.js Component file format. It's usually something that defines the template for your page -->