<template>
  <div>
    <div class="contact-item" v-for="contact in contactData" :key="contact.id">
      <a :href="[contact.href]">
        <div class="contact-content">
          <div class="contact-icon">
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
    contactData: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .contact-item {
    width: 120px;
    height: 120px;
    background: var(--dark-gray);
    padding: 50px;
    margin: 30px;
    border-radius: 5px;
    position: relative;
    flex: 1;
  }
  
  .contact-content {
    position: relative;
  }

  .contact-content .contact-icon i {
    color: var(--purple);
    font-size: 50px;
    position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  .contact-content .contact-icon i:hover {
    color: var(--vue);
  }
</style>
