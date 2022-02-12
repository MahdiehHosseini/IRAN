import { createRouter, createWebHistory } from "vue-router";
import home from './components/home page/HomePage.vue'
import singlePlacePage from './components/places/placePage.vue'
import turism from './components/touristy page/TouristyPage.vue'
import singleCollection from './components/touristy page/collections/single collection/SingleCollection.vue'
import map from './components/map page/MapPage.vue'
import statesPage from './components/map page/states/StatesPage.vue'
import NotFound from './components/Page404.vue'
const routes = [{
    path: '/',
    name: 'Home',
    component: home
}, {
    path: '/Touristy',
    name: 'Touristy',
    component: turism
}, {
    path: '/Map',
    name: 'Map',
    component: map
}, {
    path: '/Touristy/:collectionName',
    name: 'collection page',
    component: singleCollection
}, {
    path: '/Map/:statesName',
    name: 'states page',
    component: statesPage
}, {
    path: '/:placeName',
    name: 'place page',
    component: singlePlacePage
}, {
    path: '/404',
    name: '404',
    component: NotFound
}, {
    path: '/*',
    redirect: '/404'
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router