<template>
  <div class="work-item">
    <a href="">
      <div class="work-info">
        <h3 class="info-title text-center">TITLE</h3>
        <p class="info-subtitle text-center">SUBTITLE</p>
        <p class="tags text-center">TAGS</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .work-item {
    max-width: 300px;
    height: 300px;
    width: 100%;
    max-height: 100%;
    background: var(--dark-gray);
    padding: 50px;
    margin-right: 30px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 5px;
  }

  .work-item .work-info {
    position: absolute;
    left: 0;
    top: 35%;
    width: 100%;
    height: 100%;
    color: var(--text)
  }

  .work-item .work-info h3 {
    margin-bottom: 30px;
  }

  .work-item .work-info p {
    margin-bottom: 30px;
  }
</style>
