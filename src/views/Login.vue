<template>
  <div>
    <h1>登录组件</h1>
    用户名: <input type="text" v-model="username" /> <br />
    密码: <input type="text" v-model="password" /> <br />
    <button @click="btn" id="login">登录</button>
  </div>
</template>

<script>
import {fetchLogin} from "@/api/user"
export default {
  data() {
    return {
      username: "weng",
      password: "123456",
    };
  },
  methods: {
    async btn() {
      let data = {
        username: this.username,
        password: this.password,
      };
      let result = await fetchLogin(data)
      console.log(result);
      let { errcode, message, token } = result.data;
      if (errcode === 0) {
        localStorage.setItem("token", token);
        this.$router.push("/pastime");
      } else {
        alert(message);
      }
    }
  }
};
</script>

<style lang="less" scoped>
    #login {
        margin-top: 10px;
        border: 0px;
        width: 120px;
        height: 30px;
        border-radius: 20px;
        background-color: skyblue;
        color:rgb(255, 1, 234);
   }
</style>