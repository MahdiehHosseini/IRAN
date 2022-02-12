<template>
  <div v-if="collectionCardsContent">
    <Header :title="collectionName"></Header>
    <Main :content="collectionCardsContent"></Main> 
  </div>
  <Loading-land v-else></Loading-land>
</template>
<script>
import Header from './HeaderSingleCollection.vue'
import Main from './MainSingleCollection.vue'
import LoadingLand from './../../../LoadingLand.vue'
export default {
    components:{
        Header,
        Main,
        LoadingLand
    },
    data() {
        return {
            collectionName : this.$route.params.collectionName,
            collectionCardsContent : '',
            collectionTitle : this.$route.params.collectionName.toLowerCase()+'CardsContent'
        }
    },
    mounted() {
        fetch('./../../../src/data/contents.json')
        .then(res => res.json())
        .then(data => this.collectionCardsContent = data.singleCollectionContent[this.collectionTitle])
        .catch(err => console.log(err.message))
    }
}
</script>