<template>
    <div>
      <Header/>
      <section class="mypage-contact" data-section="contact">
        <div class="mypage-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <span class="heading-meta">Get in Touch</span>
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

import Header from '../components/Header'
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
    Contact,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
