<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <div class="box">
      <leftnav>

      </leftnav>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftnav from '@/components/leftnav'
export default {
  name: 'App',
  components: {leftnav},
}
</script>

<style>
  body,html{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .box{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
