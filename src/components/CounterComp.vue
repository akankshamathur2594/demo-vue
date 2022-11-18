<template>
    <div class="counterCompClass">
    Parent msg : {{parentMsg}}<br>
      This is counterComp 
      <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

<script>
export default {

  name: 'CounterComp',
  
  props: {
    parentMsg: String
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>

</style>

<!--PROPS GIVE DEGINITION TO THE VARIABLE THAT ARE USED IN THIS VUE -->