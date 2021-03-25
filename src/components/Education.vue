<template>
  <div class="education">
    <div
      v-for="education in educationData"
      :key="education.id"
      class="panel panel-default"
    >
      <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
          <a class="" href="#"
            v-html="education.title + ' - ' + education.date">
          </a>
        </h4>
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

.education {
  display: flex;
  flex-direction: column;
}

.panel.panel-default {
  background: var(--dark-gray);
  padding: 25px;
  border-radius: 5px;
  border-left: solid 5px var(--vue);
  position: relative;
  margin-bottom: 25px;
  width: 100%;
  transition: 0.5s;
}

.panel.panel-default:hover {
  border-left: solid 5px var(--purple);
}

.panel-title a {
  color: var(--text);
  text-decoration: none;
  font-size: 18px;
}
</style>
