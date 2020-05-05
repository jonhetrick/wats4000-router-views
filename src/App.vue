<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind:to="{name: 'home'}">Home</router-link>
      <router-link v-bind:to="{name: 'survey'}">Survey</router-link>
      <router-link v-bind:to="{name: 'secret'}">Secret</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 75%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
}
body,
html {
  background: #666;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
