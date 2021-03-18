<template>
  <div>
    <section class="home">
      <div class="banner">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <Home
              :background-data="background"
              :text-data="text"
            >
            </Home>     
          </div>
        </div> 
      </div>
    </section>
  </div>
</template>

<script>

import Home from '../components/Home'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      background: 'getBackground',
      text: 'getSmallText'
    })
  },
  components: {
    Home
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-home {
    transition: ease-in 0.5s;
  }
</style>
