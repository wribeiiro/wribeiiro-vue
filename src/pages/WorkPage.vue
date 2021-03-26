<template>
  <div>
    <section class="work">
      <div class="info">
        <div class="title">
          <h2>Works and Projects</h2>
        </div>

        <div class="work-container">
            <Work 
              v-for="work in works" 
              :key="work.id" 
              :work-data="work"
            >
            </Work>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Work from '../components/Work'
import { mapGetters } from 'vuex'

export default {
  name: 'WorkPage',
  data() {
    return {
      
    }
  },
  components: {
    Work
  },
  computed: {
    ...mapGetters({
      works: 'getWorks'
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work-container {
    display: flex;
    justify-content: start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: calc(100% - 30px);
  }
</style>
