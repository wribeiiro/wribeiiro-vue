<template>
   <div>
    <section class="section education">
      <div class="page-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3">
            <h2 class="mypage-heading">Education</h2>
          </div>
        </div>
        <div class="row">
          <Education 
            :education-data="education"
          >
          </Education>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Education from '../components/Education'
import { mapGetters } from 'vuex'

export default {
  name: 'EducationPage',
  components: {
    Education
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      education: 'getEducation'
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
