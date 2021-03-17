<template>
    <div>
      <Header/>
      <section class="mypage-about" data-section="about">
        <div class="mypage-narrow-content">
          <div class="col-md-12 form-group">
            <About
              :about-data="aboutMe"
            >
            </About>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import Header from '../components/Header'
import About from '../components/About'

export default {
  name: 'AboutPage',
  data() {
    return {
      aboutMe: `Hi Devs 🖖! I'm Wellisson Ribeiro. I'm ${this.calculateMyYear()} years old, married, and father of two little girls. Graduated in Analysis and Systems 	Development at UNOPAR. Developer with some years of experience developing applications with different technologies, but with a focus on PHP (Code Igniter v3/v4, Laravel, Lumen Frameworks). I am currently work a software engineer at <a href='https://www.softexpert.com/'> SoftExpert </a>`
    }
  },
  methods: {
    calculateMyYear() {
      return new Date().getFullYear() - 1996
    }
  },
  components: {
    About,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
