<template>
  <div id="app">
    <div class="main-navigation">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-navigation {
  padding: 30px;

  a {
    font-weight: bold;
    @apply text-gray-600;

    &.router-link-exact-active {
      @apply text-blue-500;
    }
  }
}
</style>
