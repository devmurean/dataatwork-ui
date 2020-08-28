<template>
  <div class="about">
    <p class="about__quote-icon">
      <fa-icon icon="quote-left"></fa-icon>
    </p>

    <p class="about__paragraph">List of suggested skills that may be needed for certain profession</p>

    <p class="about__paragraph">
      Data provided by
      <span class="font-mono text-md text-yellow-200">api.dataatwork.org</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply text-white p-4;
}

.about__quote-icon {
  @apply text-left;
}

.about__paragraph {
  @apply text-left text-xl p-2 mb-4;
}
</style>
