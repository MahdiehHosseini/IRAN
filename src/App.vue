<template>
   <Nav-bar v-if="$route.fullPath !== '/'"></Nav-bar>
   <router-view></router-view>
   <Footer v-if="$route.fullPath !== '/404'"></Footer>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/TheFooter.vue'
export default {
    components : {
        Footer,
        NavBar
    }
}
</script>