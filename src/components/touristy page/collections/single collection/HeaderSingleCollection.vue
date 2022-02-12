<template>
    <header class="flex pt-14 border-t border-t-zinc-700 justify-between mt-22 mb-44 mx-3 justify-around">
        <p v-for="letter in sptitedTitle" class="animate__fadeInDownBig animate__animated text-5xl">{{letter}}</p>
    </header>
</template>
<script>
export default {
    props : ['title'],
    data() {
        return {
            sptitedTitle : this.title.split('')
        }
    },
}
</script>