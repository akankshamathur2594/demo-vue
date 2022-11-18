<template>
<div>
<h2> Lifecycle </h2>
<span> {{response}} </span> <br>
<input ref="input" />
</div>

</template>
<script>
export default {
     data() {
        return {
            response: '',
        };
    },
    mounted() {
    console.log(`the component is now mounted.`);
    this.response = " the component is now mounted.";
    this.$refs.input.focus();
  }
}

</script>
