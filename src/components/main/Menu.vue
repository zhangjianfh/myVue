<template>
  <div id="menu">
    <div id="menu-avatar">
      <img v-bind:src="userInfo.avatar" />
      <p>{{ userInfo.username }}</p>
    </div>
    <ul ref="menuul">
      <li v-for="nav in menuList" @click="currMneu()">
        <router-link :to="nav.href" v-bind:class="{ navcurr:nav.href==isCurr }">
          <i :class="nav.icon" class="icon iconfont"></i>
          <label>{{ nav.title }}</label>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { userinfo, menuarry } from '../../assets/json/json'
export default {
  name: 'Menu',
  data () {
    return {
      userInfo: {},
      isCurr: '',
      menuList: menuarry
    }
  },
  created () {
    this.userInfo = userinfo
  },
  mounted () {
    this.currMneu()
  },
  methods: {
    currMneu () {
      this.isCurr = '/'+this.$route.name
      sessionStorage.setItem('href',this.isCurr)
    }
  }
}
</script>

<style>
  #menu{position:relative; height:100%; background-color:#409EFF;}
  #menu-avatar{position:relative; padding:10px; width:100%; height:140px; text-align:center;}
  #menu-avatar img{display:inline-block; width:80px; height:80px; border-radius:50%;}
  #menu-avatar p{color:#fff; margin-top:10px;}
  #menu ul{list-style:none; display:inline-block; width:100%;}
  #menu ul li,#menu ul li a,#menu ul li a label{cursor:pointer;}
  #menu ul li{}
  #menu ul li a{font-size:14px; color:#cdf3fc; display:inline-block; width:100%; padding:10px;
    transition:background-color .3s; }
  #menu ul li a:hover {color:#fff;
    background-color:#35affb;}
  .navcurr{background-color:#35affb; color:#fff !important;}
  #menu ul li a label{padding-left:10px;}
</style>
