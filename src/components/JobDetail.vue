<template>
  <div class="job-detail" v-if="jobDetailVisibility">
    <!-- hide this component trigger -->
    <button class="job-detail__hide-trigger" @click="toggleJobDetailVisibility">
      <fa-icon icon="times"></fa-icon>
    </button>

    <!-- Title: Related Skills -->
    <p class="job-detail__title">{{ selectedJob.suggestion }}</p>
    <p class="job-detail__subtitle">Suitable Skills</p>

    <!-- box -->
    <div class="box" v-for="skill in relatedSkills" :key="skill.skill_uuid">
      <!-- box__skill-title -->
      <p class="box__skill-title">{{ skill.skill_name }}</p>

      <!-- box__description -->
      <p class="box__description">{{ skill.description }}</p>

      <!-- box__meta -->
      <div class="box__meta">
        <!-- box__meta__importance -->
        <div class="box__meta-item box__meta__importance">
          <!-- box__meta__importance__label -->
          <div class="box__meta__importance__label">Importance</div>
          <!-- box__meta__importance__number -->
          <div class="box__meta__importance__number">{{ skill.importance }}</div>
        </div>

        <!-- box__meta__proficiency -->
        <div class="box__meta-item box__meta__proficiency">
          <!-- box__meta__proficiency__label -->
          <div class="box__meta__proficiency__label">Proficiency</div>
          <!-- box__meta__proficiency__number -->
          <div class="box__meta__proficiency__number">{{ skill.level }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "JobDetail",
  computed: {
    ...mapGetters(["jobDetailVisibility", "selectedJob", "relatedSkills"]),
  },
  methods: {
    ...mapMutations(["toggleJobDetailVisibility"]),
  },
};
</script>

<style lang="scss" scoped>
.job-detail {
  transform: translateX(-50%);
  left: 50%;
  @apply absolute bg-white w-full max-w-screen-sm top-0 h-screen p-2;
}

.job-detail__hide-trigger {
  @apply p-2 text-2xl;
}

.job-detail__title {
  @apply font-bold text-2xl mt-4;
}

.job-detail__subtitle {
  @apply font-bold -mt-2 mb-6;
}

.box {
  @apply border border-gray-500 p-2 rounded mb-2;
}

.box__skill-title {
  @apply text-left text-lg capitalize font-bold mb-2;
}

.box__description {
  @apply text-left;
}

.box__meta {
  @apply my-4;
}

.box__meta-item {
  @apply inline-block p-2 mx-2 rounded-md;
}

.box__meta__importance {
  @apply bg-yellow-500;
}
.box__meta__importance__label {
}
.box__meta__importance__number {
  @apply text-2xl;
}

.box__meta__proficiency {
  @apply bg-blue-600 text-white;
}
.box__meta__proficiency__label {
}
.box__meta__proficiency__number {
  @apply text-2xl;
}
</style>