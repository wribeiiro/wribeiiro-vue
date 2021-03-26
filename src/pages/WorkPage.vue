<template>
  <div>
    <section class="work">
      <div class="info">
        <div class="title">
          <h2>Works and Projects</h2>
        </div>

        <div class="work-container">
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Work from '../components/Work'

export default {
  name: 'WorkPage',
  data() {
    return {
      
    }
  },
  components: {
    Work
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-flow: wrap;
    width: calc(100% - 120px);
  }
</style>
