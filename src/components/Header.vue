<template>
    <div>
      <div class="sidenav">
        <div class="sidenav__avatar">
          <div class="text-center me">
            <h1 class="name">Wellisson Ribeiro</h1>
            <span class="description">
              <a href="#">Fullstack Developer</a> in Mafra-SC
            </span>
          </div>
        </div>
        <div class="sidenav__link">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="sidenav__footer">

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidenav {
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--dark-gray);
  overflow-x: hidden;
  padding-top: 3em;
  padding-bottom: 40px;
  transition: 0.5s;
  padding: 40px;
}

.sidenav .sidenav__link a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: var(--text);
  display: block;
  text-align: center;
}

.sidenav .sidenav__link a:hover, .sidenav__link a:active, .sidenav__link a:focus {
  color: var(--purple);
  text-decoration: none;
}

.sidenav__avatar .me {
  margin-bottom: 30px;
}

.sidenav__avatar h1 {
  color: var(--text);
  font-size: 20px;
  font-weight: 700;
  display: block;
}

.sidenav__avatar span {
  color: var(--text);
  text-align: center;
}

.sidenav__avatar span a {
  color: var(--purple);
  transition: 0.5s;
  text-align: center;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}

</style>
