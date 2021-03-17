<template>
  <div>
    <div class="col">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i.redd.it/qgp0uv0933f21.jpg" alt="Main">
          </div>
        </div>
      </div> 
    </div>
    
    <Header />
  </div>
</template>

<script>

import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
