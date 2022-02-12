<template>
  <main class="flex xl:block flex-col items-center mb-16">
     <Collection-card v-for="tweCollection in collections" :content="tweCollection">
     </Collection-card>
  </main>
</template>
<script>
import CollectionCard from './CollectionCard.vue'
export default {
    components:{
        CollectionCard
    },
    data() {
      return {
        collections : ''
      }
    },
    mounted() {
        fetch('./../../../src/data/contents.json')
        .then(res => res.json())
        .then(data => this.collections = data.collections)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>