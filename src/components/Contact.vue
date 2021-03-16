<template>
  <div>
    <div class="col-md-2 col-xs-6" v-for="contact in contactData" :key="contact.id">
      <a :href="[contact.href]">
        <div class="mypage-feature mypage-feature-sm">
          <div class="mypage-icon">
            <i :class="[contact.icon]"></i>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contactData: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
