<template>
    <div>
      <Header/>

      <section class="mypage-experience" data-section="experience">
        <div class="mypage-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <span class="heading-meta">Experience</span>
              <h2 class="mypage-heading">Work Experience</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="timeline-centered">
                <Experience 
                  :xp-data="xp"
                >
                </Experience>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import Header from '../components/Header'
import Experience from '../components/Experience'
import { mapGetters } from 'vuex'

export default {
  name: 'ExperiencePage',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      xp: 'getXp'
    })
  },
  components: {
    Experience,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
