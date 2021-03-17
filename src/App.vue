<template>
  <div id="app">
    <div class="main">
      <Header />
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
