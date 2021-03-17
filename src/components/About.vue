<template>
    <div>
      <div class="about-desc">
        <span class="heading-meta">About Me</span>
        <h2 class="mypage-heading">Who Am I?</h2>
        <p v-html="aboutData"></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    aboutData: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
