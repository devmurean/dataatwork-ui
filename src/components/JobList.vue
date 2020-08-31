<template>
  <div class="job-list md:grid-cols-2 lg:grid-cols-3" v-if="!jobDetailVisibility">
    <!-- job items -->
    <job-item v-for="job in jobList" :key="job.uuid" :job="job"></job-item>
    <!-- load more trigger -->
    <!-- <button class="job-list__load-more-trigger">
      <fa-icon icon="chevron-down"></fa-icon>
    </button>-->
  </div>
</template>

<script>
import jobItemVue from "./jobItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "JobList",
  components: {
    "job-item": jobItemVue,
  },
  computed: {
    ...mapGetters(["jobList", "jobDetailVisibility"]),
  },
};
</script>

<style lang="scss" scoped>
.job-list {
  @apply w-full max-w-screen-xl mx-auto grid grid-cols-1 gap-6 px-2;
}

.job-list__load-more-trigger {
  @apply p-2 max-w-screen-sm mx-auto w-full border border-blue-500;
}
</style>