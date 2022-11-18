<template>
<div>
<button type="button" @click='passEvent'> Update me</button>
</div>
</template>
<script>
export default {
  name:'ChildComp',
  methods:{
    passEvent()
    {
      this.$emit('changeTitle','Awesome ')
    }
  }
}
</script>