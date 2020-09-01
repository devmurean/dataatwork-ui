<template>
  <div v-if="loadingLayerVisibility" class="loading">
    <transition
      tag="div"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <fa-icon class="fa-spin loading__spinner" icon="cog"></fa-icon>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  z-index: 999;
  @apply absolute w-full block h-screen bg-gray-800 top-0 left-0;
}

.loading__spinner {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply text-white text-5xl absolute;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoadingLayer",
  computed: {
    ...mapGetters(["loadingLayerVisibility"]),
  },
};
</script>