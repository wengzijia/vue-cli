<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    import { fetchCar }  from "@/api/car.js"
    export default {
        data() {
            return {
                title:''
            }
        },
        methods:{
            async carData(){
                let { data } = await fetchCar();
                console.log(data);
                this.title = data.title
            }
        },
        created(){
            this.carData()
        }
    }

</script>

<style lang="less" scoped>

</style>