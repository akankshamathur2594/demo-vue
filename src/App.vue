<template>
  <div id="app">
    <HelloWorld msg="Hi , this is a demo app"/>
    <CounterComp parentMsg = "Hi, this message is from parent"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterComp from './components/CounterComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CounterComp
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