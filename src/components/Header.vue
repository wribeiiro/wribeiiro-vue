<template>
    <div>
      <div class="sidebar">
        <div class="sidebar__avatar">
          <div class="text-center me">
            <img :src="[imgProfile]" alt="">
            <h1 class="name">Wellisson Ribeiro</h1>
            <span class="description">
              PHP Developer
            </span>
          </div>
        </div>
        <ul>
          <router-link to="/" class="btn mr-5"><i class="fa fa-home"></i> Home</router-link>
          <router-link to="/education" class="btn mr-5"><i class="fa fa-university"></i> Education</router-link>
          <router-link to="/experience" class="btn mr-5"><i class="fa fa-briefcase"></i> Experience</router-link>
          <router-link to="/work" class="btn mr-5"><i class="fa fa-cog"></i> Work</router-link>
          <router-link to="/contact" class="btn mr-5"><i class="fa fa-envelope"></i> Contact</router-link>
        </ul>
        <div class="social_media">
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fa fa-envelope"></i></a>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return { 
      imgProfile: "https://avatars.githubusercontent.com/u/20648572?s=460&u=47a55caca6dbc315d1932aaf77eefa20b2002baf&v=4"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar {
  width: 260px;
  height: 100%;
  background-color: var(--dark-gray);
  padding: 30px 0px;
  position: fixed;
  transition: 0.5s;
}

.sidebar ul {
  display: block;
}

.sidebar ul a {
  padding: 15px;
  font-size: 16px;
  color: var(--text);
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
  width: 100%;
  text-align: left;
}

.sidebar ul i {
  padding-right: 8px;
}

.sidebar ul a:hover, ul a:active, ul a:focus {
  border-left: solid 5px var(--purple);
  color: var(--text);
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}

.sidebar ul .link-active {
  border-left: solid 5px var(--purple);
  color: var(--text);
}

.sidebar__avatar .me {
  margin-bottom: 30px;
}

.sidebar__avatar h1 {
  color: var(--text);
  font-size: 26px;
  font-weight: 500;
  display: block;
}

.sidebar__avatar span {
  color: var(--text);
  text-align: center;
  font-weight: 600;
  font-size: 19px;
}

.sidebar__avatar img {
  width: 140px;
  height: 140px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 30px;
}

.sidebar__avatar span {
  color: var(--purple);
  transition: 0.5s;
  text-align: center;
}

.sidebar .social_media {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.sidebar .social_media a {
  display: block;
  width: 40px;
  background: var(--purple);
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: var(--text);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}


@media (max-width: 360px) {
  .sidebar {
    width: 260px;
    height: auto;
    position: relative;
  }
}

</style>
