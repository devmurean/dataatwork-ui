<template>
  <div class="job-detail" v-if="jobDetailVisibility">
    <!-- hide this component trigger -->
    <button class="job-detail__hide-trigger" @click="toggleJobDetailVisibility">
      <fa-icon icon="times"></fa-icon>
    </button>

    <!-- Title: Related Skills -->
    <p class="job-detail__subtitle">Suitable Skills of</p>
    <p class="job-detail__title">{{ selectedJob.suggestion }}</p>

    <!-- skills list -->
    <transition-group
      class="skills-box"
      tag="div"
      enter-active-class="animate__animated animate__fadeIn"
    >
      <!-- box -->
      <div class="box shadow" v-for="skill in relatedSkills" :key="skill.skill_uuid">
        <div class="box__main">
          <!-- box__skill-title -->
          <p class="box__main__skill-title">{{ skill.skill_name }}</p>

          <!-- box__description -->
          <p class="box__main__description">{{ skill.description }}</p>
        </div>

        <!-- box__meta -->
        <div class="box__meta">
          <!-- box__meta__importance -->
          <div class="box__meta-item box__meta__importance shadow">
            <!-- box__meta__importance__label -->
            <div class="box__meta__importance__label">Importance</div>
            <!-- box__meta__importance__number -->
            <div class="box__meta__importance__number">{{ skill.importance }}</div>
          </div>

          <!-- box__meta__proficiency -->
          <div class="box__meta-item box__meta__proficiency shadow">
            <!-- box__meta__proficiency__label -->
            <div class="box__meta__proficiency__label">Level</div>
            <!-- box__meta__proficiency__number -->
            <div class="box__meta__proficiency__number">{{ skill.level }}</div>
          </div>
        </div>
      </div>
    </transition-group>
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
  @apply absolute bg-gray-800 w-full max-w-screen-xl top-0 min-h-screen p-2 text-white;
}

.job-detail__hide-trigger {
  @apply p-2 text-2xl mx-auto block;
}

.job-detail__title {
  @apply font-bold text-2xl mb-8 -mt-6 text-center;
}

.job-detail__subtitle {
  @apply font-bold -mt-2 mb-6 text-center;
}

.skills-box {
  @apply grid grid-cols-1 gap-6;
}

@screen md {
  .skills-box {
    @apply grid-cols-2;
  }
}

@screen lg {
  .skills-box {
    @apply grid-cols-3;
  }
}

.box {
  overflow: hidden;
  z-index: 2;
  @apply border-t-2 border-blue-500 p-4 mb-4 w-full mx-auto grid grid-rows-3 relative;

  &::before {
    content: " ";

    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
    @apply absolute w-64 h-64 block bg-transparent border border-blue-500 rounded-full;
  }
}

.box__main {
  @apply row-span-2;
}

.box__main__skill-title {
  @apply text-left text-lg capitalize font-bold mb-2;
}

.box__main__description {
  @apply text-left;
}

.box__meta {
  z-index: 3;
  @apply row-span-1 mt-4 text-center relative;
}

.box__meta-item {
  @apply inline-block p-2 px-4 mx-2 border-t-2 bg-gray-800;
}

.box__meta__importance {
  @apply border-yellow-500 w-2/5;
}
.box__meta__importance__label {
}
.box__meta__importance__number {
  @apply text-2xl;
}

.box__meta__proficiency {
  @apply border-red-500 w-2/5;
}
.box__meta__proficiency__label {
}
.box__meta__proficiency__number {
  @apply text-2xl;
}
</style>