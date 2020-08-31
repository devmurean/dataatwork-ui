<template>
  <div class="job-item shadow">
    <!-- job title -->
    <p class="job-item__title">{{ job.suggestion }}</p>
    <!-- show detail trigger -->
    <button class="job-item__show-detail-trigger" @click="showJobDetail(job.uuid)">
      <fa-icon icon="chevron-circle-right"></fa-icon>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "JobItem",
  props: {
    job: {
      required: true,
      type: Object,
    },
  },
  methods: {
    async showJobDetail(jobUUID) {
      this.toggleJobDetailVisibility();
      this.selectJob(jobUUID);
      this.fetchSkills(jobUUID);
    },
    async fetchSkills(jobUUID) {
      let url = `http://api.dataatwork.org/v1/jobs/${jobUUID}/related_skills`;
      let response = await axios({
        method: "get",
        url: url,
      });
      let skills = response.data.skills.filter(
        ({ importance, level }) => importance >= 3 && level >= 3
      );

      console.log(skills);
      this.storeRelatedSkills(skills);
    },
    ...mapMutations([
      "toggleJobDetailVisibility",
      "selectJob",
      "storeRelatedSkills",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.job-item {
  @apply border-t-2 border-blue-500 w-full mx-auto relative p-4 bg-transparent text-white;
}

.job-item__title {
  @apply text-left;
}

.job-item__show-detail-trigger {
  @apply absolute right-0 top-0 p-4;
}
</style>