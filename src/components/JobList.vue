<template>
  <div class="job-list">
    <!-- job items -->
    <job-item></job-item>
    <!-- load more trigger -->
    <button class="job-list__load-more-trigger">
      <fa-icon icon="chevron-down"></fa-icon>
    </button>
  </div>
</template>

<script>
import jobItemVue from "./jobItem.vue";

export default {
  name: "JobList",
  components: {
    "job-item": jobItemVue,
  },
};
</script>

<style lang="scss" scoped>
.job-list {
  @apply w-full max-w-screen-xl mx-auto;
}

.job-list__load-more-trigger {
  @apply p-2 max-w-screen-sm mx-auto w-full border border-blue-500;
}
</style>