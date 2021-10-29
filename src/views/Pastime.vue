<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    import { fetchYule } from "@/api/pastime.js"
    export default {
        name:'Pastime',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            // async fetchMilitary() {
            //     let { data } = await axios.get('http://127.0.0.1:8888/pastime');
            //     // console.log(data)
            //     this.title = data.title
            // }

            async fetchData(){
                let {data} = await fetchYule();
                console.log(data);
                this.title = data.title
            }
        },
        created() {
            console.log('娱乐-created')
            this.fetchData()
        },
        mounted() {
            console.log('娱乐-mounted')
        }
    }

</script>

<style lang="less" scoped>

</style>