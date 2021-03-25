<template>
  <div>
    <section class="experience">
      <div class="info">
        <div class="title">
            <h2>Work Experience</h2>
        </div>
        <div class="row">
          <div class="col">
            <Experience :xp-data="xp"> </Experience>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Experience from "../components/Experience";
import { mapGetters } from "vuex";

export default {
  name: "ExperiencePage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      xp: "getXp",
    }),
  },
  components: {
    Experience,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
