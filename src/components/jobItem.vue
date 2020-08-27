<template>
  <div class="job-item">
    <!-- job title -->
    <p class="job-item__title">{{ job.suggestion }}</p>
    <!-- show detail trigger -->
    <button class="job-item__show-detail-trigger" @click="toggleJobDetailVisibility">
      <fa-icon icon="chevron-circle-right"></fa-icon>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "JobItem",
  props: {
    job: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapMutations(["toggleJobDetailVisibility"]),
  },
};
</script>

<style lang="scss" scoped>
.job-item {
  @apply border border-blue-500 w-full max-w-screen-sm mx-auto mb-6 relative p-2;
}

.job-item__title {
  @apply text-blue-500 text-left;
}

.job-item__show-detail-trigger {
  @apply absolute right-0 top-0 text-blue-500 p-2;
}
</style>