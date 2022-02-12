<template>
    <Cards-list :places="content"></Cards-list>
</template>
<script>
import CardsList from '../../../places/cards/CardsList.vue'
export default {
    components:{
        CardsList
    },props : ['content']
}
</script>
