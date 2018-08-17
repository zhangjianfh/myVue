<template>
  <div id="app" v-loading="loading">
      <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/main/Menu.vue'
export default {
  name: 'App',
  components: { Menu },
  template: '<Menu/> ',
  data () {
    return{
      loading: true
    }
  },
  created () {
    if (parseInt(document.cookie) === 0) {
      if(sessionStorage.href != '/undefined'){
        this.$router.replace(sessionStorage.href)
      }else{
        this.$router.replace('/index')
      }
    }else{
      this.$router.replace('/login')
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style>
</style>
