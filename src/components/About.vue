<template>
  <div>
    <div class="about-style">
      <div class="crawl">
        <p class="paragraph" v-html="aboutData"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    aboutData: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-style {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: var(--purple);
  font-size: 250%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

/*
.crawl {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;
}

.crawl > .title {
  font-size: 90%;
  text-align: center;
}

.crawl > .title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}*/
</style>
