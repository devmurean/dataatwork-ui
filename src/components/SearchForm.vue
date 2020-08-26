<template>
  <div class="search-form">
    <!-- input -->
    <input autofocus class="search-form__input" type="text" />
    <!-- trigger search -->
    <button class="search-form__trigger">
      <fa-icon icon="search"></fa-icon>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  @apply mb-8 max-w-screen-sm mx-auto;
}

.search-form__input {
  @apply border border-blue-500 p-2;
}

.search-form__trigger {
  @apply border border-l-0 border-blue-500 p-2 text-blue-500;
}
</style>
