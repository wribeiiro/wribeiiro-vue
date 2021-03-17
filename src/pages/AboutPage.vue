<template>
    <div>
      <section class="section about">
        <div class="page-content">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
