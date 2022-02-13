<template>
    <nav class="bg-white flex justify-between px-10 py-5 w-full fixed-top shadow-lg">
        <router-link to="/"><a class="text-3xl">IRAN</a></router-link> 
        <ul v-if="activeNav" class="flex md:flex pt-14 md:pt-0 justify-between">
            <router-link to="/Map"><li class="text-xl pr-5">map</li></router-link>
            <router-link to="/Touristy"><li class="text-xl border-l border-slate-300 pl-5">touristy</li></router-link>
        </ul>
        <ul class="md:visible hidden md:flex pt-14 md:pt-0 justify-between">
            <router-link to="/Map"><li class="text-xl pr-5">map</li></router-link>
            <router-link to="/Touristy"><li class="text-xl border-l border-slate-300 pl-5">touristy</li></router-link>
        </ul>
        <div class="hamberger-menu md:hidden inline-block" @click="showNav()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            activeNav : false,
        }
    },
    methods:{
        showNav(){
            this.activeNav = !this.activeNav
        }
    }
}
</script>

<style>

</style>
