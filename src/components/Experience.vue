<template>
  <div class="experience timeline-centered">
    <article v-for="xp in xpData" :key="xp.id" class="timeline-entry">
      <div class="timeline-entry-inner">
        <div class="timeline-icon">
          <i class="fa fa-briefcase"></i>
        </div>
        <div class="timeline-label">
          <h2>
            <a href="#">{{ xp.title }}</a> <span>{{ xp.date }}</span>
          </h2>
          <p>{{ xp.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    xpData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.timeline-centered {
  position: relative;
  margin-bottom: 30px;
}

.timeline-centered:before,
.timeline-centered:after {
  content: " ";
  display: table;
}

.timeline-centered:after {
  clear: both;
}

.timeline-centered:before,
.timeline-centered:after {
  content: " ";
  display: table;
}

.timeline-centered:after {
  clear: both;
}

.timeline-centered:before {
  content: "";
  position: absolute;
  display: block;
  width: 4px;
  background: var(--text);
  top: 20px;
  bottom: 20px;
  margin-left: 29px;
}

.timeline-centered .timeline-entry {
  position: relative;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 10px;
  clear: both;
}

.timeline-centered .timeline-entry .timeline-entry-inner {
  position: relative;
  margin-left: -20px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
  display: block;
  width: 40px;
  height: 40px;
  background: var(--purple);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  -moz-box-shadow: 0 0 0 5px var(--text);
  -webkit-box-shadow: 0 0 0 5px var(--text);
  box-shadow: 0 0 0 5px var(--text);
  line-height: 40px;
  float: left;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {
  color: var(--text);
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
  position: relative;
  background: var(--dark-gray);
  padding: 1.5rem;
  margin-left: 80px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  border-radius: 5px;
  transition: 0.5s;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 9px 9px 0;
  border-color: transparent var(--dark-gray) transparent transparent;
  left: 0;
  top: 10px;
  margin-left: -9px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {
  margin-top: 15px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {
  font-size: 20px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {
  color: var(--text);
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label
  h2
  span {
  color: var(--vue);
  font-size: 16px;
}
</style>
