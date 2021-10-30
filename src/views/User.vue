<template>
    <div>
        <h1>用户组件</h1>
        <router-link to="/user/login" tag="span">登录</router-link>
        <router-link to="/user/register" tag="span">注册</router-link>
        <router-view></router-view>
        <Indent></Indent>
    </div>
</template>

<script>
    import Indent from "@/views/Indent"
    export default {
        name:'User',
        components:{
            Indent
        }
    }

</script>

<style lang="scss" scoped>

</style>