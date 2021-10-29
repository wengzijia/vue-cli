<template>
    <div>
        <h1>用户组件</h1>
        <Login></Login>
        <Register></Register>
        <Indent></Indent>
    </div>
</template>

<script>
    import Login from "@/views/Login"
    import Register from "@/views/Register"
    import Indent from "@/views/Indent"
    export default {
        name:'User',
        components:{
            Login,
            Register,
            Indent
        }
    }

</script>

<style lang="scss" scoped>

</style>