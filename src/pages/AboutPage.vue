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
import { mapGetters } from 'vuex'

export default {
  name: 'AboutPage',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      aboutMe: 'getAboutMe'
    })
  },
  methods: {
    
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
