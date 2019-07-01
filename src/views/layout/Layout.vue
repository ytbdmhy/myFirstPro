<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import {NavBar, Sidebar, AppMain} from './components'

export default {
  name: 'layout',
  components: {
    NavBar,
    Sidebar,
    AppMain
  }
}
</script>

<style scoped>

</style>
