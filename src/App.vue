<template>
  <div id="app">
    <div id="nav">
      <!-- 用来导航的 -->
      <router-link to="/pastime" tag="span"> 娱乐 </router-link>
      <router-link to="/military" tag="span"> 军事 </router-link>
      <router-link to="/car" tag="span"> 汽车 </router-link>
      <button @click="exit" id="exit">退出</button>
      <hr />
      <router-link to="/user" tag="span">用户</router-link>
      <hr />
      <!-- <a href="javascript:;" @click="backOne">返回上层</a>
        <a href="javascript:;" @click="backTwo">返回两层</a>
        <button @click="replaceCar">切换到汽车</button> -->
      <transition mode="out-in" :name="blood">
        <keep-alive>
          <!-- 盛放匹配路由的组件  -->
          <router-view id="dong"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blood: "side",
    };
  },
  methods: {
    exit(){
        localStorage.removeItem('token')
        // location.href = '/login'
        this.$router.push('/login')
    }
  }
};
</script>


<style lang="less">
.router-link-active {
  border: 1px solid rgb(255, 0, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* 淡入淡出动画 */
/* 进场和出场的动画 */
.v-enter-active,
.v-leave-active {
  transition: all 0.6s;
}

/* 进场时 */
.v-enter,
.v-leave-to {
  opacity: 0;
}

/* 出场时 */
.v-leave,
.v-enter-to {
  opacity: 1;
}

/*  */
.side-enter {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

.side-enter-to {
  opacity: 1;
  transform: translate3d(0%, 0, 0);
}

.side-leave {
  opacity: 1;
  transform: translate3d(60%, 0, 0);
}

.side-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.side-enter-active,
.side-leave-active {
  transition: all 1s cubic-bezier(1, 1.42, 0, 1.85) 0s;
}

.bounce-enter-active {
  animation: bounce-in 0.6s;
}

.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(1) rotate(180deg);
  }

  50% {
    transform: scale(0.5) rotate(90deg);
  }

  100% {
    transform: scale(0) rotate(360deg);
  }
}

#dong {
  box-shadow: inset 5px 5px 28px rgb(245, 4, 85);
}
#exit {
  width: 60px;
  height: 30px;
  background-color:rgba(red, green, blue, .4);
  border: 0px;
  color:rgb(162, 0, 255);
}
</style>
