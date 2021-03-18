<template>
  <div>
    <div class="container-flex">
      <div class="contact-items" v-for="contact in contactData" :key="contact.id">
        <a :href="[contact.href]">
          <div class="contacts">
            <div class="contacts-icon">
              <i :class="[contact.icon]"></i>
            </div>
          </div>
        </a>
      </div>
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
  .container-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .contacts {
    width: 120px;
    height: 120px;
    background: var(--dark-gray);
    padding: 50px;
    margin: 30px;
    position: relative;
    border-radius: 5px;
  }
  
  .contacts .contacts-icon i {
    color: var(--purple);
    font-size: 50px;
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    height: 100%;
  }
</style>
