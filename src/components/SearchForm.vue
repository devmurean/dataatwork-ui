<template>
  <div class="search-form">
    <!-- input -->
    <input
      autofocus
      class="search-form__input"
      type="text"
      v-model="searchText"
      placeholder="Job Keyword"
    />
    <!-- trigger search -->
    <button class="search-form__trigger" @click="searchJob">
      <fa-icon icon="search"></fa-icon>
    </button>
    <p v-if="showErrorMessage" class="text-red-500">Please type something on the form</p>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "SearchForm",
  data() {
    return {
      searchText: "",
      showErrorMessage: false,
    };
  },
  methods: {
    async searchJob() {
      if (this.searchText === "") {
        this.showErrorMessage = true;
        return false;
      }
      let baseUrl = "http://api.dataatwork.org/v1/jobs/autocomplete";

      let response = await axios({
        url: `${baseUrl}?contains=${this.searchText}`,
        method: "get",
      });

      this.storeJobs(response.data);
    },
    ...mapActions(["storeJobs"]),
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  @apply mb-8 max-w-screen-sm mx-auto;
}

.search-form__input {
  @apply border border-blue-500 border-r-0 p-2 bg-transparent text-white;
}

.search-form__trigger {
  @apply border border-l-0 border-blue-500 p-2 text-blue-500;
}
</style>
