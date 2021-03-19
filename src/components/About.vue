<template>
  <div>
    <div class="about-style">
      <div class="crawl">
        <p class="paragraph" v-html="aboutData"></p>
        <!-- replace to flex
        <div class="row">
          <div class="col form-group">
            <img class="img-fluid" src="https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a---cone-de-linguagem-de-programa----o-php-by-vexels.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://cdn.iconscout.com/icon/free/png-512/codeigniter-4-1175201.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://www.designbust.com/download/168/png/laravel_icon512.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://pcodinomebzero.neocities.org/Imagens/javascript1.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://pngimg.com/uploads/mysql/mysql_PNG1.png" alt="" title="" />
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="" title="" width="512" height="512"/>
          </div>
        </div>
        <div class="row form-group">
          <div class="col form-group">
            <img class="img-fluid" src="https://icon-library.com/images/html-icon-png/html-icon-png-4.jpg" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://breitembach.github.io/assets/icons/css.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://commons.bmstu.wiki/images/b/b8/Bootstrap.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://ionicframework.com/img/meta/logo.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" alt="" title="" width="512" height="512"/>
          </div>
          <div class="col form-group">
            <img class="img-fluid" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png" alt="" title="" width="512" height="512"/>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    aboutData: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-style {
  display: flex;
  justify-content: center;
  position: relative;
  color: var(--purple);
  font-size: 250%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  text-align: justify;
}

.crawl {
  background: var(--dark-gray);
  padding: 45px;
  border-radius: 5px;
}
</style>
