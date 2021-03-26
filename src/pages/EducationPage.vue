<template>
  <div>
    <section class="education">
      <div class="info">
        <div class="title">
          <h2>Education</h2>
        </div>

        <Education :education-data="education"> </Education>
      </div>
    </section>
  </div>
</template>

<script>
import Education from "../components/Education";
import { mapGetters } from "vuex";

export default {
  name: "EducationPage",
  components: {
    Education,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      education: "getEducation",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
