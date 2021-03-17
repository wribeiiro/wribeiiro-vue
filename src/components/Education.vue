<template>
  <div>
    <div v-for="education in educationData" :key="education.id" class="col-md-12" >
      <div class="fancy-collapse-panel">
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a class="" href="#">{{education.title}}
                  <br />
                  - {{education.date}}
                </a>
              </h4>
            </div>
          </div>
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
      required: true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
