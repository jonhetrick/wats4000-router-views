<template>
  <div class="secret">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Secret',
  data () {
    return {
      message: 'You Did It! 🚀'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secret {
  background: black;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
  color: greenyellow;
}
</style>
