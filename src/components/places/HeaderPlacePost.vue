<template>
    <header class="text-white h-96 mx-14 bg-black box-border relative rounded-2xl mt-16" :class="data.className">
        <div class="animate__fadeInDown animate__animated absolute bottom-0  m-5 ">
            <h1 class="text-5xl">{{data.placeName}}</h1>
            <p class="text-neutral-200 text-3xl">{{data.location}}</p>
        </div>
    </header>
</template>
<script>
export default {
    props : ['data']
}
</script>