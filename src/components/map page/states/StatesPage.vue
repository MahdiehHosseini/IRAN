<template>
    <div v-if="statesCardContent">
        <header class="text-center animate__fadeInDown animate__animated">
            <h1 class="text-8xl my-32">{{statesName}}</h1>
        </header>
        <Cards-list :places="statesCardContent[1]"></Cards-list>
    </div>
    <Loading-land v-else @click="test()"></Loading-land>
</template>
<script>
import LoadingLand from './../../LoadingLand.vue'
import CardsList from './../../places/cards/CardsList.vue'
export default {
    components:{
        CardsList,
        LoadingLand
    },
    data() {
        return {
            statesName : this.$route.params.statesName,
            statesCardContent : '',
            statesTitle : this.$route.params.statesName.split(' ').join('')
        }
    },
    mounted() {
        fetch('./../../../src/data/contents.json')
        .then(res => res.json())
        .then(data => this.statesCardContent = data.statesContent[this.statesTitle])
        .catch(err => console.log(err.message))
    }
}
</script>