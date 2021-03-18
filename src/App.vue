<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <div class="main_content">
        <vue-page-transition name="fade">
          <router-view></router-view>
        </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import './assets/css/global.css';
</style>
