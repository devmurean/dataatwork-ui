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
      this.toggleLoadingLayerVisibility();
      try {
        if (this.searchText === "") {
          throw new Error("Please fill the form");
        }
        let baseUrl = "http://api.dataatwork.org/v1/jobs/autocomplete";
        let { data } = await axios({
          url: `${baseUrl}?contains=${this.searchText}`,
          method: "get",
        });

        this.storeJobs(data);
      } catch (error) {
        let errorMessage = "";
        if (error.response !== undefined) {
          // console.log(error.response);
          errorMessage = error.response.data.error.message;
        } else {
          // console.log(error);
          errorMessage = error.message;
        }
        this.showErrorBox(errorMessage);
      }
      this.toggleLoadingLayerVisibility();
    },
    ...mapActions([
      "storeJobs",
      "showErrorBox",
      "toggleLoadingLayerVisibility",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  @apply mb-8 max-w-screen-sm mx-auto text-center;
}

.search-form__input {
  @apply border border-blue-500 border-r-0 p-2 bg-transparent text-white;
}

.search-form__trigger {
  @apply border border-l-0 border-blue-500 p-2 text-blue-500;
}
</style>
