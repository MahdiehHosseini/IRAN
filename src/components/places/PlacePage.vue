<template>
  <div v-if="placesContent">
    <Header :data="placesContent.headerContent"></Header>
    <main class="m-14 wow animate__fadeInUp animate__animated">
        <p class="text-2xl">{{placesContent.explonation}}</p>
    </main>
  </div>
  <Loading-land v-else></Loading-land>
</template>
<script>
import Header from './HeaderPlacePost.vue'
import LoadingLand from './../LoadingLand.vue'
export default {
    components:{
        Header,
        LoadingLand
    },
    data() {
        return {
            placesContent : '',
            placeTitle : this.$route.params.placeName.split(' ').join('')+'Content'

        }
    },
    mounted() {
        fetch('./../../../src/data/contents.json')
        .then(res => res.json())
        .then(data => this.placesContent = data.placesContent[this.placeTitle])
        .catch(err => console.log(err.message))
    }
}
</script>