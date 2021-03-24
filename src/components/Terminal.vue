<template>
  <div>
    <div class="terminal space shadow fade-in">
      <div class="top">
        <div class="btns">
          <span class="circle red"></span>
          <span class="circle yellow"></span>
          <span class="circle green"></span>
        </div>
        <div class="title">wribeiiro@wribeiiro</div>
      </div>
      <pre class="body" v-html="aboutText"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: {
    aboutText: {
      type: String,
      required: true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.terminal {
  border-radius: 5px 5px 0 0;
  position: relative;
  width: 1024px;
  transition: 0.5s;
  margin-top: 25px;
}

.terminal .body {
  background: var(--dark-gray);
  color: var(--purple);
  padding: 8px;
  overflow: auto;
  height: 350px;
  font-size: 14px;
}

.terminal .top {
  background: var(--black);
  color: var(--text);
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.terminal .btns {
  position: absolute;
  top: 7px;
  right: 7px;
}

.terminal .circle {
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 15px;
  margin-left: 7px;
  border-width: 1px;
  border-style: solid;
}

.title {
  text-align: center;
}

.red {
  background: var(--red);
  border-color: var(--red);
}

.green {
  background: var(--vue);
  border-color: var(--vue);
}

.yellow {
  background: var(--yellow);
  border-color: var(--yellow);
}

.clear {
  clear: both;
}

.shadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}
</style>
