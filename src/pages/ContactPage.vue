<template>
    <div>
      <section class="section contact">
        <div class="page-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <h2 class="mypage-heading">Contact</h2>
            </div>
          </div>

          <div class="row text-center">
            <Contact 
              :contact-data="contact"
            >
            </Contact>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import Contact from '../components/Contact'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactPage',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      contact: 'getContact'
    })
  },
  components: {
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
