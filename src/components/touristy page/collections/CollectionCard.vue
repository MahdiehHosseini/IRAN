<template>
    <div class="xl:flex  xl:justify-between xl:justify-around">
        <div v-for="card in content" class=" wow animate__fadeInUp animate__animated xl:flex  xl:justify-between xl:justify-around">
            <div class="w-93 m-5 md:scale-105 mt-16 ">
                <router-link :to="{name : 'collection page' ,params : { collectionName: card[0]}}">
                <div class="rounded-t-full shadow-lg border border-neutral-100 h-48 text-center">
                    <h3 class="text-2xl mt-22">{{card[0]}}</h3>
                </div></router-link>
                <div class="h-full border-neutral-100">
                    <ul class="bg-white">
                        <router-link v-for="singlePartPlace in card[1]" :to="{name:'place page',params : { placeName:singlePartPlace.placeName}}">
                          <li class="flex items-center shadow-sm">
                            <img class="hover:scale-110 hover:duration-200 m-4 h-24 w-24 rounded-xl" :alt="singlePartPlace.placeName + 'image'" :src="singlePartPlace.imgUrl">
                            <div class="m-5">
                                <h4 class="text-xl mb-1.5">{{singlePartPlace.placeName}}</h4>
                                <p class="text-neutral-600 text-base">{{singlePartPlace.location}}</p>
                                <p class="text-lg">{{singlePartPlace.explonation}}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg " class="h-16 w-16 hover:scale-110 hover:duration-200 mt-24 mr-5" fill="none " viewBox="0 0 24 24 " stroke="currentColor ">
                                    <path stroke-linecap="round " stroke-linejoin="round " stroke-width="2 " d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z " />
                            </svg>
                          </li>
                        </router-link>
                    </ul>
                    <div class="flex justify-center">
                      <router-link :to="{name : 'collection page' ,params : { collectionName: card[0]}}">
                        <button class="text-lg w-40 rounded-t-none h-20 rounded-3xl hover:shadow-2xl shadow-xl text-center">See more ...</button>
                      </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['content']
}
</script>