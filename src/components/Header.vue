<template>
    <div>
      <div class="sidenav">
        <div class="sidenav__avatar">
          <div class="text-center me">
            <h1 class="name">Wellisson Ribeiro</h1>
            <span class="description">
              <a href="#">Fullstack Developer</a> <br>in Mafra-SC
            </span>
          </div>
        </div>
        <div class="sidenav__link">
          <router-link to="/" class="btn mr-5">Home</router-link>
          <router-link to="/about" class="btn mr-5">About</router-link>
          <router-link to="/education" class="btn mr-5">Education</router-link>
          <router-link to="/experience" class="btn mr-5">Experience</router-link>
          <router-link to="/work" class="btn mr-5">Work</router-link>
          <router-link to="/contact" class="btn mr-5">Contact</router-link>
        </div>
        <div class="sidenav__footer">

        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
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
}

.sidenav .sidenav__link a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: var(--text);
  display: block;
  margin-left: 15%;
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

.link-active {
  background-color: var(--purple);
  color: var(--text);
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
