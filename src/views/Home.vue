<template>
  <div class="p-2 relative">
    <search-form></search-form>
    <job-list></job-list>
    <job-detail></job-detail>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";
import JobList from "@/components/JobList.vue";
import JobDetailVue from "../components/JobDetail.vue";

export default {
  name: "Home",
  components: {
    "search-form": SearchForm,
    "job-list": JobList,
    "job-detail": JobDetailVue,
  },
};
</script>
