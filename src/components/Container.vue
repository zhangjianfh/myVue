<template>
  <div id="container">
    <header>
      <Menu/>
    </header>
    <div id="contents">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Menu from './main/Menu.vue'
export default {
  name: 'Container',
  components: { Menu },
  template: '<Menu/> '
}
</script>

<style>
#container{position:relative; width:100%; height:100%; background-color:#ecf0f5;
  display:flex; align-items:end; justify-content:space-between;}
header{position:relative; height:100%; width:150px; z-index:2;}
#contents{position:absolute; height:100%; width:100%; z-index:1;
padding:10px 0px 0px 160px;}

.fade-enter{top:-100%;}
.fade-enter-active{transition:top .3s;}
.fade-leave{top:0px;}
.fade-leave-active{top:-100%; transition:top .3s;}
</style>
