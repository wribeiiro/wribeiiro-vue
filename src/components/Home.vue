<template>
  <div>
    <div class="carousel-item active">
      <img class="d-block w-100 hero" :src="backgroundData" alt="Main">
      <div class="overlay">
        <div class="carousel-caption d-none d-md-block text-left">
          <h1 v-html="textData"></h1>
          <router-link to="/about" class="btn btn-outline-success">
            <i class="fa fa-code"></i> Let's code 
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
   props: {
    backgroundData: {
      type: String,
      required: true
    },
    textData: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
    height: 100vh;
  }
  
  .overlay {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .carousel-caption {
    position: absolute;
    bottom: 45%;
  }

  .carousel-caption h1 {
    margin-bottom: 45px;
    font-size: 65px;
  }
</style>
