<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    import { fetchMilitary } from "@/api/military.js"
    export default {
        name:'Military',
        data() {
            return {
                title: ''
            }
        },
        methods:{
             async militaryData(){
                 let {data} = await fetchMilitary();
                 this.title = data.title
             }
        },
        created(){
            this.militaryData()
        }
    } 
</script>

<style lang="less" scoped>

</style>