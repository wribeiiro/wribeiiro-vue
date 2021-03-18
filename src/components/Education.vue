<template>
  <div>
    <div
      v-for="education in educationData"
      :key="education.id"
    >
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
          <h4 class="panel-title">
            <a class="" href="#"
              v-html="education.title + ' - ' + education.date">
            </a>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
    educationData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel.panel-default {
  background: var(--dark-gray);
  padding: 15px;
}

.panel-title a {
  color: var(--text);
  text-decoration: none;
  font-size: 18px;
}
</style>
