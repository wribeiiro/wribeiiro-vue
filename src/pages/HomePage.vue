<template>
  <div>
    <section class="home">
      <div class="banner">
        <div class="carousel-inner">
          <Home :background-data="background" :text-data="text" :second-text-data="secondText" :about-text-data="aboutText"> </Home>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Home from "../components/Home";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      background: "getBackground",
      text: "getSmallText",
      secondText: "getSmallSecondText",
      aboutText: "getAboutMe"
    }),
  },
  components: {
    Home
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
