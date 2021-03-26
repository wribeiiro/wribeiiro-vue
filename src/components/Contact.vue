<template>
  <div class="contact-container">
    <div class="contact-item" v-for="contact in contactData" :key="contact.id">
      <div class="contact-content">
        <a :href="[contact.href]" target="_blank">
          <i :class="[contact.icon]"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}

.contact-item {
  width: 160px;
  height: 160px;
  background: var(--dark-gray);
  padding: 50px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  position: relative;
}

.contact-content  {
  text-align: center;
  font-size: 70px;
  position: absolute;
  left: 0;
  right: 0;
}

.contact-content i {
  transition: 0.5s;
  color: var(--purple);
}

.contact-content i:hover {
  color: var(--vue);
}

</style>
