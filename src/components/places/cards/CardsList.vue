<template>
    <div class="my-32">
        <Card v-for="place in places" :key="place.key" :content="place"></Card>
    </div>
</template>
<script>
import Card from './SingleCard.vue'
export default {
    components:{
        Card
    },
    props :['places'],
}
</script>