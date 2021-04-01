<template>
  <div class="skill-container">
    <div class="skill-item" v-for="skill in skillsData" :key="skill.id">
      <div class="skill-content">
        <img :src="skill.icon" :alt="skill.title" :title="skill.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skillsData: {
      type: Array,
      required: true,
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.skill-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.skill-item {
  width: calc(10% - 30px);
  height: 160px;
  background: var(--dark-gray);
  padding: 50px;
  margin-bottom: 30px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 5px;
  position: relative;
}

.skill-item:hover  {
  cursor: pointer;
}

.skill-content img  {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  top: 0;
  transform: scale(0.7, 0.7);
}

</style>
