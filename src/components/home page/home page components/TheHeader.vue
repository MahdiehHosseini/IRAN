<template>
    <header class="w-full h-full">
        <div class=" justify-center items-center flex flex-col header-bg bg-center">
            <div class="animate__fadeInDown animate__animated text-white icon rounded-full border-2 md:border-4 mb-11">
                <div class="p-4 md:p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
            <div class="animate__fadeInDown animate__animated items-center text-center header-txt flex flex-col">
                <h1 class="text-7.5xl w-90 header-title md:text-8xl md:w-96 md:pt-8 text-white">IRAN</h1>
                <p class="text-3.5xl w-90 header-paragraph text-center md:w-96 py-4 text-slate-200 ">an amazing country in the Asia</p>
            </div>
            <ul class="animate__fadeInDown animate__animated btn-group text-2xl mt-11 rounded-2xl md:flex list-group text-white text-center">
                <router-link to="/Map"><li class="p-1 px-8 list-item1 md:px-11">map</li></router-link>
                <router-link to="/Touristy"><li class="p-1 px-8">touristy</li></router-link>
            </ul>
        </div>
    </header>
</template>