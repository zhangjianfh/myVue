<template>
  <div id="login">
    <section id="login-content">
      <div id="login-box">
        <form action="">
          <h1>管理员登陆</h1>
          <p><i class="icon iconfont icon-yonghu"></i><input type="text" name="username" v-model="user" /></p>
          <p><i class="icon iconfont icon-3"></i><input type="password" name="password" v-model="password" /></p>
          <p><button type="button" @click="login">登陆</button> <a id="fpd" href="javascript:void(0)">忘记密码?</a></p>
        </form>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import '../assets/css/login.css'
import { login } from '../assets/json/json'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      user: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    login () {
      if (this.user === login.user || this.password === login.password) {
        document.cookie = '0'
        this.$router.replace('/index')
      } else {
        console.log('错误')
        document.cookie = ''
      }
    }
  }
}
</script>

<style>
.container{position:fixed !important; left:0px; top:0px; z-index:999; width:100%; height:100%;}
#login{position:relative; width:100%; height:100%; background: url(../assets/images/cloud.jpg) 0 bottom repeat-x #049ec4;
-webkit-animation:animate-cloud 20s linear infinite;
-moz-animation:animate-cloud 20s linear infinite;
-ms-animation:animate-cloud 20s linear infinite;
-o-animation:animate-cloud 20s linear infinite;
animation:animate-cloud 20s linear infinite;
display:flex; align-items:center; justify-content:center;}
@-webkit-keyframes animate-cloud { from { background-position:600px 100%; } to { background-position:0 100%; } }
@-moz-keyframes animate-cloud { from { background-position:600px 100%; } to { background-position:0 100%; } }
@-ms-keyframes animate-cloud { from { background-position:600px 100%; } to { background-position: 0 100%; } }
@-o-keyframes animate-cloud { from { background-position:600px 100%; } to { background-position:0 100%; } }
</style>
