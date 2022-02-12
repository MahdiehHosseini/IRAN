<template>
    <router-link :to="{name : 'place page' , params:{ placeName : content.nameOfTehPlace }}">
        <div class="wow animate__fadeInUp animate__animated flex relative xl:mr-36 xl:-mt-32 flex-col items-center justify-center m-10 mb-28" :class="[ (content.side == 'left') ? 'xl:items-start' : 'xl:items-end' ]">
            <div>
                <div class="bg-white md:h-72 md:mt-12 card-md border rounded-3xl xl:pr-20 w-72 h-96 shadow-xl hover:shadow-2xl m-7">
                    <div class="m-8 mt-11 md:mt-8">
                        <h2 class="text-3.5xl w-72">{{content.nameOfTehPlace}}</h2>
                        <p class="text-neutral-600">{{content.location}}</p>
                        <p class="text-2xl xl:w-full md:mt-3 md:w-52">{{content.explonation}}</p>
                    </div>
                </div>
                <div class="md:block flex justify-center">
                    <img class=" rounded-2xl w-48 absolute md:top-22 xl:top-24 md:right-20 top-80 h-48 shadow-xl hover:shadow-2xl" :class="[ (content.side == 'left') ? 'xl:left-93' : 'xl:-right-16' ]" :alt="content.nameOfTehPlace + 'image'" :src="content.imgUrl">
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props : ['content']
}
</script>