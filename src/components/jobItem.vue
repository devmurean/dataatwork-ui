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
import { mapMutations, mapActions } from "vuex";
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
      this.toggleLoadingLayerVisibility();
      this.fetchSkills(jobUUID);
    },
    async fetchSkills(jobUUID) {
      try {
        let axiosParams = {
          method: "get",
          url: `http://api.dataatwork.org/v1/jobs/${jobUUID}/related_skills`,
        };
        let response = await axios(axiosParams);
        let skills = response.data.skills.filter(
          ({ importance, level }) => importance >= 3 && level >= 3
        );

        this.storeRelatedSkills(skills);
      } catch (error) {
        this.showErrorBox("There is an error");
      }

      this.toggleLoadingLayerVisibility();
    },
    ...mapActions(["showErrorBox", "toggleLoadingLayerVisibility"]),
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
  max-width: 95%;
  @apply text-left;
}

.job-item__show-detail-trigger {
  @apply absolute right-0 top-0 p-4;
}
</style>