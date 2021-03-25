<template>
  <div>
    <section class="work">
      <div class="info">
        <div class="title">
          <h2>Works and Projects</h2>
        </div>

        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
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
  .work {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    position: relative;
  }
</style>
