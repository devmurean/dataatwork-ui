<template>
  <div>
    <div
      v-if="errorBoxVisibility"
      class="w-full p-2 bg-red-600 text-center text-gray-800"
    >{{ errorBoxMessage }}</div>
    <div class="main-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["errorBoxVisibility", "errorBoxMessage"]),
  },
};
</script>

<style lang="scss">
.main-navigation {
  @apply p-4 text-center;

  a {
    font-weight: bold;
    @apply text-gray-600 mx-2;

    &.router-link-exact-active {
      @apply text-blue-500;
    }
  }
}
</style>
