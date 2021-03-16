<template>
    <div>
      <article v-for="xp in xpData" :key="xp.id" class="timeline-entry">
        <div class="timeline-entry-inner">
          <div :class="[xp.id + 'timeline-icon']">
            <i class="fa fa-pencil-alt"></i>
          </div>
          <div class="timeline-label">
            <h2><a href="#">{{xp.title}}</a>
            <span>{{xp.date}}</span></h2>
            <p>{{xp.description}}</p>
          </div>
        </div>
      </article>
    </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    xpData: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
