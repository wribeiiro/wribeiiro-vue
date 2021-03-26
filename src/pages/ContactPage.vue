<template>
  <div>
    <section class="contact">
      <div class="info">
        <div class="title">
          <h2>Contact</h2>
        </div>

        <div class="contact-container">
          <Contact :contact-data="contact"></Contact>
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
