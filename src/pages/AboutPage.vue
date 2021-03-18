<template>
  <div>
    <section class="about">
      <div class="info">
        <div class="row">
          <div class="col-md-12">
            <h2 class="mypage-heading">About</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <About :about-data="aboutMe"> </About>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import About from "../components/About";
import { mapGetters } from "vuex";

export default {
  name: "AboutPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      aboutMe: "getAboutMe",
    }),
  },
  methods: {},
  components: {
    About,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
